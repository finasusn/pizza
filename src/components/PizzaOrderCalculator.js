import React, { useState } from 'react';
import PizzaSizeSelector from './order/PizzaSizeSelector';
import PizzaToppingsSelector from './order/PizzaToppingsSelector';
import PizzaCrustSelector from './order/PizzaCrustSelector';
import PriceDisplay from './order/PriceDisplay';
import PriceBreakdown from './order/PriceBreakdown'; // Make sure to import PriceBreakdown

const PizzaOrderCalculator = () => {
  const [size, setSize] = useState('small');
  const [toppings, setToppings] = useState([]);
  const [crust, setCrust] = useState('thin');

  const calculateTotalPrice = () => {
    const basePrices = {
      small: 8,
      medium: 10,
      large: 12,
    };

    const toppingPrice = 1;
    const crustPrices = {
      thin: 0,
      thick: 2,
      'gluten-free': 3,
    };

    const basePrice = basePrices[size];
    const toppingsTotal = toppings.length * toppingPrice;
    const crustTotal = crustPrices[crust];

    return basePrice + toppingsTotal + crustTotal;
  };

  return (
    <div>
      <PizzaSizeSelector size={size} setSize={setSize} />
      <PizzaToppingsSelector toppings={toppings} setToppings={setToppings} />
      <PizzaCrustSelector crust={crust} setCrust={setCrust} />
      <PriceDisplay price={calculateTotalPrice(size, toppings, crust)} />
      <PriceBreakdown size={size} toppings={toppings} crust={crust} />
    </div>
  );
};

export default PizzaOrderCalculator;
