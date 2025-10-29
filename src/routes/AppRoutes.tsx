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
import Footer from '../components/Footer';
import PetDetailPage from '../pages/PetDetailPage';
import EditPetPage from '../pages/EditPetPage';

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
     <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
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

            <Route path="/pet/:id" element={<PetDetailPage />} />

            <Route path="/pet/:petId/edit" element={
              <ProtectedRoute allowedRoles={['worker']}>
                  <EditPetPage />
                </ProtectedRoute>
              } />
    

          </Routes>
        </div>
      </main> 
      <Footer />
    </div>
  );
};

export default AppRoutes;