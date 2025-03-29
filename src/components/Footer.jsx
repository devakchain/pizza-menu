import React from "react";

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>Were open until {closeHour}:00 come visit us or order online.</p>
          <button className="btn">order</button>
        </div>
      ) : (
        <p>
          w'ere happy to welcome you here between {openHour}:00 and {closeHour}
          :00
        </p>
      )}
    </footer>
  );
}

export default Footer;
