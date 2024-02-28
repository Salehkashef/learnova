import Footer from './combonent/Footer'
import Corses from './combonent/Corses'
import Nav from './combonent/Nav'
import React from 'react'
import Home from './combonent/Home'
import Corsdetels from './combonent/Corsdetels'
import { Route , Routes } from 'react-router-dom'
import RegisterForm from './combonent/Register'
import LoginForm from './combonent/Login'
import Checkoutbox from './combonent/Checkoutbox'


function App() {
  return (
    <>
    <React.Fragment>
    <Nav />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/corsdetels" element={<Corsdetels />} />
    <Route path="/corses" element={<Corses />} />
    <Route path="/log" element={<LoginForm />} />
    <Route path="/register" element={<RegisterForm />} />
    <Route path="/checkout" element={<Checkoutbox />} />

    </Routes>
    <Footer />
    </React.Fragment>
    </>
  )
}

export default App
