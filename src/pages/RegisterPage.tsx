import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { RegisterFormData } from '../types';

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    // Валидация
    if (formData.password !== formData.confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }

    if (formData.password.length < 6) {
      setError('Пароль должен быть не менее 6 символов');
      return;
    }

    const userData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: 'visitor' as const
    };

    if (register(userData)) {
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
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={6}
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Подтвердите пароль</label>
                <input type="password" className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
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