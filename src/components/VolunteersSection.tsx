
import React from 'react';
import VolunteerCard from './VolunteerCard';

import mariaImg from '../assets/images/volunteer/maria.jpg';
import olegImg from '../assets/images/volunteer/oleg.jpg';
import vikaImg from '../assets/images/volunteer/vika.jpg';

const volunteers = [
  {
    name: "Мария",
    role: "Волонтер, ухаживает, кормит, выгуливает",
    image: mariaImg,
  },
  {
    name: "Олег",
    role: "Ветеринар, лечит больных животных",
    image: olegImg,
  },
  {
    name: "Виктория",
    role: "Менеджер, ищет питомцу новый дом",
    image: vikaImg,
  }
];

const VolunteersSection: React.FC = () => {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Наша команда</h2>
        <div className="row">
          {volunteers.map((volunteer, index) => (
            <VolunteerCard 
              key={index} 
              name={volunteer.name} 
              role={volunteer.role} 
              image={volunteer.image} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VolunteersSection;