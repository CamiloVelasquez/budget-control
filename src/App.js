import React, { useState, useEffect } from "react";

import Pregunta from "./components/Pregunta/Pregunta";
import Formulario from "./components/Formulario/Formulario";
import Listado from "./components/Listado/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto/ControlPresupuesto";

function App() {
  const [presupuesto, guardarPresupeusto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarPregunta, guardarMostrarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [crearGasto, guardarCrearGasto] = useState(false);

  //useEffect que actualiza el restante

  useEffect(() => {
    if (crearGasto) {
      //agrega el nuevo presupuesto

      guardarGastos([...gastos, gasto]);

      //resta del presupuesto
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);
    }
    guardarCrearGasto(false);
  }, [crearGasto, gasto, gastos, restante]);

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
      </header>
      <div className="contenido-principal contenido">
        {mostrarPregunta ? (
          <Pregunta
            guardarPresupeusto={guardarPresupeusto}
            guardarRestante={guardarRestante}
            guardarMostrarPregunta={guardarMostrarPregunta}
          />
        ) : (
          <div className="row">
            <div className="one-half column">
              <Formulario
                guardarGasto={guardarGasto}
                guardarCrearGasto={guardarCrearGasto}
              />
            </div>
            <div className="one-half column">
              <Listado gastos={gastos} />
              <ControlPresupuesto
                presupuesto={presupuesto}
                restante={restante}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
