import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import logo from '../assets/images/logo/dogLogoWhite.png';

const Header: React.FC = () => {


const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation(); 

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isActive = (path: string) => location.pathname === path;
  const closeNavbar = () => {
  const navbarCollapse = document.getElementById('navbarNav');
  if (navbarCollapse && navbarCollapse.classList.contains('show')) {
    const bsCollapse = new (window as any).bootstrap.Collapse(navbarCollapse);
    bsCollapse.hide();
  }
};


const handleAction = () => {
    handleLogout();
    closeNavbar();
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        
        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            alt="PetShelter"
            height="40"
            className="d-inline-block align-text-top"
          />
        </Link>

        <button  className="navbar-toggler"  type="button"  data-bs-toggle="collapse"  data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto p-1 ">
            <li className="nav-item text-center">
              <Link to="/"   className={`nav-link ${isActive('/') ? 'fw-bold text-light ' : ''}`} onClick={closeNavbar}>Главная</Link>
            </li>
            <li className="nav-item text-center">
              <Link to="/about" className={`nav-link ${isActive('/about') ? 'fw-bold text-light ' : ''}`} onClick={closeNavbar}>О нас</Link>
            </li>
            <li className="nav-item text-center">
              <Link to="/pets" className={`nav-link ${isActive('/pets') ? 'fw-bold text-light ' : ''}`} onClick={closeNavbar}>Животные</Link>
            </li>
          </ul>


          <div className="d-flex align-items-center justify-content-center" >
            {user ? (
              <div className="d-flex align-items-center">
                <span className="text-white"> {user.name}</span>
                <button onClick={handleAction} className="btn btn-outline-light btn-sm" >
                   Выйти
                </button>
              </div>
            ) : (
               <div className="d-flex gap-2">
                  <Link to="/register" className="btn btn-outline-light btn-sm" onClick={closeNavbar}>
                    Регистрация
                   </Link>
                    <Link to="/login" className="btn btn-outline-light btn-sm " onClick={closeNavbar}>
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