import React, { useEffect, useState } from "react";
import "./app.css";
import { getBTCData } from "./services/getBTCData";
import { Form, History } from "./components";
import { connect } from "react-redux";
import { getHistoryData } from "./redux/actions/BTCActions";

function App(props) {
  const [btcData, setBtcData] = useState(null);

  const [wallet, setWallet] = useState(3);

  useEffect(() => {
    getBTCData().then((data) => {
      setBtcData(data);
    });
  }, []);

  const maxFees = 0.0002;
  const minFees = 0.0001;

  const getRandomFees = () => {
    let fees = Math.random() * (maxFees - minFees) + minFees;
    return fees.toFixed(9);
  };

  const getArgValue = () => {
    let arg = btcData && wallet * btcData.rates.ARS_BUY;
    return arg;
  };

  return (
    <div className="container">
      <div className="form">
        <div className="wallet">{`BTC Disponible: ${wallet}`}</div>
        <div className="walletArg">{`Pesos Disponible: ${getArgValue()}`}</div>
        <Form
          fees={getRandomFees}
          historyData={props.historyData}
          wallet={wallet}
          setWallet={setWallet}
        />
      </div>
      <div className="list">
        <h2>Historial de envios</h2>
        <History historyData={props.historyProps.historyData} />
      </div>
    </div>
  );
}
// estado de redux
const mapStateToProps = (state) => {
  return {
    historyProps: state,
  };
};
// acciones de redux
const mapDispatchToProps = (dispatch) => {
  return {
    historyData: (data) => {
      dispatch(getHistoryData(data));
    },
  };
};
// conecta las acciones y los estados de redux a react y los pasa como props
const AppExport = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppExport;
