import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-center '>
        <div>
            <img src='https://tse1.mm.bing.net/th?id=OIP.MgSNaKgOFjpcvu4W2TQ7JgAAAA&pid=Api&rs=1&c=1&qlt=95&w=158&h=88' alt='logo' className='w-20 h-20' />


        </div>
        <div  className='flex justify-between'>
            <div>
                  <button className=''>
                    <Link to="/home">MENU</Link>
                    
                  </button>
                  <button className=''>
                    <Link to="/home">REWARDS</Link>
                    
                  </button>
                  <button className=''>
                    <Link to="/home">Gift CARDS</Link>
                    
                  </button>

            </div>
            <div>
            <button className=''>
                    <Link to="/home">Find a store</Link>
                    
                  </button>
                  <button className=''>
                    <Link to="/home">signin</Link>
                    
                  </button>
                  <button className=''>
                    <Link to="/home">signup</Link>
                    
                  </button>

            </div>


        </div>



    </div>
  )
}

export default Navbar