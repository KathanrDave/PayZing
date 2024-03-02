import React from 'react';
import AccountDetails from '../component/accountDetails'; 
import CurrentBalance from '../component/currentBalance';
const HomePage = () => {
    const address="ksfhsiuff";
    const name="askfhaiufh";
    const balance="5156516151";
    const dollars="21555";
  return (
    <>
<AccountDetails address={address} name={name} balance={balance} />
<CurrentBalance dollars={dollars}/>
    </>
  );
};

export default HomePage;
