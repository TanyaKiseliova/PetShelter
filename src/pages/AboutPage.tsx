import React from 'react';
import Header from '../components/Header';

const AboutPage: React.FC = () => {
  return (
    <>
     
   
      <div className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">О нас</h1>
           </div>
      </div>

    
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <h2>Почему стоит брать животных из приюта?</h2>
            <p>
              Каждое животное в приюте заслуживает любви и заботы. Беря питомца из приюта, вы не только спасаете жизнь, но и даете шанс на счастливую жизнь.
            </p>
            <ul className="list-unstyled">
              <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Спасение жизни</li>
              <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Экономия денег</li>
              <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Поддержка благотворительности</li>
              <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Готовые к новому дому</li>
            </ul>
          </div>
          <div className="col-lg-6">
            <img 
              src="https://cs12.pikabu.ru/post_img/big/2022/01/28/9/1643380843113192245.jpg" 
              alt="Приют для животных" 
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>

     
      <div className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Виды помощи</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Еда</h5>
                  <p className="card-text">
                    Мы нуждаемся в сухом и влажном корме для кошек и собак разных возрастов.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Лекарства</h5>
                  <p className="card-text">
                    Антибиотики, витамины, средства от паразитов и другие необходимые препараты.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Аксессуары</h5>
                  <p className="card-text">
                    Ошейники, поводки, лежаки, игрушки и другие предметы для ухода за животными.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6">
            <h2>О нашем приюте</h2>
            <p>
              Мы - некоммерческая организация, занимающаяся спасением и реабилитацией бездомных животных. Наши волонтеры работают ежедневно, чтобы дать каждому животному шанс на счастливую жизнь.
            </p>
            <p>
              Каждый день мы принимаем новых питомцев, обеспечиваем их медицинским уходом, кормим и готовим к новой семье. Ваша помощь может изменить жизнь животного!
            </p>
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
    </>
  );
};

export default AboutPage;