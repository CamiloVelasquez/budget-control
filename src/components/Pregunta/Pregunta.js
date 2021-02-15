import React, { useState } from "react";
import PropTypes from "prop-types";

import Error from "../Error/Error";

const Pregunta = ({
  guardarPresupeusto,
  guardarRestante,
  guardarMostrarPregunta,
}) => {
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  const definirPresupuesto = (e) => {
    guardarCantidad(parseInt(e.target.value, 10));
  };

  const agregarPresupuesto = (e) => {
    e.preventDefault();

    if (cantidad < 1 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }

    guardarError(false);

    guardarPresupeusto(cantidad);
    guardarRestante(cantidad);
    guardarMostrarPregunta(false);
  };

  return (
    <>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </>
  );
};

Pregunta.protoTypes = {
  guardarPresupeusto: PropTypes.func.isRequired,
  guardarRestante: PropTypes.func.isRequired,
  guardarMostrarPregunta: PropTypes.func.isRequired,
};

export default Pregunta;
