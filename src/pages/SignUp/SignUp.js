import React from 'react'

import './SignUp.css'
import Logo from '../../assets/images/logo.png'
import Navbar from '../../component/NavBar/Navbar'
import Input from '../../component/Input/Input'
import Button from '../../component/Button/Button'
import { useNavigate } from 'react-router-dom'

function SignUp() {
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path)
  }
  return (
    <div className='sign-up-page'>
        <Navbar/>
        <div className='sign-up-page-container'>
            <div className='sign-up-logo-container'>
                <img src={Logo} alt='logo'/>
            </div>
            <div className='sign-up-input-container'>
                <Input
                    placeholder={'Full Name'}
                    name={'name'}
                    type={'text'}
                    label={'Full Name'}
                />
            </div>
            <div className='sign-up-input-container'>
                <Input
                    placeholder={'Email'}
                    name={'email'}
                    type={'text'}
                    label={'Email'}
                />
            </div>
            <div className='sign-up-input-container'>
                <Input
                    placeholder={'Password'}
                    name={'password'}
                    type={'password'}
                    label={'Password'}
                />
            </div>
            <div className='sign-up-button-container'>
                <Button
                    type={'primary'}
                    text={'Sign Up'}
                />
            </div>
            <div className='sign-up-to-login-container'>
                <p className='sign-up-to-login-text'>Already have account ? <span onClick={()=>goTo('/login')}>Login</span></p>
            </div>
        </div>
    </div>
  )
}

export default SignUp