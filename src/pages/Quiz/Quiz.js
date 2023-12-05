import React, { useState } from 'react'

import './Quiz.css'
import Navbar from '../../component/NavBar/Navbar'
import Question from '../../component/Question/Question'

function Quiz() {
  const [questions, setQuestions] = useState(["makan","makan","makan","makan","makan","makan","makan","makan"])

  const indicatorWidth = () => {
    const totalQuestions = questions.length;
    const totalMargin = totalQuestions * 10;
    const totalWidth = 1200-totalMargin;
    const width = totalWidth/totalQuestions;
    return width
  }
  return (
    <div className='quiz-page'>
        <Navbar/>
        <div className='quiz-container'>
          <div className='quiz-section-container'>
            <p className='quiz-section-text'>Idea Validation > Market Deman</p>
            <div className='quiz-indicator-container'>
            {questions.length>0&&(<>
            
              {questions.map((question,index) => {
                return(
                <span className='quiz-indicator-item' style={{width:indicatorWidth()}}></span>
                )
              })}
            </>)}
           </div>
          </div>
          
          <div className='question-container'>
              <Question type={'multiple-choice'}/>
          </div>
        </div>
    </div>
  )
}

export default Quiz