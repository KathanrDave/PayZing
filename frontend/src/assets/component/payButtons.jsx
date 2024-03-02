import React from "react";
import { Button, ThemeProvider } from "@mui/material";
import theme from "../acessories/theme";
function PayButtons() {
  const handlePayUser = () => {
    // Implement the logic for paying the user
    console.log("Pay user clicked");
  };

  const handleRequestPay = () => {
    // Implement the logic for requesting payment
    console.log("Request pay clicked");
  };

  return (
    <div className="flex w-full">
      <div className="flex-row">
        <ThemeProvider theme={theme}>
          <Button
            onClick={handlePayUser}
            variant="outlined"
            sx={{
              textTransform: "none",
              marginRight: 2,
              marginLeft: 2,
              padding: 3,
              borderRadius: 3,
            }}
          >
            Pay User
          </Button>

          <Button
            onClick={handleRequestPay}
            variant="outlined"
            sx={{
              textTransform: "none",
              marginLeft: 5,
              padding: 3,
              borderRadius: 3,
            }}
          >
            Request Pay
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default PayButtons;
