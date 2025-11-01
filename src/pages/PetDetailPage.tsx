import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAuth } from '../contexts/AuthContext';
import { Pet } from '../types'; 
import {  deleteDoc } from 'firebase/firestore';

export default function PetDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const [pet, setPet] = useState<Pet | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

 useEffect(() => {
    const fetchPet = async () => {
      if (!id) {
        setError('ID питомца не указан');
        setLoading(false);
        return;
      }

      try {
        const docRef = doc(db, 'pets', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPet({ id: docSnap.id, ...docSnap.data() } as Pet);
        } else {
          setError('Питомец не найден');
        }
      } catch (err) {
        setError('Ошибка загрузки питомца');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPet();
  }, [id]);
  


  if (loading) return <div>Загрузка...</div>;
  if (error) return <div className="error">{error}</div>;



const handleDelete = async () => {
  if (!user ||!pet || user.role !== 'worker') return;

  if (window.confirm("Удалить питомца?")) {
    try {
      await deleteDoc(doc(db, 'pets', pet.id));
      navigate('/pets');
    } catch (err) {
      alert("Ошибка при удалении питомца.")
      console.error(err);
    }
  }
};

const handleEdit = () => {
  if (!user || !pet || user.role !== 'worker') return;
  navigate(`/pet/${pet.id}/edit`);
};


 if (!pet) return <div className="alert alert-warning mt-5">Нет данных о питомце</div>;

  return (
    <div className="container py-5 m-3">
      <div className="row justify-content-center">
      <div className="col-lg-9">
      <h1 className = "text-center text-primary  mb-2 fs-1 fw-bold">{pet?.name}</h1>

        {!user ? (
        <div className="alert alert-info text-center">
           <p className="mb-3">
          Пожалуйста, войдите в аккаунт, чтобы увидеть полную информацию о питомце.
          </p>
           <Link to="/login" className="btn btn-outline-dark btn-sm buttom">
             Вход
          </Link>
        </div>
        
      ) : (
         <div className="card shadow-sm m-3">
            <div className="card-body">
              <div className="row g-4">
               <div className="col-md-6">
                 <div className="col-md-12">
                    <img
                      src={pet.photo || '/placeholder.jpg'}
                      alt={pet.name}
                      className="img-fluid rounded"
                      style={{ height: '500px', objectFit: 'cover' }}
                    />
                  </div>

                </div>

                <div className="col-md-6">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <strong>Вид:</strong>{' '}
                      {pet.species === 'dog'
                        ? 'Собака'
                        : pet.species === 'cat'
                        ? 'Кошка'
                        : 'Другое животное'}
                    </li>

                    {pet.breed && (
                      <li className="list-group-item">
                        <strong>Порода:</strong> {pet.breed}
                      </li>
                    )}

                    <li className="list-group-item">
                      <strong>Возраст:</strong> {pet.age} {pet.age % 10 === 1 && pet.age !== 11 ? 'год' : pet.age % 10 >= 2 && pet.age % 10 <= 4 && (pet.age < 10 || pet.age > 20) ? 'года' : 'лет'}
                    </li>

                    <li className="list-group-item">
                      <strong>Пол:</strong>{' '}
                      {pet.gender === 'male' ? 'Мужской (кабель)' : 'Женский (сука)'}
                    </li>

                    {pet.color && (
                      <li className="list-group-item">
                        <strong>Окрас:</strong> {pet.color}
                      </li>
                    )}

                    <li className="list-group-item">
                      <strong>Привит:</strong>{' '}
                      <span className={`badge ${pet.vaccinated ? 'bg-success' : 'bg-danger'}`}>
                        {pet.vaccinated ? 'Да' : 'Нет'}
                      </span>
                    </li>

                    <li className="list-group-item">
                      <strong>Кастрирован/стерилизован:</strong>{' '}
                      <span className={`badge ${pet.neutered ? 'bg-success' : 'bg-danger'}`}>
                        {pet.neutered ? 'Да' : 'Нет'}
                      </span>
                    </li>

                    {pet.arrivalDate && (
                      <li className="list-group-item">
                        <strong>Дата прибытия:</strong>{' '}
                        {new Date(pet.arrivalDate).toLocaleDateString('ru-RU')}
                      </li>
                    )}

                    {pet.character && (
                      <li className="list-group-item">
                        <strong>Характер:</strong> {pet.character}
                      </li>
                    )}

                    {pet.features && (
                      <li className="list-group-item">
                        <strong>Особенности:</strong> {pet.features}
                      </li>
                    )}

                    {pet.history && (
                      <li className="list-group-item">
                        <strong>История:</strong> {pet.history}
                      </li>
                    )}

                    <li className="list-group-item">
                      <strong>Статус:</strong>{' '}
                      <span
                        className={`badge ${
                          pet.status === 'available'
                            ? 'bg-success'
                            : pet.status === 'reserved'
                            ? 'bg-warning text-dark'
                            : 'bg-secondary'
                        }`}
                      >
                        {pet.status === 'available'
                          ? 'Ищет новый дом'
                          : pet.status === 'reserved'
                          ? 'Забронирован'
                          : 'Нашёл дом'}
                      </span>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        
        <div className="mt-4 d-flex gap-2 flex-wrap justify-content-center">
          {user?.role === 'visitor' && pet?.status === 'available' && (
            <button className="btn btn-primary">
              Хочу взять питомца или узнать больше
            </button>
          )}

          {user?.role === 'worker' && (
            <>
              <button onClick={handleEdit} className="btn btn-secondary">
                Редактировать
              </button>
              <button onClick={handleDelete} className="btn btn-danger">
                Удалить
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  </div>
);
}
         