import React from 'react';

const PizzaSizeSelector = ({ size, setSize }) => (
  <div className='dashed'>
    <div className='d-flex flex-wrap justify-content-between pt-2'>
    <h5><b>Size:</b></h5>
    <label>
      <input type="radio" value="small" checked={size === 'small'} onChange={() => setSize('small')} />
      &nbsp;
      Small
    </label>
    <label>
      <input type="radio" value="medium" checked={size === 'medium'} onChange={() => setSize('medium')} />
      &nbsp;
      Medium
    </label>
    <label>
      <input type="radio" value="large" checked={size === 'large'} onChange={() => setSize('large')} />
      &nbsp;
      Large
    </label>
    </div>
  </div>
);

export default PizzaSizeSelector;
