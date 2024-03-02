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
    <div className="mt-12  border-indigo-400 border-2 rounded-lg">
      <ThemeProvider theme={theme}>
        <Card
          sx={{
            width: "100%",
            background: theme.palette.background.default,
            borderRadius: 3,
          }}
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
            <div className="flex ">
              <div className="flex space-x-4">
                <div>
                    
                </div>
                <div className="ml-4 w-2/3">
                  <Typography
                    sx={{
                      fontSize: "2.5rem",
                      fontWeight: theme.typography.h1.fontWeight,
                      lineHeight: "70px",
                      color: theme.palette.primary.main,
                    }}
                  >
                    $ {dollars}
                  </Typography>
                </div>
                <div className="mt-7 ml-4">
                  <Typography
                    sx={{
                      fontSize:"1rem",
                      fontWeight: theme.typography.body2.fontWeight,
                      color: theme.palette.secondary.main,
                    }}
                  >
                    Available
                  </Typography>
                </div>
              </div>
            </div>
            <div className="w-full items-center">
              <Button
                onClick={handleSwapTokens}
                sx={{ textTransform: "none", marginRight: 1, marginLeft:2,borderRadius:2 }}
              >
                Swap Tokens
              </Button>
              <Button
                onClick={handleBridgeTokens}
                sx={{ textTransform: "none", marginLeft: 1,borderRadius:2 }}
              >
                Bridge Tokens
              </Button>
            </div>
          </CardContent>
        </Card>
      </ThemeProvider>
    </div>
  );
}

export default CurrentBalance;
