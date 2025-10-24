import React from 'react';
import MapSection from '../components/MapSection';
import VolunteersSection from '../components/TeamSection';
import HelpTypesSection from '../components/HelpTypesSection';

const HomePage: React.FC = () => {

  return (
    <>     
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-4">
            <img 
              src="https://images.techinsider.ru/upload/img_cache/926/926779322a409549131ee5a32a8d1ec0_ce_2560x1344x0x128_cropped_1200x628.jpg" 
              alt="Приют для животных" 
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-lg-5">
            <h3 className="display-6 fw-bold text-primary"> "В добрые руки" </h3> 
            <p>
               - это  приют для животных занимающийся спасением животных. Наши работники и волонтеры работают ежедневно, чтобы дать каждому животному заботу, ласку и шанс на новую  жизнь.
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

      <HelpTypesSection />

      <MapSection />

    </>
  );
};

export default HomePage;