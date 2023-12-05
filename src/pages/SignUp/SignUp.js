import React, { useState } from 'react'

import './SignUp.css'
import Logo from '../../assets/images/logo.png'
import Navbar from '../../component/NavBar/Navbar'
import Input from '../../component/Input/Input'
import Button from '../../component/Button/Button'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../../services/Firebase/FireStore/User'
import { createNewUserWithEmailAndPassword, sendEmailVerificationToUser } from '../../services/Firebase/FireBaseAuth/AuthWithEmail'

function SignUp() {
  const navigate = useNavigate();
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState('');
  const [loading, setLoading] = useState(false)

  const goTo = (path) => {
    navigate(path)
  }

  const addUserToDatabase = (data) => {
    addUser(data).then((result) => {
        sendEmailVerificationToUser();
        setLoading(false);
        goTo('/verify-your-email');
    })
    .catch((err) =>console.error(err))
  }

  const handleClickSignUp = async() => {
    setAlert('')
    setLoading(true);
    const data = {
        fullname,
        email,
        password
    }
    createNewUserWithEmailAndPassword(data)
    .then((user) => {
        data.uid = user.uid;
        data.emailVerified = user.emailVerified;
        data.type='free';
        data.feedback=false;
        data.projectQuota=1;
        addUserToDatabase(data);
    }).catch((err) => {
        setAlert("Email already been used")
    })
    // addUserToDatabase(data)
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
            <p className='alert-error'>{alert}</p>
            <div className='sign-up-button-container'>
                <Button
                    type={loading?'disable':'primary'}
                    text={loading?'Loading...':'Sign Up'}
                    onClick={loading?()=>{}:handleClickSignUp}
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