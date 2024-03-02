import React from "react";
import {
 Card,
 CardContent,
 Typography,
 CardHeader,
 Button,
 ThemeProvider,
} from "@mui/material";
import theme from "../acessories/theme";

function CurrentBalance({ dollars }) {
 // api setup
 const handleSwapTokens = () => {
    console.log("Swap Tokens clicked");
 };
 const handleBridgeTokens = () => {
    console.log("Bridge Tokens clicked");
 };

 return (
    <ThemeProvider theme={theme}>
      <Card sx={{ width: "100%", background: theme.palette.background.default }}>
        <CardHeader
          title={
            <Typography variant="h1" sx={{ fontFamily: theme.typography.fontFamily }}>
              Current Balance
            </Typography>
          }
        />
        <CardContent>
          <div
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: theme.typography.h1.fontSize,
                fontWeight: theme.typography.h1.fontWeight,
                lineHeight: "70px",
                color: theme.palette.primary.main,
              }}
            >
              $ {dollars}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: theme.typography.h2.fontSize,
                fontWeight: theme.typography.h2.fontWeight,
                color: theme.palette.secondary.main,
              }}
            >
              Available
            </Typography>
          </div>
          <div
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "16px",
            }}
          >
            <Button onClick={handleSwapTokens} variant="outlined">
              Swap Tokens
            </Button>
            <Button onClick={handleBridgeTokens} variant="outlined">
              Bridge Tokens
            </Button>
          </div>
        </CardContent>
      </Card>
    </ThemeProvider>
 );
}

export default CurrentBalance;
