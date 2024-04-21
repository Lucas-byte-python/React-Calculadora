import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [operacao, setOperacao] = useState('');

  const calcular = () => {
    if (operacao == 'Somar') 
      return parseFloat(numero1) + parseFloat(numero2);
    else if (operacao == 'Subtrair')
      return parseFloat(numero1) - parseFloat(numero2);
    else if (operacao == 'Multiplicar')
      return parseFloat(numero1) * parseFloat(numero2);
    else 
      return parseFloat(numero1) / parseFloat(numero2);
  }

  useEffect(() => {
    setResultado(calcular());
  }, [numero1, numero2, operacao]);

  return (
    <div className="App">
      <div className='cube'>
        <h1>Calculadora React</h1>

        <label>Primeiro Número:</label>
        <input type="number" value={numero1} onChange={(e) => setNumero1(e.target.value)} />
        <label>Segundo Número:</label>
        <input type="number" value={numero2} onChange={(e) => setNumero2(e.target.value)} />

        <select onChange={(e) => setOperacao(e.target.value)}>
          <option>Somar</option>
          <option>Subtrair</option>
          <option>Multiplicar</option>
          <option>Dividir</option>
        </select>

        <label>Resultado: {resultado}</label>
      </div>
    </div>
  );
}

export default App;
