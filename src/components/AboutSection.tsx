import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <h2 className="display-5 fw-bold text-primary">Почему стоит брать животных из приюта?</h2>
            <p className="lead">
              Каждое животное в приюте заслуживает любви и заботы. Беря питомца из приюта, вы не только спасаете жизнь, но и даете шанс на счастливое будущее.
            </p>
            <ul className="list-unstyled">
              <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Спасение жизни</li>
              <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Экономия денег</li>
              <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Поддержка благотворительности</li>
              <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Готовые к новому дому</li>
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="bg-white p-4 rounded shadow">
              <h3>Виды помощи</h3>
              <div className="accordion" id="helpAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button 
                      className="accordion-button" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#food"
                    >
                      Еда
                    </button>
                  </h2>
                  <div 
                    id="food" 
                    className="accordion-collapse collapse show" 
                    data-bs-parent="#helpAccordion"
                  >
                    <div className="accordion-body">
                      Мы нуждаемся в сухом и влажном корме для кошек и собак разных возрастов.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button 
                      className="accordion-button collapsed" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#medicine"
                    >
                      Лекарства
                    </button>
                  </h2>
                  <div 
                    id="medicine" 
                    className="accordion-collapse collapse" 
                    data-bs-parent="#helpAccordion"
                  >
                    <div className="accordion-body">
                      Антибиотики, витамины, средства от паразитов и другие необходимые препараты.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button 
                      className="accordion-button collapsed" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#accessories"
                    >
                      Аксессуары
                    </button>
                  </h2>
                  <div 
                    id="accessories" 
                    className="accordion-collapse collapse" 
                    data-bs-parent="#helpAccordion"
                  >
                    <div className="accordion-body">
                      Ошейники, поводки, лежаки, игрушки и другие предметы для ухода за животными.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;