import React, { useEffect, useState } from 'react'

import './Quiz.css'
import Navbar from '../../component/NavBar/Navbar'
import Question from '../../component/Question/Question'
import { getQuestions, getSubSection, getSubSubSection } from '../../services/Firebase/FireStore/Section'
import { useParams } from 'react-router-dom'
import Loading from '../../component/Loading/Loading'
import { updateProject } from '../../services/Firebase/FireStore/Project'



function Quiz() {
  const {sectionId,projectId} = useParams();
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
  const [answer, setAnswer] = useState('');
  const [listAnswer, setListAnswer] = useState([]);
  const [listAnswerSubSubSection, setListAnswerSubSubSection] = useState([]);
  const [listAnswerSubSection, setListAnswerSubSection] = useState([]);

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

  const addAnswerToList = () => {
    const currentAnswer = answer;
      const arrayAnswer = listAnswer;
      const currentQuestion = questionState;
      arrayAnswer.push({
        question:listQuestion[currentQuestion].question,
        answer:currentAnswer
      })
      setListAnswer(arrayAnswer);
      setAnswer('')
  }

  const addToSubSubSection = () => {
    const subSubSection = {}
    subSubSection[listSubSubSection[subSubSectionState]]=listAnswer
    const arraySubSubSection = listAnswerSubSubSection;
    arraySubSubSection.push(subSubSection);
    setListAnswerSubSubSection(arraySubSubSection);
    setListAnswer([]);
  }

  const addToSubSection = () => {
    const subSection = {}
    subSection[listSubSection[subSectionState]] = listAnswerSubSubSection;
    const arraySubSection = listAnswerSubSection;
    arraySubSection.push(subSection);
    setListAnswerSubSection(arraySubSection);
    setListAnswerSubSubSection([]);
  }


  const handleNextClick = async() => {
    const currentQuestion = questionState;
    const questionLenght = listQuestion.length;
    if(currentQuestion+1 < questionLenght){
      setQuestionState(currentQuestion+1);
      addAnswerToList();
    }else{
      addAnswerToList();
      addToSubSubSection();
      const currentSubSubSection = subSubSectionState;
      const subSubSectionLength = listSubSubSection.length;
      if(currentSubSubSection+1 < subSubSectionLength){
        await setSubSubSectionState(currentSubSubSection+1);
        setLoading(true);
        setQuestionState(0);
      }else{
        addToSubSection();
        
        const currentSubSection = subSectionState;
        const subSectionLength = listSubSection.length;
        if(currentSubSection+1 < subSectionLength){
          await setSubSectionState(currentSubSection+1);
          await setSubSubSectionState(0);
          setLoading(true);
          setQuestionState(0);
        }else{
          const data={}
          data[sectionId]=listAnswerSubSection
          updateProject(data,projectId).then((result) => {
            alert("Idea has been validate")
          }).catch((err) => {
            console.log(err)
          })
          
          console.log(data);
        }
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
                value={answer}
                onChange={setAnswer}
                />
          </div>
        </div>
        )}
        {loading&&(<Loading/>)}
        
    </div>
  )
}

export default Quiz