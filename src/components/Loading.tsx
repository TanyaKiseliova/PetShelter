import React from "react";

const AnimalLoader: React.FC = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center py-5">
      <img
        src="/beagle.gif"
        alt="Загрузка питомцев"
        style={{
          width: "400px",
          height: "auto",
          borderRadius: "8px",
        }}
      />
      <p
        className="mt-3 mb-0"
        style={{
          fontSize: "1.1rem",
          color: "var(--text-color)",
          fontWeight: 500,
        }}
      >
        Загрузка питомцев...
      </p>
    </div>
  );
};

export default AnimalLoader;
