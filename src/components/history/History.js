import React from "react";
import "./history.css";
import LogoRipio from "../../assets/logo_ripio.svg";
import { Card } from "../card/Card";

export const History = ({ historyData }) => {
  return (
    <form className="history">
      <img className="logoRipio" src={LogoRipio} alt="" />
      <div>
        {historyData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </form>
  );
};
