import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../lib/firebase';
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';

type PetFormData = {
  name: string;
  species: 'dog' | 'cat' | 'other';
  breed: string;
  age: number;
  gender: 'male' | 'female';
  photo: string;
  color: string;
  vaccinated: boolean;
  neutered: boolean;
  character: string;
  features: string;
  status: 'available' | 'reserved' | 'adopted';
  history: string;
  arrivalDate: string;
};

type PetFormProps = {
  mode: 'create' | 'edit';
  petId?: string;
  initialData?: PetFormData;
};

const PetForm: React.FC<PetFormProps> = ({ mode, petId, initialData }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [imagePreview, setImagePreview] = useState<string | null>(initialData?.photo || null);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState<PetFormData>(
    initialData || {
      name: '',
      species: 'dog',
      breed: '',
      age: 1,
      gender: 'male',
      photo: '',
      color: '',
      vaccinated: false,
      neutered: false,
      character: '',
      features: '',
      status: 'available',
      history: '',
      arrivalDate: new Date().toISOString().split('T')[0],
    }
  );

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
    const fd = new FormData();
    fd.append('image', file);

    const response = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB}`,
      { method: 'POST', body: fd }
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

    if (!user) {
      setError('Требуется авторизация');
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
      if (mode === 'create') {
        await addDoc(collection(db, 'pets'), {
          ...formData,
          photo: imageUrl,
          ownerId: user.id,
          createdAt: new Date().toISOString(),
        });
        alert('Питомец успешно добавлен!');
      } else if (mode === 'edit') {
        if (!petId) throw new Error('ID питомца обязателен');
        await updateDoc(doc(db, 'pets', petId), {
          ...formData,
          photo: imageUrl,
          updatedAt: new Date().toISOString(),
        });
        alert('Питомец успешно обновлён!');
      }

      navigate('/pets');
    } catch (err) {
      console.error(err);
      setError('Ошибка при сохранении питомца. Проверьте подключение.');
    }
  };

  const isEditing = mode === 'edit';

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="alert alert-danger">{error}</div>}

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
          <label className="form-check-label" htmlFor="vaccinated">Привит</label>
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
          <label className="form-check-label" htmlFor="neutered">Кастрирован/стерилизован</label>
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
          <option value="available">Ищет новый дом</option>
          <option value="reserved">Зарезервирован</option>
          <option value="adopted">Нашел дом</option>
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

      <button
        type="submit"
        className={`btn ${isEditing ? 'btn-warning' : 'btn-success'} w-100`}
      >
        {isEditing ? 'Сохранить изменения' : 'Добавить питомца'}
      </button>
    </form>
  );
};

export default PetForm;