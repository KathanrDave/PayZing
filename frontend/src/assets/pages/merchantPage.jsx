import React, { useState } from "react";
import QRCodeGenerator from "../component/qrCodeGen";
import { Button } from "@mui/material";

function MerchantPage() {
  // State for storing user input
  const [encodedValue, setEncodedValue] = useState("");
  const merchantAddress = "Merchant Address"; // Replace with actual merchant address
  const amount = "Amount"; // Replace with actual amount

  const handleFixed = () => {
    const data = `https://www.example.com/buy?merchant=${merchantAddress}&amount=${amount}&state=${true}`;
    const encodedValue = new URLSearchParams(data).toString();
    // Update QR code value
    setEncodedValue(encodedValue);
  };

  const handleDefault = () => {
    const data = `merchant=${merchantAddress}&state=${false}`;
    const encodedValue = new URLSearchParams(data).toString();
    // Update QR code value
    setEncodedValue(encodedValue);
  };

  return (
    <div>
      <Button
        onClick={handleFixed}
        sx={{ textTransform: "none", marginLeft: 1, borderRadius: 2 }}
      >
        Price Fixed QR
      </Button>
      <Button
        onClick={handleDefault}
        sx={{ textTransform: "none", marginLeft: 1, borderRadius: 2 }}
      >
        Payment QR
      </Button>
      <QRCodeGenerator value={encodedValue} />
    </div>
  );
}

export default MerchantPage;
