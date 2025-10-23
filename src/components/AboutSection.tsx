import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-5 bg-light px-md-4">
      <div className="container">
        <div className="row">
          <h2 className="display-6 fw-bold text-primary text-center mb-5">Почему стоит брать животных из приюта?</h2>

          <div className="col-lg-8 mb-4">
            
            <p className="lead">
              Каждое животное в приюте заслуживает любви и заботы не меньше, чем хвостик из питомника. 
              Если взять питомца из приюта, вы не только спасаете жизнь тому, кого береде, а также тому,
               которые попадет на его место в приюте.
               Мы очень хотим верить, что сможем найти новый классный всем нашим питомцам с любящими хозяивами. Возможно, это Вы?
            </p>
          </div>
          

          <div className="col-lg-4 mb-4"> 
            <p className="custom-list">
              <li className="mb-2  lead"> Спасение жизни</li>
              <li className="mb-2 lead"> Экономия денег</li>
              <li className="mb-2 lead"> Поддержка благотворительности</li>
              <li className="mb-2 lead"> Безграничное счастье</li>
            </p>
          </div>


        </div>

        

      </div>
    </section>
  );
};

export default AboutSection;