import React, { useEffect, useState } from 'react'

import './VerificationEmail.css'
import Navbar from '../../component/NavBar/Navbar'
import { Constant } from '../../utils/Constant'
import Button from '../../component/Button/Button'
import { sendEmailVerificationToUser } from '../../services/Firebase/FireBaseAuth/AuthWithEmail'
import { useNavigate } from 'react-router-dom'

function VerificationEmail() {
    const [timeLeft, setTimeLeft] = useState(0);
    const navigate = useNavigate();

    const goTo = (path)=>{
        navigate(path);
    }

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
      };
    
    const startCountDown = () => {
        if (timeLeft === 0) {
            return;
          }
      
          setTimeLeft(prevTime => {
            if (prevTime === 0) {
              return 0;
            }
            return prevTime - 1;
          });
      };
      useEffect(() => {
        const countdown = setTimeout(() => {
          startCountDown();
        }, 1000);
    
        return () => clearTimeout(countdown);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [timeLeft]);

    const resendEmailVerification = () => {
        sendEmailVerificationToUser();
        setTimeLeft(5*60);
        startCountDown();
    }
  return (
    <div
        className='verification-email-page'
    >
        <Navbar/>
        <div className='verification-email-container'>
            <p className='verification-email-title'>One More Step. </p>
            <p className='verification-email-sub-title'>{Constant.EMAIL_VERIFIED}</p>
            <div className='verification-email-button-container' style={{width:timeLeft>0?250:200}}>
                {timeLeft>0?(<>
                    <Button
                    type={'disable'}
                    text={"Resend ("+formatTime(timeLeft)+")"}
                    />
                </>):(<>
                    <Button
                    type={'alternate'}
                    text={"Resend"}
                    onClick={resendEmailVerification}
                />
                </>)}
               
                <Button
                    type={'primary'}
                    text={"Login"}
                    onClick={()=>goTo('/login')}
                />
            </div>
        </div>
    </div>
  )
}

export default VerificationEmail