import React, { useState } from "react";
import "./form.css";
import LogoRipio from "../../assets/logo_ripio.svg";

export const Form = ({ fees, historyData, wallet, setWallet }) => {
  const formatDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();

    return (today = dd + "/" + mm + "/" + yyyy);
  };

  const [inputAddress, setInputAddress] = useState("");
  const [inputAmount, setInputAmount] = useState("");

  const sendBTC = (event) => {
    if (inputAddress === "" || inputAmount === "") {
      alert("Por favor complete todos los campos");
      event.preventDefault();
    } else {
      let data;
      event.preventDefault();
      Object.values(event.target).map((item) => {
        if (item.name) {
          data = {
            ...data,
            [item.name]: item.value,
            date: formatDate(),
            id: Math.floor(Math.random() * 100000000000),
          };
        }
      });
      let amount = parseFloat(data.amount);
      let feesMount = parseFloat(data.fees);
      if (amount + feesMount > wallet) {
        data = {
          ...data,
          state: "No Exitoso",
        };
        historyData(data);
        alert("No hay suficiente BTC");
      } else {
        setWallet(wallet - (amount + feesMount));
        data = {
          ...data,
          state: "Envio Exitoso",
        };
        historyData(data);
        alert("Envio exitoso");
      }
      setInputAddress("");
      setInputAmount("");
    }
  };

  return (
    <form className="form" onSubmit={sendBTC}>
      <img className="logoRipio" src={LogoRipio} alt="" />
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Direccion BTC</label>
        <input
          autoFocus
          type="text"
          name="address"
          placeholder="Inserte direccion BTC"
          onChange={(e) => setInputAddress(e.target.value)}
          value={inputAddress}
        />
        <label htmlFor="exampleInputPassword1">Monto a enviar</label>
        <input
          onChange={(e) => setInputAmount(e.target.value)}
          value={inputAmount}
          type="number"
          step="0.00001"
          name="amount"
          placeholder="Ingrese monto"
        />
        <label htmlFor="exampleInputPassword1">Comisión de la red</label>
        <input type="text" name="fees" value={fees()} readOnly />
      </div>
      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
    </form>
  );
};
