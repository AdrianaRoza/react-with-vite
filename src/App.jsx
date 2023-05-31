import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import NavBar from "./components/NavBar"
import Login from "./components/Login"
import Button from "./components/Button"
import Home from "./pages/Home"
import Layout from "./pages/Layout"
import Month from "./pages/Month"
import Weeks from "./pages/Weeks"

const App = () => {
  return (
    <>    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/day_of_week" element={<Weeks/>} />
          <Route path="/month" element={<Month />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
