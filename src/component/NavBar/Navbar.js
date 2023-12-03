import React from 'react'


import './Navbar.css'
import Logo from '../../assets/images/logo.png'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'

function Navbar({type}) {

  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path)
  }
  
  const checkType = () => {
    if(type === 'login'){
      return ''
    }
    if(type === 'auth'){
      return ''
    }
    if(type === 'home'){
      return(
        <div>
            <Button
              type={'primary'}
              text={'Get Started!'}
              onClick = {()=>goTo('/sign-up')}
            />
        </div>
      )
    }
  }

  return (
    <div className='navbar-container'>
        <div className='navbar-logo-container' >
            <img 
              src={Logo} 
              alt='logo' 
              className='navbar-logo'
              onClick={()=>goTo('/')}
            />
        </div>
       {checkType()}
        
    </div>
  )
}

export default Navbar