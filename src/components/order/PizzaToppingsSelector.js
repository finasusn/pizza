import React from 'react';

const toppingsList = ['Pepperoni', 'Mushrooms', 'Onions'];

const PizzaToppingsSelector = ({ toppings, setToppings }) => {
  const handleToppingChange = (topping) => {
    setToppings((prevToppings) =>
      prevToppings.includes(topping)
        ? prevToppings.filter((t) => t !== topping)
        : [...prevToppings, topping]
    );
  };

  return (
    <div className='dashed'>
      <div className='d-flex flex-wrap justify-content-between pt-2'>
      <h5><b>Toppings:</b></h5>
        {toppingsList.map((topping) => (
          <label key={topping} >
            <input type="checkbox" value={topping} checked={toppings.includes(topping)} onChange={() => handleToppingChange(topping)}/>
            &nbsp;
            {topping}
          </label>
        ))}
      </div>
    </div>
  );
};

export default PizzaToppingsSelector;
