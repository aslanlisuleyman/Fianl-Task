import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"
const Header = () => {
  return (
    <div className='header'>
    <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png.webp" alt="" />
    <ul>

   <Link to="/" className='link'>Home</Link>
   <Link to="/basket" className='link'>Basket</Link>
   <Link to="/wishlist" className='link'>Wishlist</Link>
   <Link to="/add" className='link'>Add</Link>


    </ul>
  </div>
  )
}

export default Header