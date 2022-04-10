import React from "react";
import "./card.css";

export const Card = ({ item }) => {
  return (
    <div className={item.state === "No Exitoso" ? "card-fail" : "card-success"}>
      {/* <h3 className="card-title">Fecha</h3>
      <p className="card-desc">{item.date}</p>
      <h3 className="card-title">Monto enviado</h3>
      <p className="card-desc">BTC {item.amount}</p>
      <h3 className="card-title">Direccion de destino</h3>
      <p className="card-desc">{item.address}</p>
      <h3 className="card-title">Estado de operacion</h3>
      <p className="card-desc">{item.state}</p>
      <h3 className="card-title">ID de operacion</h3>
      <p className="card-desc">{item.id}</p> */}

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
