import React from 'react';
import { Pet } from '../types';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

const PetsPage: React.FC = () => {
  const { user } = useAuth();
  const pets = JSON.parse(localStorage.getItem('pets') || '[]') as Pet[];

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center text-center mb-4 display-8 fw-bold text-primary">
        <h2 >Наши питомцы</h2>
        {user?.role === 'worker' && (
          <Link to="/add-pet" className="btn btn-primary text-white">
            + Добавить питомца
          </Link>
        )}
      </div>

      {pets.length === 0 ? (
        <p className="text-center">Пока нет питомцев.</p>
      ) : (
        <div className="row">
          {pets.map(pet => (
            <div key={pet.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100">
                {pet.photo && (
                  <img
                    src={pet.photo}
                    alt={pet.name}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                )}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{pet.name}</h5>
                  <p className="text-muted">{pet.breed}, {pet.age} лет</p>
                  <p className="card-text flex-grow-1">
                    {pet.character.substring(0, 80)}...
                  </p>
                  <div>
                    <span className={`badge ${
                      pet.status === 'available' ? 'bg-success' :
                      pet.status === 'reserved' ? 'bg-warning' : 'bg-secondary'
                    }`}>
                      {pet.status === 'available' ? 'Доступен' :
                       pet.status === 'reserved' ? 'Зарезервирован' : 'Усыновлён'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PetsPage;