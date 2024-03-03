import { useState } from 'react'
import './App.css'
import HomePage from './assets/pages/homePage';
<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MerchantPage from './assets/pages/MerchantPage';

=======
import MerchantPage from './assets/pages/merchantPage';
>>>>>>> 361be1e962bce3d8f68133525c6a6f90a5c84038
function App() {

  return (
    <>
<<<<<<< HEAD
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/barcode" element={<MerchantPage/>} />
        </Routes>
      </BrowserRouter>


=======
     {/* <HomePage/>  */}
     <MerchantPage/>
>>>>>>> 361be1e962bce3d8f68133525c6a6f90a5c84038
    </>
  )
}

export default App
