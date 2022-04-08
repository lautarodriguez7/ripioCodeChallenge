import React, { useEffect } from "react";
import "./app.css";
import { getBTCData } from "./services/getBTCData";
import Form from "./components";

function App(props) {
  const [btcData, setBtcData] = React.useState(null);
  const [sendData, setSendData] = React.useState(null);
  useEffect(() => {
    setBtcData(getBTCData());
  }, []);

  const handleInputChange = (event) => {
    setSendData({
      ...sendData,
      [event.target.name]: event.target.value,
    });
  };

  console.log(sendData);
  const maxFees = 0.0002;
  const minFees = 0.0001;

  const getRandomFees = () => {
    let fees = Math.random() * (maxFees - minFees) + minFees;
    return fees.toFixed(7);
  };

  return (
    <div className="container">
      <div className="form">
        <Form
          fees={getRandomFees}
          sendData={sendData}
          handleInputChange={handleInputChange}
        />
      </div>
      <div className="list">hello</div>
    </div>
  );
}

export default App;
