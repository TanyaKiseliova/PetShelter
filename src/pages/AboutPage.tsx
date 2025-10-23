import React from 'react';
import AboutSection from '../components/AboutSection';
//import Header from '../components/Header';

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
     
      <div className="bg-light py-5 px-md-4">
        <div className="container px-md-4">
          <h2 className="text-center mb-4 display-8 fw-bold text-primary">Наш приют в цифрах</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h3 className="card-title d-flex justify-content-center align-items-center">5</h3>
                  <p className="card-text d-flex justify-content-center align-items-center">
                    лет опыта 
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h3 className="card-title d-flex justify-content-center align-items-center">150</h3>
                  <p className="card-text d-flex justify-content-center align-items-center">
                   питомцев счастливы в новвх домах
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h3 className="card-title  d-flex justify-content-center align-items-center">20</h3>
                  <p className="card-text d-flex justify-content-center align-items-center">
                    животных все еще в приюте 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
     <div className="row mt-5">
    <div className="col-12">
      <h3 className="text-center mb-4 display-8 fw-bold text-primary">Видео о работе приюта</h3>
      <div className="ratio ratio-16x9" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <iframe
          src="https://www.youtube.com/embed/l5tIuiRpkDo?si=gZm3HWbFjmoNmLHO"
          title="Video about shelter"
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
      
    </>
  );
};

export default AboutPage;