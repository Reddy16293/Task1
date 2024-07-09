import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Menu from './pages/Menu';
import { Route, Routes } from 'react-router';
import GiftCard from './pages/GiftCard';
import Rewards from './pages/Rewards';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';

const App = () => {
  const [isSignin, setIsSignin] = useState(false);

  return (
    <div>
      <Navbar isSignin={isSignin} setIsSignin={setIsSignin} />
      <Routes>
        <Route path='/menu' element={<Menu />} />
        <Route path='/gift-cards' element={<GiftCard />} />
        <Route path='/rewards' element={<Rewards />} />
        <Route path='/signin' element={<Signin setIssignin={setIsSignin} />} />
        <Route path='/signup' element={<Signup setIssignin={setIsSignin} />} />
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
};

export default App;
