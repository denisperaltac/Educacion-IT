import React, { useState } from "react";

const Formularios = () => {
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h2>Formularios</h2>
      <form>
        <label htmlFor="nombre">Nombre</label>
        <br />
        <input
          type="text"
          name="nombre"
          value={form.value}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="apellido">Apellido</label>
        <br />
        <input
          type="text"
          name="apellido"
          value={form.value}
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default Formularios;
