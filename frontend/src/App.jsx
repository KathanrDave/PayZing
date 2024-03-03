import { useState } from 'react'
import './App.css'
import HomePage from './assets/pages/homePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import barcode from './assets/pages/barcode';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/barcode" element={<barcode />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
