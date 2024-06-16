import React from 'react';

const PriceDisplay = ({ price }) => (
  <div className='border rounded-lg pt-3 p-2 m-2'>
    <h4><b>Total Price: <u>${price}</u></b></h4>  
  </div>
);

export default PriceDisplay;
