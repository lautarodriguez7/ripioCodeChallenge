import React from "react";
import "./form.css";

export const Form = ({ fees, handleInputChange }) => {
  const sendBTC = (event) => {
    event.preventDefault();
  };

  return (
    <form className="form" onSubmit={sendBTC}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Direccion BTC</label>
        <input
          type="text"
          name="address"
          onChange={handleInputChange}
          placeholder="Inserte direccion BTC"
        />
        <label htmlFor="exampleInputPassword1">Monto a enviar</label>
        <input
          type="text"
          name="amount"
          onChange={handleInputChange}
          placeholder="Ingrese monto"
        />
        <label htmlFor="exampleInputPassword1">comision de la red</label>
        <input
          type="text"
          name="fees"
          onChange={handleInputChange}
          value={fees()}
          readOnly
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
    </form>
  );
};
