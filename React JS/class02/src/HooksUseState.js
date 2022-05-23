import React, { useState, useEffect } from "react";
import Boton from "./Boton";

const HooksUseState = () => {
  const [palabra, setPalabra] = useState("Hola");
  const [usuario1, setUsuario1] = useState([]);
  const [usuario2, setUsuario2] = useState([]);
  const [usuario3, setUsuario3] = useState([]);

  const sumar1 = () => {
    setPalabra("Hola usuario id 1");
  };

  const sumar2 = () => {
    setPalabra("Hola usuario id 2");
  };

  const sumar3 = () => {
    setPalabra("Hola usuario id 3");
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data1 = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data2 = await fetch("https://jsonplaceholder.typicode.com/users/2");
    const data3 = await fetch("https://jsonplaceholder.typicode.com/users/3");
    const users1 = await data1.json();
    const users2 = await data2.json();
    const users3 = await data3.json();
    setUsuario1(users1);
    setUsuario2(users2);
    setUsuario3(users3);
  };

  return (
    <>
      <h2>Manejo el estado del useState</h2>
      <h2 id="palabra">{palabra}</h2>
      <div id="hola">
        <button onClick={sumar1}>{usuario1.name}</button>
        <button onClick={sumar2}>{usuario2.name}</button>
        <Boton sumar={sumar3} usersBtn={usuario3.name} />
      </div>
    </>
  );
};

export default HooksUseState;
