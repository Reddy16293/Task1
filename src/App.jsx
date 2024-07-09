import React from 'react'
import Navbar from './components/Navbar'
import Menu from './pages/Menu'
import { Route, Routes } from 'react-router'
import GiftCard from './pages/GiftCard'
import Rewards from './pages/Rewards'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/menu' element={<Menu/>} />
        <Route path='/gift-cards' element={<GiftCard/>} />
        <Route path='/rewards' element={<Rewards/>} />


      </Routes>


    </div>
  )
}

export default App