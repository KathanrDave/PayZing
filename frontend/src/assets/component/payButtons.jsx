import React from "react";
import { Button, ThemeProvider } from "@mui/material";
import theme from "../acessories/theme";
import { MdOutlinePaid } from "react-icons/md";
import { LuArrowUpDown } from "react-icons/lu";

function PayButtons() {
  const handlePayUser = () => {
    console.log("Pay user clicked");
  };

  const handleRequestPay = () => {
    console.log("Request pay clicked");
  };

  return (
    <div className="flex w-full">
      <ThemeProvider theme={theme}>
        <Button
          onClick={handlePayUser}
          variant="outlined"
          sx={{
            textTransform: "none",
            margin: 2,
            pl: 3,
            pr: 3,
            borderRadius: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MdOutlinePaid color="white" size={25} />
          Pay User
        </Button>

        <Button
          onClick={handleRequestPay}
          variant="outlined"
          sx={{
            textTransform: "none",
            margin: 2,
            pl: 3,
            pr: 3,
            borderRadius: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            // Adds space between the icon and the text
          }}
        >
          <LuArrowUpDown color="white" size={25} />
          Request Pay
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default PayButtons;
