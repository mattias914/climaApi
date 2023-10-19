import React, { useState } from "react";
import Buscador from "../Buscador";
import nubes from "/src/assets/cloud.png";
import humedad from "/src/assets/humidity.png";
import viento from "/src/assets/wind.png";
import './MiApi.css'

const MiApi = () => {
  const [clima, setClima] = useState(null);

  let key = "b33b34faa4e020e497a9af3f06481580";

  const buscarDatos = async (ciudad) => {
    if (ciudad === "") {
      return;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${key}`;
    try {
      let resp = await fetch(url);
      let data = await resp.json();
      setClima(data);
    } catch (error) {
      console.error("Error al obtener datos de la API:", error);
    }
  };

  return (
    <>
      <Buscador onBuscar={buscarDatos} />
      {clima && (
        <div>
          <div className="imagen-clima">
            <img src={nubes} alt="" />
          </div>
          <div className="temp">{Math.floor(clima.main.temp)}°C</div>
          <div className="ciudad">{clima.name}</div>
          <div className="contenedor-datos">
            <div className="elemento">
              <img src={humedad} alt="" className="icono" />
              <div className="datos">
                <div className="humedad">{Math.floor(clima.main.humidity)}%</div>
                <div className="texto">Humedad</div>
              </div>
            </div>
            <div className="elemento">
              <img src={viento} alt="" className="icono" />
              <div className="datos">
                <div className="viento">{Math.floor(clima.wind.speed)} km/h</div>
                <div className="texto">Viento</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MiApi;
