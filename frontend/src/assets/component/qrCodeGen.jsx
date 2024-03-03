// src/PaymentCard.js
import React from "react";
import QRCodeGenerator from "qrcode.react";
import { Button } from "@mui/material";
const PaymentCard = ({ value }) => {
  const params = new URLSearchParams(value.search);
  const state = params.get("state");
  if (state) {
  }
  const merchantIdentifier = params.get("merchant");
  const paymentDetails = params.get("amount");
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
        <p>
          <strong>Merchant Identifier:</strong> {merchantIdentifier}
        </p>
        <p>
          <strong>Payment Details:</strong> {paymentDetails}
        </p>
      </div>
    </div>
  );
};

export default PaymentCard;
