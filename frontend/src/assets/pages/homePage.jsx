import React from "react";
import { useState, useEffect } from "react";
import AccountDetails from "../component/accountDetails";
import CurrentBalance from "../component/currentBalance";
import TableDetails from "../component/tableDetails";
import PayButtons from "../component/payButtons";
import { ThemeProvider } from "@mui/material";
import theme from "../acessories/theme";
import { useNavigate } from 'react-router-dom';
// import Navbar from "../component/Navbar";
import { useConnect, useAccount, useDisconnect } from "wagmi";
import axios from "axios";
import { Button } from "@mui/material"
import landingPage from "./landingPage";;

const HomePage = () => {
  const account = useAccount();
  const isConnected = useAccount().isConnected;
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();
  const navigate = useNavigate();
  // const address = "0x123.....";
  // const name = "Divykumar";
  // const balance = "100.32";
  // const dollars = "121.00";
  // const history = "";
  const [name, setName] = useState("...");
  const [balance, setBalance] = useState("...");
  const [dollars, setDollars] = useState("...");
  const [history, setHistory] = useState(null);
  const [requests, setRequests] = useState({ 1: [0], 0: [] });

  function disconnectAndSetNull() {
    disconnect();
    setName("...");
    setBalance("...");
    setDollars("...");
    setHistory(null);
    setRequests({ 1: [0], 0: [] });
  }

  async function getNameAndBalance() {
    const res = await axios.get(`http://localhost:3001/getNameAndBalance`, {
      params: { userAddress: account.address },
    });

    const response = res.data;
    console.log(response.requests);
    if (response.name[1]) {
      setName(response.name[0]);
    }
    setBalance(String(response.balance));
    setDollars(String(response.dollars));
    setHistory(response.history);
    setRequests(response.requests);
  }

  useEffect(() => {
    if (!isConnected) return;
    getNameAndBalance();
  }, [isConnected]);

  const getbarcode = () => {
    navigate('/barcode');
  };
  return (
    <>
      <nav className="relative bg-white shadow dark:bg-gray-800 w-full">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-white font-caveat">
              PAYZING
            </h1>
          </div>

          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}
          >
            <div className="flex flex-col md:flex-row md:mx-6">
              {isConnected ? (
                <>
                  <div className="flex flex-col md:flex-row md:mx-6">
                    <button type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={getbarcode}>
                      Merchant</button>
                  </div>
                  <ThemeProvider theme={theme}>
                    <Button type="button" onClick={disconnectAndSetNull}>
                      Disconnect Wallet
                    </Button>
                  </ThemeProvider>
                </>
              ) : (
                <ThemeProvider theme={theme}>
                  <Button
                    type="button"
                    onClick={() => {
                      connect({ connector: connectors[0] });
                      console.log(account.addresses);
                      console.log(connectors[0].name);
                      console.log(isConnected);
                    }}
                  >
                    Connect Wallet
                  </Button>
                </ThemeProvider>
              )}
            </div>
          </div>
        </div>
      </nav>

      {isConnected ? (
        <div className="flex h-full  bg-[url('/public/herobg.png')] bg-no-repeat">
          <div className="flex w-full">
            <div className="flex-start  w-1/3 mt-3 ml-3">
              <div className="flex-col items-center">
                <AccountDetails
                  address={account.address}
                  name={name}
                  balance={balance}
                />
              </div>
              <div className="flex">
                <PayButtons />
              </div>
              <div>
                <CurrentBalance dollars={dollars} />
              </div>
            </div>
            <div className="w-2/3 mt-6 ml-3 mr-3 rounded">
              <TableDetails />
            </div>
          </div>
        </div>
      ) : (
        <div className = "h-full  bg-[url('/public/front.png')] bg-no-repeat">
        </div>
      )}
    </>
  );
};

export default HomePage;
