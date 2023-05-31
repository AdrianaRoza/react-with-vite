import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import NavBar from "./components/NavBar"
import Login from "./components/Login"
import Button from "./components/Button"
import List from "./components/List"
import Home from "./pages/Home"
import Layout from "./pages/Layout"

const App = () => {
  return (
    <>    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/day_of_week" element={<List />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
