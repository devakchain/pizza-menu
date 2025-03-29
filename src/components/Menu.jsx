import React from "react";
import Pizza from "./Pizza";
import pizzaData from "../../public/data";

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizzaData) => {
          return (
            <>
              <Pizza key={pizzaData.name} pizzaData={pizzaData} />
            </>
          );
        })}
      </ul>
    </main>
  );
}

export default Menu;
