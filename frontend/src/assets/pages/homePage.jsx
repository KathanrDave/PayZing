import React from "react";
import AccountDetails from "../component/accountDetails";
import CurrentBalance from "../component/currentBalance";
import TableDetails from "../component/tableDetails";

const HomePage = () => {
  const address = "ksfhsiuff";
  const name = "askfhaiufh";
  const balance = "5156516151";
  const dollars = "21555";
  const history = "";

  return (
    <div className="flex bg-stone-200 w-full h-full">
        <div className="flex-start  w-1/3 mt-3 ml-3 ">
        <div className="flex-col">
        <div className="mb-20">
        <AccountDetails address={address} name={name} balance={balance} />
        </div>
        <div>
        <CurrentBalance dollars={dollars} />
        </div>
        </div>
        </div>

      {/* <TableDetails history={history}/> */}
    </div>
  );
};

export default HomePage;
