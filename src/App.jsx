import React from "react";
import QRCodeGenerator from "./components/QRCodeGenerator";

const App = () => {
  return (
    <div>
      <div className="em">
        <q>This app help you generate QR Code and change its color before download</q>
      </div>
      <QRCodeGenerator />
    </div>
  );
};

export default App;
