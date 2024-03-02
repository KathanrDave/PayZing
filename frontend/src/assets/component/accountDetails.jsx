import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  CardHeader,
} from "@mui/material";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import matic from "../../../public/matic.png";
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
    <div className="mt-4 mb-12  border-indigo-400 border-2 rounded-lg">
      <ThemeProvider theme={theme}>
        <Card
          sx={{
            width: "100%",
            background: theme.palette.background.default,
            borderRadius: 3, // Increase the borderRadius for more roundness
          }}
        >
          <CardContent>
            <CardHeader
              title="Account Details"
              sx={{
                fontSize: theme.typography.h1.fontSize,
                fontWeight: theme.typography.h1.fontWeight,
                color: theme.palette.primary.main,
              }}
            />
            <div className="items-center">
              <div className="account">
                <div className="flex w-full">
                  <div className="w-1/3">
                    <AccountBoxOutlinedIcon
                      sx={{
                        color: "#767676",
                        fontSize: "50px",
                        marginRight: 1,
                        marginLeft: 1,
                      }}
                    />
                  </div>
                  <div className="w-2/3">
                    <Typography
                      sx={{
                        fontSize: theme.typography.body1.fontSize,
                        fontWeight: theme.typography.body1.fontWeight,
                        color: theme.palette.primary.main,
                      }}
                      className="account"
                    >
                      {name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: theme.typography.body2.fontSize,
                        fontWeight: theme.typography.body2.fontWeight,
                        color: theme.palette.primary.main,
                      }}
                      className="accountDetailBody"
                    >
                      Address: {displayAddress}
                    </Typography>
                  </div>
                </div>
              </div>
              <div></div>
              <div className="flex">
                <div className="w-1/3">
                  <Avatar
                    src={matic}
                    alt="maticLogo"
                    sx={{ width: 45, height: 45, margin: 1 }}
                  />
                </div>
                <div>
                  <Typography
                    sx={{
                      fontSize: theme.typography.body1.fontSize,
                      fontWeight: theme.typography.body1.fontWeight,
                      color: theme.palette.primary.main,
                    }}
                    className="accountDetailHead"
                  >
                    Native Matic Tokens
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: theme.typography.body2.fontSize,
                      fontWeight: theme.typography.body2.fontWeight,
                      color: theme.palette.primary.main,
                    }}
                    className="accountDetailBody"
                  >
                    {balance} Matic
                  </Typography>
                </div>
              </div>
              <div className="balanceOptions">
                <div className="w-full ml-2 mt-2">
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
                  sx={{ textTransform: "none", marginLeft: 2 }}
                >
                  Switch Accounts
                </Button>
                </div>     
              </div>
            </div>
          </CardContent>
        </Card>
      </ThemeProvider>
    </div>
  );
}

export default AccountDetails;
