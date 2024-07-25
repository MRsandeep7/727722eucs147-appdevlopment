import React from 'react'
import '../Asserts/css/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import logo from '../Asserts/images/logo.png'
const Navbar = () => {
  return (
    <div className='bar'>
      <div className='left'>
        <img src={logo} alt=""width='100vw' height='55px' style={{borderRadius:"40px"}}/>
        <p>CUSTO-GIFT</p>
      </div>
      <div className='right'>
        <button className='li'>Home</button>
        <button className='li'>About</button>
        <button className='li'>Contact</button>
      </div>
      <div className="cart">
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
     
    </div>
  )
}

export default Navbar
