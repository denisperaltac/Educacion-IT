import React, { useState, useEffect } from "react";

const HookTabla = () => {
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const datitos = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await datitos.json();
    setDataTable(users);
    console.log(users);
  };

  return (
    <>
      <div>
        <ul></ul>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Compania</th>
            <th>Ciudad</th>
          </tr>
        </thead>
        <tbody>
          {dataTable.map((item) => (
            <tr id={item.id}>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.company.name}</td>
              <td>{item.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default HookTabla;
