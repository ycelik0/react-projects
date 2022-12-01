import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex p-3 bg-gray-800 text-white'>
      <div className="nav-logo">
        <h1 className='text-3xl'>
          <Link to="/" className='p-2'>Nav</Link>
        </h1>
      </div>
      <ul className='flex items-center text-center ml-5'>
        <li className='m-1'>
          <Link to="/counter" className='p-2 rounded transition-all hover:bg-gray-900'>Counter</Link>
        </li>
        <li className='m-1'>
          <Link to="/date" className='p-2 rounded transition-all hover:bg-gray-900'>Date</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;