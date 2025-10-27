import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../lib/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';


const EditPetPage: React.FC = () => {
  const { petId } = useParams<{ petId: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    species: 'dog',
    breed: '',
    age: 1,
    gender: 'male' as 'male' | 'female',
    photo: '',
    color: '',
    vaccinated: false,
    neutered: false,
    character: '',
    features: '',
    status: 'available' as 'available' | 'reserved' | 'adopted',
    history: '',
    arrivalDate: new Date().toISOString().split('T')[0],
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (user?.role !== 'worker') {
      navigate('/');
    }
  }, [user, navigate]);

  
  useEffect(() => {
    if (!petId) return;

    const fetchPet = async () => {
      try {
        const docRef = doc(db, 'pets', petId);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
          navigate('/pets');
          return;
        }

        const data = docSnap.data();
        setFormData({
          name: data.name || '',
          species: data.species || 'dog',
          breed: data.breed || '',
          age: data.age || 1,
          gender: data.gender || 'male',
          photo: data.photo || '',
          color: data.color || '',
          vaccinated: data.vaccinated || false,
          neutered: data.neutered || false,
          character: data.character || '',
          features: data.features || '',
          status: data.status || 'available',
          history: data.history || '',
          arrivalDate: data.arrivalDate
            ? data.arrivalDate.substring(0, 10)
            : new Date().toISOString().split('T')[0],
        });
        setImagePreview(data.photo || null);
      } catch (err) {
        console.error(err);
        setError('Не удалось загрузить данные питомца');
      } finally {
        setLoading(false);
      }
    };

    fetchPet();
  }, [petId, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Пожалуйста, выберите изображение');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result as string);
    
    };
    reader.readAsDataURL(file);
  };


 const uploadImageToImgBB = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch(
      'https://api.imgbb.com/1/upload?key=d167a63cf28622b94295f49f63e099d7', 
      {
        method: 'POST',
        body: formData,
      }
    );

    const data = await response.json();
    if (!data.success) {
      throw new Error(data.error?.message || 'Ошибка загрузки');
    }
    return data.data.url;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!petId) {
      setError('ID питомца не найден');
      return;
    }

    let imageUrl = formData.photo;

    const fileInput = e.currentTarget.querySelector('input[type="file"]') as HTMLInputElement;
    const file = fileInput?.files?.[0];

    if (file) {
      try {
        imageUrl = await uploadImageToImgBB(file);
      } catch (err) {
        setError('Не удалось загрузить изображение на ImgBB');
        console.error(err);
        return;
      }
    }

    try {
      
      await updateDoc(doc(db, 'pets', petId), {
        ...formData,
        photo: imageUrl,
        updatedAt: new Date().toISOString(),
      });

      alert('Питомец успешно обновлён!');
      navigate('/pets');
    } catch (err) {
      console.error(err);
      setError('Ошибка при обновлении питомца. Проверьте подключение и права.');
    }
  };

  if (loading) {
    return <div className="container py-5 text-center">Загрузка...</div>;
  }

  return (
    <div className="container py-5 m-3">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow">
            <div className="card-header bg-warning text-dark">
              <h3 className="mb-0">Редактировать питомца</h3>
            </div>
            <div className="card-body">
              {error && <div className="alert alert-danger">{error}</div>}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Имя *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Вид</label>
                  <select
                    className="form-select"
                    name="species"
                    value={formData.species}
                    onChange={handleChange}
                  >
                    <option value="dog">Собака</option>
                    <option value="cat">Кошка</option>
                    <option value="other">Другое</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Порода</label>
                  <input
                    type="text"
                    className="form-control"
                    name="breed"
                    value={formData.breed}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Возраст (лет)</label>
                  <input
                    type="number"
                    className="form-control"
                    name="age"
                    min="0"
                    max="30"
                    value={formData.age}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Пол</label>
                  <div>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        id="male"
                        className="form-check-input"
                        name="gender"
                        value="male"
                        checked={formData.gender === 'male'}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="male">Мужской</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        id="female"
                        className="form-check-input"
                        name="gender"
                        value="female"
                        checked={formData.gender === 'female'}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="female">Женский</label>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Окрас</label>
                  <input
                    type="text"
                    className="form-control"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      id="vaccinated"
                      className="form-check-input"
                      name="vaccinated"
                      checked={formData.vaccinated}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="vaccinated">
                      Привит
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      id="neutered"
                      className="form-check-input"
                      name="neutered"
                      checked={formData.neutered}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="neutered">
                      Кастрирован/стерилизован
                    </label>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Характер</label>
                  <textarea
                    className="form-control"
                    name="character"
                    value={formData.character}
                    onChange={handleChange}
                    rows={2}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Особенности</label>
                  <textarea
                    className="form-control"
                    name="features"
                    value={formData.features}
                    onChange={handleChange}
                    rows={2}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Статус</label>
                  <select
                    className="form-select"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="available">Доступен для adoption</option>
                    <option value="reserved">Зарезервирован</option>
                    <option value="adopted">Усыновлён</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">История</label>
                  <textarea
                    className="form-control"
                    name="history"
                    value={formData.history}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>

               
                <div className="mb-3">
                  <label className="form-label">Дата прибытия</label>
                  <input
                    type="date"
                    className="form-control"
                    name="arrivalDate"
                    value={formData.arrivalDate}
                    onChange={handleChange}
                  />
                </div>

                
                <div className="mb-3">
                  <label className="form-label">Фото</label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  {imagePreview && (
                    <div className="mt-2">
                      <img
                        src={imagePreview}
                        alt="Предпросмотр"
                        style={{ maxHeight: '200px', maxWidth: '100%' }}
                      />
                    </div>
                  )}
                </div>

               
                <button type="submit" className="btn btn-warning w-100">
                  Сохранить изменения
                </button>
              </form>

         
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPetPage;