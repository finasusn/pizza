import React from 'react';

const PizzaCrustSelector = ({ crust, setCrust }) => (
  <div className='dashed'>
    <div className='d-flex flex-wrap pt-2'>
    <h5><b>Crust Type:</b></h5>&nbsp;
    <select value={crust} onChange={(e) => setCrust(e.target.value)} className="transparent-background text-light p-1 rounded" >
      <option value="thin" className='transparent-background text-dark'>Thin Crust</option>
      <option value="thick" className='transparent-background text-dark'>Thick Crust</option>
      <option value="gluten-free" className='transparent-background text-dark'>Gluten-Free Crust</option>
    </select>
    </div>
  </div>
);

export default PizzaCrustSelector;
