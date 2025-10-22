import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pet } from '../types';
import { useAuth } from '../contexts/AuthContext';

const AddPetPage: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<Omit<Pet, 'id' | 'createdAt'>>({
    name: '',
    species: 'dog',
    breed: '',
    age: 1,
    gender: 'male',
    photo: '',
    color: '',
    vaccinated: false,
    neutered: false,
    attitudeToPeople: '',
    character: '',
    features: '',
    status: 'available',
    history: '',
    arrivalDate: new Date().toISOString().split('T')[0],
    additionalInfo: '',
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [error, setError] = useState('');

  if (user?.role !== 'worker') {
    navigate('/');
    return null;
  }



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
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
      setFormData(prev => ({ ...prev, photo: reader.result as string }));
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim()) {
      setError('Укажите имя питомца');
      return;
    }

    // в localStorage
    const pets = JSON.parse(localStorage.getItem('pets') || '[]') as Pet[];
    const newPet: Pet = {
      ...formData,
      id: `pet_${Date.now()}`,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem('pets', JSON.stringify([...pets, newPet]));

    alert('Питомец успешно добавлен!');
    navigate('/pets');
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">Добавить нового питомца</h3>
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
                  <label className="form-label">Отношение к людям</label>
                  <textarea
                    className="form-control"
                    name="attitudeToPeople"
                    value={formData.attitudeToPeople}
                    onChange={handleChange}
                    rows={2}
                  />
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
                  <label className="form-label">Дополнительная информация</label>
                  <textarea
                    className="form-control"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    rows={3}
                  />
                </div>

                <button type="submit" className="btn btn-success w-100">
                  Добавить питомца
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPetPage;