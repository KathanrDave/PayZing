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
    <ThemeProvider theme={theme}>
      <Card
        sx={{ width: "100%", background: theme.palette.background.default }}
      >
        <CardContent>
          <div className="accountDetailRow">
            <AccountBoxOutlinedIcon
              sx={{ color: "#767676", fontSize: "25px" }}
            />
            <div>
              <Typography
                sx={{
                  fontSize: theme.typography.body1.fontSize,
                  fontWeight: theme.typography.body1.fontWeight,
                  color: theme.palette.primary.main,
                }}
                className="accountDetailHead"
              >
                {name}
              </Typography>
              <Typography
                sx={{
                  fontSize: theme.typography.body1.fontSize,
                  fontWeight: theme.typography.body1.fontWeight,
                  color: theme.palette.primary.main,
                }}
                className="accountDetailBody"
              >
                Address: {displayAddress}
              </Typography>
            </div>
          </div>
          <div className="accountDetailRow">
            {/* <Avatar src={matic} alt="maticLogo" sx={{ width: 25, height: 25 }} /> */}
            <div>
              <Typography
                sx={{
                  fontSize: theme.typography.h1.fontSize,
                  fontWeight: theme.typography.h1.fontWeight,
                  color: theme.palette.primary.main,
                }}
                className="accountDetailHead"
              >
                Native Matic Tokens
              </Typography>
              <Typography
                sx={{
                  fontSize: theme.typography.h2.fontSize,
                  fontWeight: theme.typography.h2.fontWeight,
                  color: theme.palette.primary.main,
                }}
                className="accountDetailBody"
              >
                {balance} Matic
              </Typography>
            </div>
          </div>
          <div className="balanceOptions">
            <Button
              onClick={handleSetUsername}
              variant="text"
              sx={{ textTransform: "none", marginRight: 1 }}
            >
              Set Username
            </Button>
            <Button
              onClick={handleSwitchAccounts}
              variant="text"
              sx={{ textTransform: "none", marginRight: 1 }}
            >
              Switch Accounts
            </Button>
          </div>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}

export default AccountDetails;
