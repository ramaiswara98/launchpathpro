import React, { useEffect, useState } from 'react'

import './Quiz.css'
import Navbar from '../../component/NavBar/Navbar'
import Question from '../../component/Question/Question'
import { getQuestions, getSubSection, getSubSubSection } from '../../services/Firebase/FireStore/Section'
import { useParams } from 'react-router-dom'



function Quiz() {
  const [questions, setQuestions] = useState(["makan","makan","makan","makan","makan","makan","makan","makan"])
  const {sectionId} = useParams();
  const [sectionName, setSectionName] = useState('');
  const [subSectionName, setSubSectionName] = useState('');
  const [subSubSectionName, setSubSubSectionName] = useState('');
  const [listSubSection, setListSubSection] = useState([]);
  const [listSubSubSection, setListSubSubSection] = useState([]);
  const [listQuestion, setListQuestion] = useState([]);
  const [subSectionState, setSubSectionState] = useState(0);
  const [subSubSectionState, setSubSubSectionState] = useState(0);
  const [questionState, setQuestionState] = useState(0)
  const [loading, setLoading] = useState(true);

  const indicatorWidth = () => {
    const totalQuestions = listQuestion.length;
    const totalMargin = totalQuestions * 10;
    const totalWidth = 1200-totalMargin;
    const width = totalWidth/totalQuestions;
    return width
  }

  useEffect(() => {
    getQuestionData();
    
  },[subSubSectionState])

  const getQuestionData = async() => {
    getSubSection(sectionId).then((result)=> {
      const sectionName = result.name;
      const subSection = result.subSection;
      setSectionName(sectionName)
      setListSubSection(subSection);
      console.log(result)
      getSubSubSection(subSection[subSectionState]).then((res) => {
        const subSectionName = res.name;
        const subSubSection = res.subSubSection;
        setSubSectionName(subSectionName)
        setListSubSubSection(subSubSection)
        console.log(res)
        getQuestions(subSubSection[subSubSectionState]).then((quest)=> {
          const subSubSectionName = quest.name;
          const questions = quest.questions;
          setSubSubSectionName(subSubSectionName);
          console.log(quest)
          setListQuestion(questions);
          setLoading(false)
        }).catch((err) => console.log(err))
      }).catch((err) =>console.log(err))
    }).catch((err) => console.log(err))
  }

  const handleNextClick = async() => {
    const currentQuestion = questionState;
    const questionLenght = listQuestion.length;
    if(currentQuestion+1 < questionLenght){
      setQuestionState(currentQuestion+1);
    }else{
      const currentSubSubSection = subSubSectionState;
      const subSubSectionLength = listSubSubSection.length;
      if(currentSubSubSection+1 < subSubSectionLength){
        await setSubSubSectionState(currentSubSubSection+1);
        // await getQuestionData();
        setLoading(true);
        setQuestionState(0);
      }else{

      }
    }
  }

  return (
    <div className='quiz-page'>
        <Navbar/>
        {!loading&&(
          <div className='quiz-container'>
          <div className='quiz-section-container'>
            <p className='quiz-section-text'>{sectionName} > {subSectionName} > {subSubSectionName}</p>
            <div className='quiz-indicator-container'>
            {listQuestion.length>0&&(<>
            
              {listQuestion.map((question,index) => {
                return(
                <span className={questionState>=index?'quiz-indicator-item active':'quiz-indicator-item'} style={{width:indicatorWidth()}}></span>
                )
              })}
            </>)}
           </div>
          </div>
          
          <div className='question-container'>
              <Question 
                type={listQuestion[questionState].type} 
                question={listQuestion[questionState]}
                onClick = {handleNextClick}
                />
          </div>
        </div>
        )}
        
    </div>
  )
}

export default Quiz