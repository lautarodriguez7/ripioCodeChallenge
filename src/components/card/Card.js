import React from "react";
import "./card.css";

export const Card = ({ item }) => {
  return (
    <div className={item.state === "No Exitoso" ? "card-fail" : "card-success"}>
      <p className="card-title">
        <i>
          Fecha operacion: <b>{item.date}</b>
        </i>
      </p>
      <p className="card-title">
        <i>
          Direccion BTC: <b>{item.address}</b>
        </i>
      </p>
      <p className="card-title">
        <i>
          Monto enviado: <b>{item.amount}</b>
        </i>
      </p>
      <p className="card-title">
        <i>
          Estado de operacion: <b>{item.state}</b>
        </i>
      </p>
      <p className="card-title">
        <i>
          ID de operacion: <b>{item.id}</b>
        </i>
      </p>
    </div>
  );
};
