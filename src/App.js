import React from 'react';
import './App.css';
import PizzaOrderCalculator from './components/PizzaOrderCalculator';
import { FaPizzaSlice } from "react-icons/fa6";

function App() {
  return (
    <div className='body'>
    <div className="all">
    <div className='bgimg'></div>
      <div className='heading'>
        <h1 className='py-2'><b>Pizza Price Calculator&nbsp;<FaPizzaSlice /></b></h1>
      </div>
      <div className='main'>
        <PizzaOrderCalculator />
      </div>
      </div>
    </div>
  );
}

export default App;
