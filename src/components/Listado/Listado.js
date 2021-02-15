import React from "react";
import Gasto from "../Gasto/Gasto";
import PropTypes from "prop-types";

const Listado = ({ gastos }) => (
  <div className="gastos-realizados">
    <h2>Listado</h2>
    {gastos.map((gasto) => (
      <Gasto gasto={gasto} key={gasto.id} />
    ))}
  </div>
);

Listado.protoTypes = {
  gastos: PropTypes.array.isRequired,
};

export default Listado;
