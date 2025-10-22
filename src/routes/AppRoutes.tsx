import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import Header from '../components/Header';
import AboutPage from '../pages/AboutPage'; 
import AddPetPage from '../pages/AddPetPage';
import PetsPage from '../pages/PetsPage';

const ProtectedRoute: React.FC<{ 
  children: React.ReactNode; 
  allowedRoles: ('worker' | 'visitor')[] 
}> = ({ children, allowedRoles }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="container text-center py-5">Загрузка...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

const AppRoutes: React.FC = () => {
  const { user } = useAuth();

  return (
    <>
      <Header />
      <div className="container py-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/register" 
            element={user ? <Navigate to="/" replace /> : <RegisterPage />} 
          />
          <Route 
            path="/login" 
            element={user ? <Navigate to="/" replace /> : <LoginPage />} 
          />
           <Route 
            path="/about" 
            element={<AboutPage />} 
          />

          <Route 
            path="/pets" 
            element={<PetsPage />} 
          />
          <Route 
            path="/add-pet" 
            element={
              <ProtectedRoute allowedRoles={['worker']}>
                <AddPetPage />
              </ProtectedRoute>
            } 
          />

          
        </Routes>
      </div>
    </>
  );
};

export default AppRoutes;