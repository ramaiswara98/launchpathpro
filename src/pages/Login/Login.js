import React from 'react'

import './Login.css'
import Navbar from '../../component/NavBar/Navbar'
import Input from '../../component/Input/Input'
import Button from '../../component/Button/Button'
import Logo from '../../assets/images/logo.png'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path)
  }
  return (
    <div className='login-page'>
        <Navbar/>
        <div className='login-page-container'>
            <div className='login-logo-container'>
                <img src={Logo} alt='logo'/>
            </div>
            <div className='login-input-container'>
                <Input placeholder={"Email"} name={'email'} type={'text'} label={'Email'}/>
            </div>
            <div className='login-input-container'>
                <Input placeholder={"Password"} name={'password'} type={'password'} label={'Password'}/>
            </div>
            <div className='login-button-container'>
                <Button
                    type={'primary'}
                    text={'Login'}
                />
            </div>
            <div className='sign-up-to-login-container'>
                <p className='sign-up-to-login-text'>Do not have account yet ? <span onClick={()=>goTo('/sign-up')}>Sign Up</span></p>
            </div>
        </div>
    </div>
  )
}

export default Login