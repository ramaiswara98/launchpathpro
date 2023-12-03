import React from 'react'


import './Navbar.css'
import Logo from '../../assets/images/logo.png'
import Button from '../Button/Button'

function Navbar() {
  return (
    <div className='navbar-container'>
        <div className='navbar-logo-container'>
            <img src={Logo} alt='logo' className='navbar-logo'/>
        </div>
        <div>
            <Button
              type={'primary'}
              text={'Get Started!'}
            />
        </div>
    </div>
  )
}

export default Navbar