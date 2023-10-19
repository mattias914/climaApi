import React, { useState } from "react";
import buscar from "/src/assets/search.png";
import "./Buscador.css";

const Buscador = ({ onBuscar }) => {
  const [ciudad, setCiudad] = useState("");

  const buscarDatos = () => {
    if (ciudad === "") {
      return;
    }
    onBuscar(ciudad);
  };

  return (
    <div className="barra">
      <input
        type="text"
        className="inputCiudad"
        onBlur={buscarDatos}
        placeholder="Busca clima por ciudad"
        value={ciudad}
        onChange={(e) => setCiudad(e.target.value)}
      />
      <div className="busqueda">
        <img src={buscar} alt="" />
      </div>
    </div>
  );
};

export default Buscador;
