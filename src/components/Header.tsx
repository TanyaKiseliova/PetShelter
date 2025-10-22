import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Header: React.FC = () => {


const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Пока идёт загрузка — не рендерим кнопки
  if (loading) {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <span className="navbar-brand fw-bold">PetShelter</span>
        </div>
      </nav>
    );
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold">PetShelter</Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link active">Главная</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">О нас</Link>
            </li>
            <li className="nav-item">
              <Link to="/pets" className="nav-link">Животные</Link>
            </li>
          </ul>


<div className="d-flex align-items-center">
            {user ? (
              <div className="d-flex align-items-center gap-3">
                <span className="text-white">
                  Привет, {user.name}!
                </span>
                <button
                  onClick={handleLogout}
                  className="btn btn-outline-light btn-sm"
                >
                  Выйти
                </button>
              </div>
            ) : (
              <div className="d-flex gap-2">
                <Link to="/register" className="btn btn-outline-light btn-sm">
                  Регистрация
                </Link>
                <Link to="/login" className="btn btn-outline-light btn-sm">
                  Вход
                </Link>
              </div>
            )}
</div>

        </div>
      </div>
    </nav>
  );
};

export default Header;