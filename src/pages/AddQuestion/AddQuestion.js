import React, { useEffect, useState } from 'react'

import './AddQuestion.css'
import Input from '../../component/Input/Input'
import Button from '../../component/Button/Button'
import { addQuestion, getSubSubSection } from '../../services/Firebase/FireStore/subsubsection'

function AddQuestion() {
  const [listQuestion, setListQuestion] = useState([]);
  const [subSubSection, setSubSubSection] = useState();
  const [question, setQuestion] = useState('');
  const [type, setType] = useState('text-area');
  const [ssSection, setSSSection] = useState('breakEvenAnalysis');

  useEffect(() => {
    getSubSubSectionData(ssSection);
    console.log(subSubSection)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const getSubSubSectionData = (sssId) => {
   getSubSubSection(sssId).then((sSS) => {
    setSubSubSection(sSS);
    setListQuestion(sSS.questions);
    }).catch((err)=>{})
    
  }

  const handleAddButtonClick = () => {
    const questionList = listQuestion;

    const data = {
      index:questionList.length,
      question,
      type
    }
    
    questionList.push(data);
    addQuestion(ssSection,questionList).then((res) => {
      console.log("Success")
    })
    console.log(questionList)
    console.log(data)
  }
  return (
    <div style={{flexDirection:'column', display:'flex', alignItems:'center', justifyContent:'center'}}>
      <div style={{width:400, flexDirection:'column', display:'flex', alignItems:'center', justifyContent:'center'}}>
      <Input label={'Id Sub Sub Section'} value={ssSection} onChange={setSSSection}/>
      <Input label={'type'} value={type} onChange={setType}/>
      <Input label={'Question'} value={question} onChange={setQuestion}/>
      <br/>
      <Button text={"Add"} onClick = {handleAddButtonClick}/>
      </div>
        
    </div>
  )
}

export default AddQuestion