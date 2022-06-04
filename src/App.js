import logo from './logo.svg';
import './App.css';
import Boton from './components/boton';
import { useState } from 'react';
import Pantalla from './components/pantalla';
import { e, evaluate } from 'mathjs'
import BotonEvaluar from './components/botonEvaluar';

function App() {

  const [input, setInput] = useState("")

  const addInput = (valor) => {
    // if (input.length>20) {
    //   alert("Por favor, introduce un número más pequeño");
    //   return;
    // }
    setInput(input + valor);
  };

  const borrarInput = () => {setInput("")};

  const borrarUnElemento = () => {
    setInput(input.slice(0, input.length-1))
  };

  const evaluarInput = (input) => {
    try {
      if (input) {
        setInput(evaluate(input));
      
      } else {
        alert("Por favor, introduce una operación")
      }
    
    } catch (exception) {
      alert("Operación no válida, por favor, introduzca una operación matermática correcta")
    }
  }

  return (
    <div className='App'>
      <div className='calculadora'>
      <div className='calculadora_fila'>
        <Pantalla className='pantalla' input={input}/>
      </div>
        <div className='calculadora_fila'>
          <Boton clase='texto' funcionClick={addInput}>7</Boton>
          <Boton clase='texto' funcionClick={addInput}>8</Boton>
          <Boton clase='texto' funcionClick={addInput}>9</Boton>
          <Boton clase='operador' funcionClick={addInput}>+</Boton>
        </div>
        <div className='calculadora_fila'>
          <Boton clase='texto' funcionClick={addInput}>4</Boton>
          <Boton clase='texto' funcionClick={addInput}>5</Boton>
          <Boton clase='texto' funcionClick={addInput}>6</Boton>
          <Boton clase='operador' funcionClick={addInput}>-</Boton>
        </div>
        <div className='calculadora_fila'>
          <Boton clase='texto' funcionClick={addInput}>1</Boton>
          <Boton clase='texto' funcionClick={addInput}>2</Boton>
          <Boton clase='texto' funcionClick={addInput}>3</Boton>
          <Boton clase='operador' funcionClick={addInput}>*</Boton>
        </div>
        <div className='calculadora_fila'>
          <Boton clase='texto' funcionClick={addInput}>0</Boton>
          <Boton clase='texto' funcionClick={addInput}>.</Boton>
          <BotonEvaluar clase='texto' funcionClick={evaluarInput} input={input}>=</BotonEvaluar>
          <Boton clase='operador' funcionClick={addInput}>/</Boton>
        </div>
        <div className='calculadora_fila'>
        <Boton clase='operador' funcionClick={borrarInput}>Borrar todo</Boton>
        <Boton clase='operador' funcionClick={borrarUnElemento}> 	&lt;- </Boton>
      <footer>
        <p>Hecho por <a className='link' href='https://github.com/rafaxweb'>@rafaxweb</a></p> 
      </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
