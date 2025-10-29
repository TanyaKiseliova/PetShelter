import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import PetForm from '../components/PetForm';


const AddPetPage: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

 

   if (user?.role !== 'worker') {
    navigate('/');
    return null;
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">Добавить нового питомца</h3>
            </div>
              <div className="card-body">
                <PetForm mode="create" />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AddPetPage;