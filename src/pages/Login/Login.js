import React, { useState } from 'react'

import './Login.css'
import Navbar from '../../component/NavBar/Navbar'
import Input from '../../component/Input/Input'
import Button from '../../component/Button/Button'
import Logo from '../../assets/images/logo.png'
import { useNavigate } from 'react-router-dom'
import { loginUsingEmailAndPassword, sendEmailVerificationToUser } from '../../services/Firebase/FireBaseAuth/AuthWithEmail'

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState('');
  const [loading, setLoading] = useState(false);

  const verifyMyEmail = () => {
    sendEmailVerificationToUser();
    goTo('/verify-your-email')
  }

  const handleClickLogin = () => {
    setAlert('')
    setLoading(true)
    const data = {
        email,
        password
    }
    loginUsingEmailAndPassword(data).then((result) => {
        if(result){
            setAlert('')
            setLoading(false);
            goTo('/dashboard')
        }else{
            setLoading(false);
            setAlert(<p className='login-alert'>It seems your email is not verified yet, <span onClick={verifyMyEmail}>click here</span> to verify your email.</p>)
        }
    }).catch((err) => {
        setLoading(false);
        setAlert(<p className='login-alert'>Login Failed, Check your info and try again.</p>)
    });
  }

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
                <Input placeholder={"Email"} name={'email'} type={'text'} label={'Email'} value={email} onChange={setEmail}/>
            </div>
            <div className='login-input-container'>
                <Input placeholder={"Password"} name={'password'} type={'password'} label={'Password'}value={password} onChange={setPassword}/>
            </div>
            {alert}
            <div className='login-button-container'>
                <Button
                    type={loading?'disable':'primary'}
                    text={loading?'Loading...':'Login'}
                    onClick={loading?()=>{}:handleClickLogin}
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