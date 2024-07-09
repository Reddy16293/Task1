import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-6 bg-white shadow-md'>
      <div className='flex items-center gap-x-4'>
        <img 
          src='https://tse1.mm.bing.net/th?id=OIP.MgSNaKgOFjpcvu4W2TQ7JgAAAA&pid=Api&rs=1&c=1&qlt=95&w=158&h=88' 
          alt='logo' 
          className='w-20 h-10' 
        />
        <Link to="/menu" className='text-lg font-medium text-gray-700 hover:underline underline-offset-8 hover:text-green-600'>MENU</Link>
        <Link to="/rewards" className='text-lg font-medium text-gray-700 hover:underline underline-offset-8 hover:text-green-600'>REWARDS</Link>
        <Link to="/gift-cards" className='text-lg font-medium text-gray-700 hover:underline underline-offset-8 hover:text-green-600'>GIFT CARDS</Link>
      </div>
    
      <div className='flex space-x-8 justify-center items-center '>
        <Link to="/find-store" className='text-lg font-medium text-gray-700 hover:text-green-600'>Find a store</Link>

        {/* Replace Sign In and Sign Up links with buttons */}
        <button className='text-md font-medium bg-green text-white text-gray-700 hover:text-green-600 border border-gray-400 px-4 py-2 rounded-[30px]'>
          <Link to="/signin">Sign In</Link>
        </button>
        <button className='text-md bg-black text-white font-medium text-gray-700 hover:text-green-600 border border-gray-400 px-4 py-2 rounded-[30px]'>
          <Link to="/signup">Sign Up</Link>
        </button>
      </div>
    </div>
  )
}

export default Navbar
