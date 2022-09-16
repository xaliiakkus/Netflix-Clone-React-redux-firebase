import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Netflix from './pages/Netflix'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Player from './pages/Player'
function App() {
  return (
    <Routes>
    <Route exact path="/Login" element={<Login />} />
    <Route exact path="/Signup" element={<Signup />} />
    <Route exact path="/Player" element={<Player />} />
    <Route exact path="/" element={<Netflix />} />
  </Routes>
  )
}
export default App
