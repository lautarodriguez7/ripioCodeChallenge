import React from "react";
import "./card.css";

export const Card = ({ item }) => {
  return (
    <div className={item.state === "No Exitoso" ? "card-fail" : "card-success"}>
      <h3 className="card-title">Fecha</h3>
      <p className="card-title">{item.date}</p>
      <h3 className="card-title">Monto enviado</h3>
      <p className="card-title">BTC {item.amount}</p>
      <h3 className="card-title">Direccion de destino</h3>
      <p className="card-title">{item.address}</p>
      <h3 className="card-title">Estado de operacion</h3>
      <p className="card-title">{item.state}</p>
      <h3 className="card-title">ID de operacion</h3>
      <p className="card-title">{item.id}</p>
    </div>
  );
};
