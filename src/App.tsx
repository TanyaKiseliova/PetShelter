import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [userRole, setUserRole] = useState<'worker' | 'visitor' | null>(null);
  
  // Mock данные для инвентаризаций
  const inventories = [
    {
      id: 1,
      title: 'Кошки для усыновления',
      description: 'Кошки, готовые к новому дому',
      customIdFormat: 'CAT-{YEAR}-{SEQ}',
      animalCount: 12
    },
    {
      id: 2,
      title: 'Собаки для усыновления', 
      description: 'Собаки, ищущие семью',
      customIdFormat: 'DOG-{YEAR}-{SEQ}',
      animalCount: 8
    },
    {
      id: 3,
      title: 'Птицы и мелкие животные',
      description: 'Попугаи, хомячки, кролики',
      customIdFormat: 'BIRD-{YEAR}-{SEQ}',
      animalCount: 15
    }
  ];

  const handleLoginAsWorker = () => {
    setUserRole('worker');
  };

  const handleLoginAsVisitor = () => {
    setUserRole('visitor');
  };

  const handleLogout = () => {
    setUserRole(null);
  };

  return (
    <div className="min-vh-100 bg-light">
      {/* Навигация */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <span className="navbar-brand fw-bold">PetShelter</span>
          <div className="d-flex align-items-center">
            {userRole ? (
              <>
                <span className="text-white me-3">
                  {userRole === 'worker' ? '👷 Работник' : '👤 Посетитель'}
                </span>
                <button 
                  onClick={handleLogout}
                  className="btn btn-outline-light btn-sm"
                >
                  Выйти
                </button>
              </>
            ) : (
              <span className="text-white">Гость</span>
            )}
          </div>
        </div>
      </nav>

      {/* Основной контент */}
      <div className="container py-4">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-primary">Система управления приютом для животных</h1>
          <p className="lead text-muted">Найдите своего нового друга или управляйте инвентаризацией</p>
        </div>

        {/* Кнопки входа (для гостей) */}
        {!userRole && (
          <div className="row justify-content-center mb-5">
            <div className="col-md-6 text-center">
              <div className="alert alert-info">
                <h5 className="alert-heading">Добро пожаловать!</h5>
                <p>Выберите роль для начала работы:</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <button 
                    onClick={handleLoginAsVisitor}
                    className="btn btn-success me-sm-2"
                  >
                    🏠 Зарегистрироваться как посетитель
                  </button>
                  <button 
                    onClick={handleLoginAsWorker}
                    className="btn btn-primary"
                  >
                    👷 Войти как работник
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Список инвентаризаций */}
        <div className="mb-4">
          <h2 className="text-center mb-4">Доступные категории животных</h2>
          
          <div className="row g-4">
            {inventories.map(inventory => (
              <div key={inventory.id} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{inventory.title}</h5>
                    <p className="card-text text-muted flex-grow-1">{inventory.description}</p>
                    
                    <div className="mb-3">
                      <small className="text-muted">Формат ID: </small>
                      <code className="bg-light p-1 rounded">{inventory.customIdFormat}</code>
                    </div>
                    
                    <div className="mb-3">
                      <span className="badge bg-primary">Животных: {inventory.animalCount}</span>
                    </div>
                    
                    <div className="mt-auto">
                      <a href="#" className="btn btn-outline-primary w-100 mb-2">
                        👀 Просмотреть животных
                      </a>
                      {userRole === 'worker' && (
                        <a href="#" className="btn btn-primary w-100">
                          ✏️ Управлять инвентаризацией
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Футер */}
        <footer className="text-center text-muted mt-5 pt-3 border-top">
          <p>PetShelter - Система управления приютом для животных © 2024</p>
        </footer>
      </div>
    </div>
  );
}

export default App;