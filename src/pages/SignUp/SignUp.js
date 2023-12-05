import React, { useState } from 'react'

import './SignUp.css'
import Logo from '../../assets/images/logo.png'
import Navbar from '../../component/NavBar/Navbar'
import Input from '../../component/Input/Input'
import Button from '../../component/Button/Button'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../../services/FireStore/User'

function SignUp() {
  const navigate = useNavigate();
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goTo = (path) => {
    navigate(path)
  }

  const addUserToDatabase = async(data) => {
    const uid = await addUser(data)
    const datas = {
        fullname,
        email,
        password,
        uid
    }
    console.log(datas)
  }

  const handleClickSignUp = () => {
    const data = {
        fullname,
        email,
        password
    }
    addUserToDatabase(data)
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
                    onChange={setFullName}
                    value={fullname}
                />
            </div>
            <div className='sign-up-input-container'>
                <Input
                    placeholder={'Email'}
                    name={'email'}
                    type={'text'}
                    label={'Email'}
                    onChange={setEmail}
                    value={email}
                />
            </div>
            <div className='sign-up-input-container'>
                <Input
                    placeholder={'Password'}
                    name={'password'}
                    type={'password'}
                    label={'Password'}
                    onChange={setPassword}
                    value={password}
                />
            </div>
            <div className='sign-up-button-container'>
                <Button
                    type={'primary'}
                    text={'Sign Up'}
                    onClick={handleClickSignUp}
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