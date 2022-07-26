
import { useState } from 'react';

function MiFuncionComponente() {
  const [contador, setStateContador] = useState(0); //se usa const porque son variables que no se cambian
  // let numero = 10;

  const handleClick = function () {
    console.log("Le di click a incrementar mi fucnion componente");
    //contador++;
    //console.log(numero);
    setStateContador(contador + 1);
  }

  return (
    <div>
      <h1>Hola Mundo desde mi función componente</h1>
      <div>
        Esto es un botón incremental
      </div>
      <div>
        <span id="numero">{contador}</span>
        <button onClick={handleClick}>Incrementar</button>
      </div>
    </div>
  )
}

export default MiFuncionComponente;