import React from "react";
import { Card, CardContent, Typography, Avatar, Button } from "@mui/material";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
// import matic from '../matic.png';
import { ThemeProvider } from "@mui/material/styles";
import theme from "../acessories/theme";

function AccountDetails({ address, name, balance }) {
  const displayAddress = address
    ? `${address.slice(0, 4)}...${address.slice(38)}`
    : "N/A";
  const handleSetUsername = () => {
    // Handle the "Set Username" action
  };
  const handleSwitchAccounts = () => {
    // Handle the "Switch Accounts" action
  };
  return (
    <Card sx={{ width: "100%" }}>
      <CardContent>
        <div className="accountDetailRow">
          <AccountBoxOutlinedIcon sx={{ color: "#767676", fontSize: "25px" }} />
          <div>
            <Typography variant="h6" className="accountDetailHead">
              {name}
            </Typography>
            <Typography variant="body1" className="accountDetailBody">
              Address: {displayAddress}
            </Typography>
          </div>
        </div>
        <div className="accountDetailRow">
          {/* <Avatar src={matic} alt="maticLogo" sx={{ width: 25, height: 25 }} /> */}
          <div>
            <Typography variant="h6" className="accountDetailHead">
              Native Matic Tokens
            </Typography>
            <Typography variant="body1" className="accountDetailBody">
              {balance} Matic
            </Typography>
          </div>
        </div>
        <div className="balanceOptions">
          <ThemeProvider theme={theme}>
            <Button onClick={handleSetUsername} variant="text">
              Set Username
            </Button>
            <Button onClick={handleSwitchAccounts} variant="text">
              Switch Accounts
            </Button>
          </ThemeProvider>
        </div>
      </CardContent>
    </Card>
  );
}

export default AccountDetails;
