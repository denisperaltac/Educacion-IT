import React, { useState, useEffect } from "react";

const CicloVidaHook = () => {
  const [scrollY, setScrollY] = useState(0);

  //use Effect => Permite manipular los estados del Ciclo de Vida
  useEffect(() => {
    const detectarScroll = () => {
      setScrollY(window.pageYOffset);
    };
    //Fase de montaje
    window.addEventListener("scroll", detectarScroll);

    return () => {
      //Fase de desmonataje
      window.removeEventListener("scroll", detectarScroll);
    };
  }, []); // Dependencia:
  // Determina que valor genera el n uevo renderizado (si el valor no existe podemos quedar en loop infinito. para evitar el loop lo dejamos al array vacio)

  /*
  Dependencias de useEffect 
    => Determina el valor que genera el nuevo renderizado
    => Determina cuando NO renderizar nuevamente
    => Permiten saber si estamos actualizando correctamente el componente
  */

  return (
    <>
      <h2>Ciclo Vida Hook</h2>
      <h2>Scroll: {scrollY}</h2>
      {/* <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> */}
    </>
  );
};

export default CicloVidaHook;
