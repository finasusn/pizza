import React from 'react';
import { PiCursorClickFill } from "react-icons/pi";

const PriceBreakdown = ({ size, toppings, crust }) => {
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

  const calculateToppingsTotal = () => {
    return toppings.length * toppingPrice;
  };

  const calculateCrustTotal = () => {
    return crustPrices[crust];
  };

  const calculateTotalPrice = () => {
    const basePrice = basePrices[size];
    const toppingsTotal = calculateToppingsTotal();
    const crustTotal = calculateCrustTotal();
    return basePrice + toppingsTotal + crustTotal;
  };

  return (
    <div className='p-0 m-2'>
      <div id="accordion">
        <div className="card transparent-background">
          <div className="card-header p-0 mb-0">
            <a className="collapsed text-light card-link items-center stretched-link mb-0 pb-0" data-toggle="collapse" href="#collapseTwo">
              <u><p>Price Breakdown&nbsp;<PiCursorClickFill /></p></u>
            </a>
          </div>
          <div id="collapseTwo" className="collapse p-0 m-0" data-parent="#accordion">
            <div className="card-body">
              <p>
                Size: {size.charAt(0).toUpperCase() + size.slice(1)} - ${basePrices[size]}
              </p>
              <p>
                Toppings ({toppings.length}): {toppings.join(', ')} - ${calculateToppingsTotal()}
              </p>
              <p>
                Crust: {crust.charAt(0).toUpperCase() + crust.slice(1)} - ${calculateCrustTotal()}
              </p>
              <p>
                Total Price: ${calculateTotalPrice()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceBreakdown;
