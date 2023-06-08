import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import NavBar from "./components/NavBar"
import Login from "./components/Login"
import Button from "./components/Button"
import Home from "./pages/Home"
import Layout from "./pages/Layout"
import Month from "./pages/Month"
import Weeks from "./pages/Weeks"
import Opposite from "./pages/Opposite"
import BodyPart from "./pages/BodyPart"
import Form from "./components/Form"
import NewForm from "./components/NewForm"
import NewCard from "./components/NewCard"

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
            <Route path="/opposite" element={<Opposite />} />
            <Route path="/bodypart" element={<BodyPart />} />
            <Route path="/form" element={<Form />} />
            <Route path="/newform" element={<NewForm />} />
            <Route path="/newcard" element={<NewCard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
