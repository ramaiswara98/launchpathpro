import React, {useState } from 'react'


import './Navbar.css'
import Logo from '../../assets/images/logo.png'
import Button from '../Button/Button'
import Person from '../../assets/images/person.png'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../services/Firebase/Firebase'
import { signOut } from 'firebase/auth'
import useFirebaseAuth from '../../hook/useFirebaseAuth'

function Navbar() {

  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const {user, type, userFireStore} = useFirebaseAuth();


  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogOut = ()=> {
    signOut(auth).then(() => {
      navigate('/')
      window.location.reload();
    })
  }

  const goTo = (path) => {
    navigate(path)
  }
  
  const checkType = () => {
    if(type === 'login'){
      return(
        <div className='person-container' onClick={toggleDropdown}>
            <img src={Person} alt='person-icon' className='person-icon' />
            <p className='person-name'>{user.displayName}</p>
            {showDropdown && (
              <div className='overlay' id='myDropdown'>
                
                <div className='overlay-item'>
                  <p className='overlay-item-text' onClick={()=>goTo('/dashboard')}>Dashboard</p>
                </div>
                {userFireStore!==null && userFireStore.type === 'free' && (
                  <div className='overlay-item'>
                  <p className='overlay-item-text' onClick={()=>goTo('/pricing')}>Upgrade</p>
                </div>
                )}
                
                <div className='overlay-item' onClick={handleLogOut}>
                  <p className='overlay-item-text'>Log Out</p>
                </div>
                <hr/>
                <div className='overlay-item'>
                  <p className='overlay-item-text' onClick={()=>goTo('/dashboard')}>{userFireStore !== null ? userFireStore.projectQuota+' Token':''}</p>
                </div>
              </div>
            )}
        </div>
      )
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