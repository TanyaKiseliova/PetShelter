import React from 'react';

interface VolunteerCardProps {
  name: string;
  role: string;
  image: string;
}

const VolunteerCard: React.FC<VolunteerCardProps> = ({ name, role, image }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 text-center border-0 shadow-sm">
        <img 
          src={image} 
          alt={name} 
          className="card-img-top rounded-circle mx-auto mt-3" 
          style={{ width: '150px', height: '150px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text text-muted">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default VolunteerCard;