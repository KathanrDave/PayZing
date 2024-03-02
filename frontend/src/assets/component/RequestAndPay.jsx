import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DollarIcon from "@mui/icons-material/AttachMoney";
import SwapIcon from "@mui/icons-material/SwapHoriz";

function RequestAndPay() {
  const [payModal, setPayModal] = useState(false);
  const [requestModal, setRequestModal] = useState(false);
  const [requestAmount, setRequestAmount] = useState(5);
  const [requestAddress, setRequestAddress] = useState("");
  const [requestMessage, setRequestMessage] = useState("");

  const showPayModal = () => {
    setPayModal(true);
  };

  const hidePayModal = () => {
    setPayModal(false);
  };

  const showRequestModal = () => {
    setRequestModal(true);
  };

  const hideRequestModal = () => {
    setRequestModal(false);
  };

  return (
    <>
      <Modal
        open={payModal}
        onClose={hidePayModal}
        aria-labelledby="confirm-payment-title"
      >
        <div>
          <h2 id="confirm-payment-title">Confirm Payment</h2>
          {/* Content of the modal */}
          <Button onClick={hidePayModal}>Cancel</Button>
          <Button onClick={hidePayModal}>Proceed To Pay</Button>
        </div>
      </Modal>

      <Modal
        open={requestModal}
        onClose={hideRequestModal}
        aria-labelledby="request-payment-title"
      >
        <div>
          <h2 id="request-payment-title">Request A Payment</h2>
          {/* Content of the modal */}
          <InputLabel>Amount (Matic)</InputLabel>
          <TextField
            type="number"
            value={requestAmount}
            onChange={(e) => setRequestAmount(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <DollarIcon />
                </InputAdornment>
              ),
            }}
          />
          <InputLabel>From (address)</InputLabel>
          <Input
            placeholder="0x..."
            value={requestAddress}
            onChange={(e) => setRequestAddress(e.target.value)}
          />
          <InputLabel>Message</InputLabel>
          <Input
            placeholder="Lunch Bill..."
            value={requestMessage}
            onChange={(e) => setRequestMessage(e.target.value)}
          />
          <Button onClick={hideRequestModal}>Cancel</Button>
          <Button onClick={hideRequestModal}>Proceed To Request</Button>
        </div>
      </Modal>

      <div className="requestAndPay">
        <div className="quickOption" onClick={showPayModal}>
          <DollarIcon style={{ fontSize: "26px" }} />
          Pay
          <div className="numReqs">2</div>
        </div>

        <div className="quickOption" onClick={showRequestModal}>
          <SwapIcon style={{ fontSize: "26px" }} />
          Request
        </div>
      </div>
    </>
  );
}

export default RequestAndPay;
