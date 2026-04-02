import React from "react";
import logo from "../assets/images/logo/dogLogo.png";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-light text-dark py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="PetShelter" height="40" className="mb-3" />
            </Link>

            <p>
              Приют для бездомных животных. Спасаем, лечим, социализируем,
              восстанавливаем и главное ищем новый любящий дом.
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Контакты</h5>
            <p><i className="fas fa-map-pin"></i>  г. Минск, ул. Якубовского, д. 22</p>
            <p><i className="fa-solid fa-phone"></i> +375 (29) 123-45-67</p>
            <p><i className="fa-solid fa-envelope"></i> Email: petInGoodHands@gmail.com</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Режим работы</h5>
            <p><i className="fa-regular fa-clock"></i> Пн–Вс: 10:00–20:00</p>
            <h5>Благотворительный счёт </h5>
            <p><i className="fa-solid fa-building-columns"></i> BY12 3456 7890 1234 5678 9012</p>
          </div>
        </div>

        <hr className="my-3 bg-secondary" />
        <div className="text-center">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Pet shelter PetInGoodHands. Все
            права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
