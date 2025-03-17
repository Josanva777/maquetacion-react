import React from "react";
import CuadroRosa from "./CuadroRosa";
import CuadroNaranja from "./CuadroNaranja";

export function Fondo() {
  return (
    <div className="contenedor-principal">
                                                    {/* contenedor izquierdo */}
      <div className="fondo fondo-izquierdo">
        <div className="fila fila1">
          <CuadroRosa />
          <CuadroNaranja />
        </div>

        <div className="fila fila2">
          <CuadroNaranja />
          <CuadroRosa />
        </div>

        <div className="fila fila3">
          <CuadroRosa />
          <CuadroNaranja />
        </div>
      </div>

                                                  {/* Contenedor Derecho*/}
      <div className="fondo fondo-derecho">
        <div className="fila fila1-espejo">
          <CuadroNaranja />
          <CuadroRosa />
        </div>

        <div className="fila fila2-espejo">
          <CuadroRosa />
          <CuadroNaranja />
        </div>

        <div className="fila fila3-espejo">
          <CuadroNaranja />
          <CuadroRosa />
        </div>
      </div>
    </div>
  );
}

export default Fondo;