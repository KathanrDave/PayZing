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
      <Card
        sx={{ width: "100%", background: theme.palette.background.default }}
      >
        <CardHeader
          title={
            <Typography
              sx={{
                fontSize: theme.typography.h1.fontSize,
                fontWeight: theme.typography.h1.fontWeight,
                color: theme.palette.primary.main,
              }}
            >
              Current Balance
            </Typography>
          }
        />
        <CardContent>
          <div className="flex">
            <div className="flex justify-between">
              <div className="mt-2 ml-4">
                <Typography
                  sx={{
                    fontSize: "2.6rem",
                    fontWeight: theme.typography.h1.fontWeight,
                    lineHeight: "70px",
                    color: theme.palette.primary.main,
                  }}
                >
                  $ {dollars}
                </Typography>
              </div>
             <div className="mt-8 ml-4">
             <Typography
                sx={{
                  fontSize:'1.2rem',
                  fontWeight: theme.typography.h2.fontWeight,
                  color: theme.palette.secondary.main,
                }}
              >
                Available
              </Typography>
             </div>
              
            </div>
          </div>
          <div>
            <Button
              onClick={handleSwapTokens}
              sx={{ textTransform: "none", marginRight: 1 }}
            >
              Swap Tokens
            </Button>
            <Button
              onClick={handleBridgeTokens}
              sx={{ textTransform: "none", marginLeft: 1 }}
            >
              Bridge Tokens
            </Button>
          </div>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}

export default CurrentBalance;
