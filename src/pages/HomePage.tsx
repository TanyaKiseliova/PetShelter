import React from 'react';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import MapSection from '../components/MapSection';
import VolunteersSection from '../components/VolunteersSection';

const HomePage: React.FC = () => {
  

  return (
    <>
      {/* <Header />
      
     
      <div className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">PetShelter</h1>
          <p className="lead">Найдите своего нового друга или помогите спасти жизнь!</p>
        </div>
      </div> */}


<div className="bg-primary text-white py-5">
        <div className="container text-center">
          <h2 className="display-4 fw-bold">Приют "В добрые руки"</h2>
           </div>
      </div>
     
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4">
            <img 
              src="https://images.techinsider.ru/upload/img_cache/926/926779322a409549131ee5a32a8d1ec0_ce_2560x1344x0x128_cropped_1200x628.jpg" 
              alt="Приют для животных" 
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-lg-6">
                        <p>
              Мы приют для животных "В добрые руки", занимаемся спасением животных. Наши работники и волонтеры работают ежедневно, чтобы дать каждому животному заботу, ласку и шанс на новую  жизнь.
            </p>
            <p>
              Мы принимаем новых питомцев, обеспечиваем их необходимым лечнием, кормим и готовим к новой семье. 
            </p>
            <p>
              Чтобы взять понравившегося питомца или помочь животным свяжитесь с нами.
              Помните, животным нужна любая ваша помочь, ваш выбор может изменить жизнь питомца!
            </p>
          </div>
        </div>
      </div>

       <VolunteersSection />

      <AboutSection />

      <MapSection />
    </>
  );
};

export default HomePage;