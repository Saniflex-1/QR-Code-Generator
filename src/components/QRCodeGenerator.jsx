import React, { useState, useRef } from "react";
import QRCode from "react-qr-code";
import html2canvas from "html2canvas";

const QRCodeGenerator = () => {
  const [text, setText] = useState("Hello, QR Code!");
  const [fgColor, setFgColor] = useState("#000000"); // Default black
  const [bgColor, setBgColor] = useState("#ffffff"); // Default white
  const qrCodeRef = useRef();

  // Function to trigger the download with html2canvas
  const downloadQRCode = () => {
    html2canvas(qrCodeRef.current).then((canvas) => {
      const imageUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = "qr-code.png";
      link.click();
    });
  };

  return (
    <div className="codeGen">
             <div className="qr-container">
      <h2 className="qr-title">QR Code Generator</h2>
      
      {/* Text Input to modify QR code content */}
      <input
        className="qr-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to encode"
      />
      
      {/* Color pickers for QR code foreground and background */}
      <div className="color-picker-container">
        <label>Foreground Color: </label>
        <input
          type="color"
          value={fgColor}
          onChange={(e) => setFgColor(e.target.value)}
        />
        <label>Background Color: </label>
        <input
          type="color"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
        />
      </div>

      {/* Displaying the QR Code with updated colors */}
      <div className="qr-code" ref={qrCodeRef}>
        <QRCode value={text} fgColor={fgColor} bgColor={bgColor} />
      </div>

      {/* Download Button */}
      <button className="download-btn" onClick={downloadQRCode}>
        Download QR Code
      </button>
    </div>

    <div className="powered">
        <p>Powered by <a href="https://saniflex.vercel.app/" target="_Blank">LetCodeLead</a></p>
    </div>
    </div>
  );
};

export default QRCodeGenerator;
