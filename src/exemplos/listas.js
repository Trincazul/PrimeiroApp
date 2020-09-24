import React from 'react';
import logo from './logo.svg';
import './App.css';

const listcustomer = [
  {
    id: 1,
    name: 'Endriw Guilherme Villa'
  },
  {
    id: 2,
    name: 'Jose fulano de tal'
  },
  {
    id: 3,
    name: 'Só jesus na causa'
  }
]

function App() {

  const renderCustomers = (customer, index) => {
    return (
      <li key={index}>
        {customer.name}
      </li>
    )
  }

  return (
    <div className="App">
     <p>Primeiro teste de react nessa esquema</p>
     <p>Outro texto de esquema estilo hello world</p>
      <div>
        {listcustomer.map(renderCustomers)}
      </div>
    </div>
  );
}

export default App;
