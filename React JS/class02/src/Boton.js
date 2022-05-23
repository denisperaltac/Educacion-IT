import React from "react";

const Boton = (props) => {
  return (
    <div>
      <button onClick={props.sumar}>{props.usersBtn}</button>
    </div>
  );
};

export default Boton;
