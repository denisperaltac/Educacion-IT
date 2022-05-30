import React from "react";

const Hijo1 = ({ handleClick }) => {
  return (
    <>
      <h1>Hijo 1</h1>
      <button onClick={() => handleClick("Cambio el mensaje en Hijo 2")}>
        Cambiar Mensaje
      </button>
    </>
  );
};

export default Hijo1;
