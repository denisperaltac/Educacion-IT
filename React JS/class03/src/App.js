import Hijo1 from "./Hijo1";
import Hijo2 from "./Hijo2";
import { useState } from "react";
import CicloVida from "./CicloVida";
import CicloVidaHook from "./CicloVidaHook";
import Formularios from "./Formularios";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [logueado, setLogueado] = useState(false);
  const [msj, setMsj] = useState(null);
  const handleClick = (msj) => {
    setMsj(msj);
  };

  return (
    <>
      <h1>Comunicacion entre Hermanos</h1>
      <Hijo1 handleClick={handleClick} />
      <Hijo2 mensaje={msj} />
      <hr />
      <h1>Renderizado Condicional</h1>
      {/* Operador Ternario (Si logueado true, 1° Sentencia. Si logueado false, 2° Sentencia) */}
      {logueado ? <h2>Usuario Logueado</h2> : <h2>Usuario NO Logueado</h2>}
      {/* Operador condicional (Si logueado true, sentencia) */}
      {logueado && <h2>Usuario Logueado</h2>}
      <hr />
      <h1>Ciclo de Vida del Componente</h1>
      <CicloVida />
      <hr />
      <CicloVidaHook />
      <hr />
      <Formularios />
    </>
  );
}
export default App;
