import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
//import { RegisterFormData } from '../types';

const RegisterPage: React.FC = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (password !== confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }

    if (password.length < 6) {
      setError('Пароль должен быть не менее 6 символов');
      return;
    }

    const userData = {
      name,
      email,
      password,
      role: 'visitor' as const
    };


    const successReg = await register(userData);
    if (successReg) {
      setSuccess(true);
      setTimeout(() => navigate('/'), 2000);
    } else {
      setError('Пользователь с таким email уже существует');
    }
    
  };

  return (
     <div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card shadow">
          <div className="card-header bg-primary text-white">
            <h3 className="mb-0">Регистрация посетителя</h3>
          </div>
          <div className="card-body">
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            {success && (
              <div className="alert alert-success" role="alert">
                Регистрация успешна! Переход на главную страницу...
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Имя</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                   onChange={(e) => setEmail(e.target.value)}
                  // onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Пароль</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={password}
                    onChange={(e) => setPassword(e.target.value)}
                 // onChange={handleChange}
                  required
                  minLength={6}
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Подтвердите пароль</label>
                <input type="password" className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  //onChange={handleChange}
                  required
                />
              </div>
              
              <button type="submit" className="btn btn-success w-100 text-light ">
                Зарегистрироваться
              </button>
              
              <div className="text-center mt-3">
                <a href="/login" className="text-decoration-none">
                  Уже есть аккаунт? Войти как работник
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default RegisterPage;