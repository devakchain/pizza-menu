import React from "react";

function Pizza({ pizzaData }) {
  return (
    <li className={pizzaData.soldOut ? "pizza sold-out" : "pizza"}>
      <img src={pizzaData.photoName} alt={pizzaData.name} />
      <div>
        <h3>{pizzaData.name}</h3>
        <p>{pizzaData.ingredients}</p>
        {pizzaData.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{pizzaData.price}</span>
        )}
      </div>
    </li>
  );
}

export default Pizza;
