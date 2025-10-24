import React from 'react';
import AboutSection from '../components/AboutSection';
import VideoSection from '../components/VideoSection';
import AmountSection from '../components/AmountSection';

const AboutPage: React.FC = () => {
  return (
    <>
            
    <div className="container py-5 px-md-4">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="display-6 fw-bold text-primary">Как устроен наш приют</h2>
                <p>
                  В нашем приюте находят временный дом песики и котики, которые живут группами по 6 особей в 1 комнате. У каждого есть свои лежанки, мисочки с водой и едой. которые на регклярной основе пополняются нашими работниками и волонтерами. 
                  </p>
                <p>
                  Все собачки 2 раза в день выхоят из своих домиков на прогулку с другими жителями нашего приюта, это помогает им размятья, погять, поиграть и пообщаться с другими питомцами для социализации.
                </p>

                <p>Внизу этой странички можете посмотреть видео о работе приюта, чтобы лучше понять то, чем мы занимаемся</p>
              </div>
              <div className="col-lg-6">
                <img 
                  src="https://vetandlife.ru/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-26-at-08.39.41-1024x682.jpeg" 
                  alt="Наш приют" 
                  className="img-fluid rounded shadow"
                />
              </div>
            </div>
          </div>

        <AboutSection />
          
        <AmountSection />
        
      <VideoSection />
    </>
  );
};

export default AboutPage;