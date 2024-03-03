import { useState } from 'react'
import './App.css'
import HomePage from './assets/pages/homePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MerchantPage from './assets/pages/MerchantPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/barcode" element={<MerchantPage/>} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
