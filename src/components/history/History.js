import React from "react";
import "./history.css";
import { Card } from "../card/Card";

export const History = ({ historyData }) => {
  console.log(historyData);
  return (
    <form className="history">
      <h1>HISTORIAL DE ENVIOS</h1>

      <div>
        {historyData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </form>
  );
};
