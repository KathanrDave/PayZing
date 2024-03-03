import React, { useState, useEffect } from "react";
import QRCodeGenerator from "qrcode.react";
import { Button } from "@mui/material";

const PaymentCard = ({ value }) => {
 const [merchant, setMerchant] = useState('');
 const [pay, setPay] = useState('');
 const [state, setState] = useState('');

 useEffect(() => {
    // const url = new URL(value);
    console.log(value);
    const params = new URLSearchParams(value);
    const verify = params.get("state");
    const merchantIdentifier = params.get("merchant");
    const paymentDetails = params.get("amount"); // Ensure this matches the URL parameter name
    console.log('Merchant:', merchantIdentifier);
    console.log('Payment Details:', paymentDetails);
    console.log('State:', verify);
    setMerchant(merchantIdentifier);
    if (verify === 'true') {
      setPay(paymentDetails);
      setState(true);
    } else {
      setState(false);
    }
 }, [value]);

 return (
    <div
      style={{
        background: "#fff",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        transition: "0.3s",
        width: "400px",
        borderRadius: "15px",
        padding: "20px",
        margin: "auto",
        marginTop: "20px",
        marginBottom: "20px",
        color: "#000",
        overflow: "hidden",
      }}
    >
      <h3 style={{ color: "#000", textAlign: "center", marginBottom: "20px" }}>
        Payment Information
      </h3>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <QRCodeGenerator
          value={value}
          size={150}
          style={{ margin: "auto", display: "block" }}
        />
      </div>
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <p><strong>Merchant Identifier:</strong> {merchant}</p>
        {state && (
          <>
            <p><strong>Payment Details:</strong> {pay}</p>
            {/* Assuming "amount" is a separate field, add it if needed */}
          </>
        )}
      </div>
    </div>
 );
};

export default PaymentCard;