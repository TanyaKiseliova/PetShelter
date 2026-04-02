import React, { useEffect, useState } from "react";
import { Pet } from "../types";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../lib/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import AnimalLoader from "../components/Loading";

const PetsPage: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const { user } = useAuth();
  const navigate = useNavigate();
  const [filteredPets, setFilteredPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    species: "all",
    gender: "all",
    status: "all",
    minAge: "",
    maxAge: "",
  });

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const q = query(collection(db, "pets"));
        const querySnapshot = await getDocs(q);
        const petsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Pet[];
        setPets(petsList);
        setFilteredPets(petsList);
      } catch (err) {
        alert("Не удалось загрузить питомцев");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPets();
  }, []);

  useEffect(() => {
    let result = [...pets];

    if (filters.species !== "all") {
      result = result.filter((pet) => pet.species === filters.species);
    }

    if (filters.gender !== "all") {
      result = result.filter((pet) => pet.gender === filters.gender);
    }

    if (filters.minAge) {
      result = result.filter((pet) => pet.age >= Number(filters.minAge));
    }
    if (filters.maxAge) {
      result = result.filter((pet) => pet.age <= Number(filters.maxAge));
    }

    if (filters.status !== "all") {
      result = result.filter((pet) => pet.status === filters.status);
    }

    setFilteredPets(result);
  }, [filters, pets]);

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  if (loading) {
    return <AnimalLoader />;
  }

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center  mb-4 display-8 fw-bold text-primary">
        <h2 className="text-primary  mb-2 fs-1 fw-bold m-3">Наши питомцы</h2>
        {user?.role === "worker" && (
          <Link to="/add-pet" className="btn btn-primary text-light">
            + Добавить питомца
          </Link>
        )}
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h5 className="mb-3">Выберите желаемые параметры питомца</h5>
          <div className="row g-3">
            <div className="col-md-2">
              <label className="form-label">Вид</label>
              <select
                className="form-select"
                name="species"
                value={filters.species}
                onChange={handleFilterChange}
              >
                <option value="all">Любой</option>
                <option value="dog">Собака</option>
                <option value="cat">Кошка</option>
                <option value="other">Другое</option>
              </select>
            </div>

            <div className="col-md-3">
              <label className="form-label">Пол</label>
              <select
                className="form-select"
                name="gender"
                value={filters.gender}
                onChange={handleFilterChange}
              >
                <option value="all">Любой</option>
                <option value="male">Мужской</option>
                <option value="female">Женский</option>
              </select>
            </div>

            <div className="col-md-2">
              <label className="form-label">Возраст от (лет)</label>
              <input
                type="number"
                className="form-control"
                name="minAge"
                value={filters.minAge}
                onChange={handleFilterChange}
                min="0"
                max="30"
              />
            </div>

            <div className="col-md-2">
              <label className="form-label">Возраст до (лет)</label>
              <input
                type="number"
                className="form-control"
                name="maxAge"
                value={filters.maxAge}
                onChange={handleFilterChange}
                min="0"
                max="30"
              />
            </div>

            <div className="col-md-3">
              <label className="form-label">Статус</label>
              <select
                className="form-select"
                name="status"
                value={filters.status}
                onChange={handleFilterChange}
              >
                <option value="all">Любой</option>
                <option value="available">Ищет дом</option>
                <option value="reserved">Зарезервирован</option>
                <option value="adopted">Нашел дом</option>
              </select>
            </div>

            <button
              className="btn btn-outline-secondary"
              onClick={() =>
                setFilters({
                  species: "all",
                  gender: "all",
                  minAge: "",
                  maxAge: "",
                  status: "all",
                })
              }
            >
              Сбросить
            </button>
          </div>
        </div>
      </div>

      {filteredPets.length === 0 ? (
        <p className="text-center">Нет соответствующих питомцев.</p>
      ) : (
        <div className="row">
          {filteredPets.map((pet) => (
            <div key={pet.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100">
                {pet.photo && (
                  <img
                    src={pet.photo}
                    alt={pet.name}
                    className="card-img-top"
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{pet.name}</h5>
                  <p className="text-muted">
                    {pet.breed}, {pet.age} лет
                  </p>
                  <p className="card-text flex-grow-1">
                    {pet.character.substring(0, 80)}...
                  </p>
                  <div>
                    <span
                      className={`badge ${
                        pet.status === "available"
                          ? "bg-success"
                          : pet.status === "reserved"
                            ? "bg-warning"
                            : "bg-secondary"
                      }`}
                    >
                      {pet.status === "available"
                        ? "Доступен"
                        : pet.status === "reserved"
                          ? "Зарезервирован"
                          : "Нашел дом"}
                    </span>

                    <Link
                      to={`/pet/${pet.id}`}
                      className="btn btn-secondary w-100 mt-2"
                    >
                      Подробнее
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PetsPage;
