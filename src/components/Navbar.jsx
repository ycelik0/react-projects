import React from 'react'
import { Link } from 'react-router-dom'
import CustomLink from './CustomLink'

const Navbar = () => {
  return (
    <nav className='flex p-3 bg-secondary text-white px-[10rem]'>
      <div className="nav-logo">
        <h1 className='text-3xl'>
          <Link to="/" className='p-2'>Nav</Link>
        </h1>
      </div>
      <ul className='flex items-center text-center ml-5'>
        <CustomLink to="/counter">Counter</CustomLink>
        <CustomLink to="/date">Date</CustomLink>
        <CustomLink to="/todolist">Todolist</CustomLink>
      </ul>
    </nav>
  )
}

export default Navbar;