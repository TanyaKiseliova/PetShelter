import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAuth } from '../contexts/AuthContext';
import { Pet } from '../types'; 
import { updateDoc, deleteDoc } from 'firebase/firestore';

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
    <div className="pet-detail">
      <h1>{pet?.name}</h1>

        {!user ? (
        <div className="login-required-message">
          Пожалуйста, войдите в аккаунт, чтобы увидеть полную информацию о питомце.
           <Link to="/login" className="btn btn-outline-dark btn-sm ">
             Вход
          </Link>
        </div>
        
      ) : (
         <div className="card-body">
        <>
          <img src={pet?.photo || '/placeholder.jpg'} alt={pet?.name} />
          <p><strong>Вид:</strong>
          {pet?.species === 'dog' ? ' собака' :
             pet?.species === 'cat' ? ' кот' :
             ' другое животное'}
           </p>

          {pet?.breed && <p><strong>Порода:</strong> {pet?.breed}</p>}
          {pet?.age && <p><strong>Возраст:</strong> {pet.age} лет</p>}

         
          <p><strong>Пол:</strong> 
           {pet?.gender === 'male' ? ' мужской (кабель)' :
             pet?.gender === 'female' ? ' женский (сука)' :
             ' пол не был укаан'}
          </p>
        
          {<p><strong>Окрас:</strong> {pet?.color}</p>}
          {<p><strong>Характер:</strong> {pet?.character}</p>}

          <p><strong>Есть ли прививки:</strong>
          {pet?.vaccinated === true ? ' да' : 'нет'}
          </p>
          
          
          <p><strong>Кастрирован/стерилизована:</strong>
           {pet?.neutered === true ? ' да' : 'нет'}
          </p>
             
          {pet?.arrivalDate && <p><strong>Дата прибытия:</strong> {pet?.arrivalDate}</p>}

          {<p><strong>Описание:</strong> {pet?.features}</p>}
          { <p><strong>История:</strong> {pet?.history}</p>}

          <p><strong>Статус:</strong> 
            {pet?.status === 'available' ? ' В посках нового дома' :
             pet?.status === 'reserved' ? ' Забронирован' :
             ' Нашел дом'}
          </p>
        </>
         </div> 
      )}
      

      <div className="mt-4 d-flex gap-2 flex-wrap">
        {user?.role === 'visitor' && pet?.status === 'available' && (
          <button 
          
          className="btn btn-primary text-light">
             Хочу взять питомцы или узнать больше
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
  );
}

