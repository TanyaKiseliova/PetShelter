import React from 'react';
import logo from '../assets/images/logo/dogLogo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light text-dark py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <img src={logo} alt="PetShelter" height="40" className="mb-3" />
            <p>Приют для бездомных животных. Спасаем, лечим, социализируем, восстанавливаем и главное ищем новый любящий дом.</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Контакты</h5>
            <p>📍 г. Минск, ул. Якубовского, д. 22</p>
            <p>📞 +375 (29) 123-45-67</p>
            <p>✉️ Email: petInGoodHands@gmail.com</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Режим работы</h5>
            <p>🕒 Пн–Вс: 10:00–18:00</p>
            <h5>Благотворительный счёт </h5>
            <p>🏦 BY12 3456 7890 1234 5678 9012</p>
          </div>
        </div>
        <hr className="my-3 bg-secondary" />
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} PetShelter. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;