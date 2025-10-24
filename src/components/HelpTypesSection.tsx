import React from 'react';

const HelpTypesSection: React.FC = () => {

  return (
    <>  
    <div className="container py-5">
        <div className="row justify-content-center align-items-center">

        <div className="col-lg-4">
          <h3 className="display-5 fw-bold text-primary">Как вы можете нам помочь?</h3>
          <p></p>
          <p>Мы стараемся из-за всех сил сделать жизнь каждого животного, попавшего к нам как можно лучше, однако без сторонней помощи </p>
          <p>Нам нужна любая помощь, даже самая малая, даже репост нашей страничке может помочь питомцам обрести новый дом</p>
        </div>

          <div className="col-lg-8">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="display-8 fw-bold text-primary">Виды помощи</h3>
              <div className="accordion" id="helpAccordion">

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button"  type="button"  data-bs-toggle="collapse" data-bs-target="#takePet"  >
                      Взять питомца
                    </button>
                  </h2>
                  <div id="takePet" className="accordion-collapse collapse show" data-bs-parent="#helpAccordion">
                    <div className="accordion-body">
                      Самая большая радость для нас и главная цель - это нахождение нового дома для питомца, где он будет в безапасности, обеспечен любовью и всем необъходимым
                    </div>
                  </div>
                </div>

                
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#food">
                      Еда
                    </button>
                  </h2>
                  <div id="food" className="accordion-collapse collapse"   data-bs-parent="#helpAccordion">
                    <div className="accordion-body">
                      Чтобы ежедневно содержать питомцем мы всегда нуждаемся в сухом и натуральном корме для кошечек и собачек разных возрастов.
                    </div>
                  </div>
                </div>


                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed"  type="button"  data-bs-toggle="collapse" data-bs-target="#medicine"  >
                      Лекарства
                    </button>
                  </h2>
                  <div id="medicine" className="accordion-collapse collapse" data-bs-parent="#helpAccordion">
                    <div className="accordion-body">
                      Животные иногда болеют, поэтому требуются различные антибиотики, витамины, средства от паразитов и для обработки ран.
                    </div>
                  </div>
                </div>


                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button  className="accordion-button collapsed"  type="button"  data-bs-toggle="collapse"  data-bs-target="#accessories" >
                      Аксессуары
                    </button>
                  </h2>
                  <div id="accessories" className="accordion-collapse collapse" data-bs-parent="#helpAccordion">
                    <div className="accordion-body">
                      Постоянно требуются ошейники, поводки, лежаки, игрушки, мисочки для еды и воды, когтеточки каждому питомцу.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed"  type="button"  data-bs-toggle="collapse" data-bs-target="#money"  >
                      Финансирование
                    </button>
                  </h2>
                  <div id="money" className="accordion-collapse collapse" data-bs-parent="#helpAccordion">
                    <div className="accordion-body">
                      Чтобы содержать поммещение, работников и расходы на питание, лечение и аксессуары для питомцев нам всегда нужны финансы, будет очень благодарны, если у вас есть возможность нас поддержать.
                    </div>
                  </div>
                </div>



              </div>
            </div>
          </div>
          </div>
        </div> 
    </>
  );
};

export default HelpTypesSection;

