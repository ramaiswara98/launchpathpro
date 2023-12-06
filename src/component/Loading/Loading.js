import React from 'react'

import './Loading.css';
import LoadingAnimation from '../../assets/animation/three-ball.gif'

function Loading() {
  return (
    <div className='loading-container'>
        <img src={LoadingAnimation} alt='loading' className='img-loading'/>
    </div>
  )
}

export default Loading