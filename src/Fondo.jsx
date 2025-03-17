import CuadroRosa from "./CuadroRosa";
import CuadroNaranja from "./CuadroNaranja";

export function Fondo() {
  return (
    <div className="fondo">
      <CuadroRosa />  
      <CuadroNaranja />
      <CuadroNaranja />
      <CuadroRosa /> 
      <CuadroRosa />   
      <CuadroNaranja /> 
    </div>
  );
}

export default Fondo;