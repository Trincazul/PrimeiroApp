import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

function App() {

  const name = "Digital Innovation One"

  const showEvent = () => {
  console.log("evento clicando")
  alert(name)
}
const Button = <button onClick={showEvent}>Mostrar Evento</button>


  return (
    <div className="App">
     <p>Primeiro teste de react nessa esquema</p>
     <p>Oooooro texto de esquema estilo hello world</p>
     {Button}
    </div>
  );
}

export default App;
