import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Routes/App'
import Public from './Routes/Public'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/public" element={<Public />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
