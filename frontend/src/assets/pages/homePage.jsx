import React from "react";
import AccountDetails from "../component/accountDetails";
import CurrentBalance from "../component/currentBalance";
import TableDetails from "../component/tableDetails";
import PayButtons from "../component/payButtons";
const HomePage = () => {
  const address = "0x123.....";
  const name = "Divykumar";
  const balance = "100.32";
  const dollars = "121.00";
  const history = "";

  return (
    <div className="flex h-full  bg-[url('/public/herobg.png')] bg-no-repeat h-full">
        <div className="flex w-full">
        <div className="flex-start  w-1/3 mt-3 ml-3">
        <div className="flex-col items-center">
          <AccountDetails address={address} name={name} balance={balance} />
        </div>
        <div className="flex">
          <PayButtons />
        </div>
        <div>
          <CurrentBalance dollars={dollars} />
        </div>
      </div>
      <div className="w-2/3 mt-6 ml-3 mr-3 rounded">
      <TableDetails/>
        </div>
      </div>
  
    </div>
  );
};

export default HomePage;
