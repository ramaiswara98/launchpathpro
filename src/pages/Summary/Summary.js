import React, { useEffect, useState } from 'react'

import './Summary.css'
import Navbar from '../../component/NavBar/Navbar'
import SummaryCard from './SummaryCard/SummaryCard'
import Button from '../../component/Button/Button'
import { useParams } from 'react-router-dom'
import { Constant } from '../../utils/Constant'
import { getProjectById } from '../../services/Firebase/FireStore/Project'
import Loading from '../../component/Loading/Loading'

function Summary() {
    const {projectId,sectionId} = useParams();
    const section = Constant[sectionId];
    const [project, setProject] = useState();
    const [listData, setListData] = useState([]);
    const [currentSubSection, setCurrentSubSection] = useState(0)
    const [loading, setLoading] = useState(true);
    const [currentSubSubSectionList, setCurrentSubSUbSectionList] = useState([]);

    useEffect(()=> {
        getProjectByIds(projectId);
        
    },[])

    // useEffect(() => {
    //     getSubSubSection();
    // },[currentSubSection])

    const getProjectByIds = async(projectId) => {
        getProjectById(projectId).then((result)=>{
          setProject(result);
          getListData(result);
          
        
          setLoading(false);
        }).catch((err) => {
          setProject(err);
        })
      }

      const getListData = (dataProject) => {
        if(section.id === 'ideaGeneration'){
            const data = dataProject[section.id];
            console.log(dataProject[section.id])
            setListData(data);
        }else if(section.id === 'ideaValidation'){
            const data = dataProject[section.id];
            setListData(data);
            getSubSubSection(0,data);
        }
        
      }

      const getSubSubSection = (index,listDatas) => {
        const currentSubSectionId = Object.keys(listDatas[index])[0];
        const subSubSectionList = listDatas[index][currentSubSectionId];
        console.log(subSubSectionList)
        setCurrentSubSUbSectionList(subSubSectionList);
      }
      const getSubSubSectionManual = (index) => {
        const currentSubSectionId = Object.keys(listData[index])[0];
        const subSubSectionList = listData[index][currentSubSectionId];
        console.log(subSubSectionList)
        setCurrentSubSUbSectionList(subSubSectionList);
      }

  return (
    <div className='summary-page'>
        <Navbar/>
        {!loading?(<>
            <div className='summary-container'>
            <p className='bold-small'>Summary</p>
            <p className='summary-section-title'>{section.name}</p>
            {section.id !== 'ideaGeneration'?(<>
                <div className='sub-section-container'>
                    {listData.map((subSection, index) => {
                        return(
                            <div className='sub-section-item' onClick={()=>{setCurrentSubSection(index);getSubSubSectionManual(index)}}>
                                <p className={currentSubSection === index ?'sub-section-item-text active':'sub-section-item-text'}>{Constant[Object.keys(subSection)]}</p>
                                <div className={currentSubSection === index ?'sub-section-item-indicator active':'sub-section-item-indicator'}></div>
                            </div>
                        )
                    })}
                    </div>
            
            </>):(<></>)}
            
            <div className='summary-card-list'>
                {sectionId === 'ideaGeneration'&&(<>
                    {listData.length>0&&(
                        <>
                        {listData.map((data,index) => {
                            return(
                                <SummaryCard data={data}/>
                            )
                        })}
                        </>
                    )}
                    </>
                )}
                {sectionId !== 'ideaGeneration'&&(
                    <>
                    {currentSubSubSectionList.length>0&&(
                        <>
                        {currentSubSubSectionList.map((subSubSection,index) => {
                            
                            return(
                                <>
                                    <p className='sub-sub-section-title'>{Constant[Object.keys(subSubSection)]}</p>
                                    {subSubSection[Object.keys(subSubSection)].map((question,index) => {
                                        return(
                                            <SummaryCard data={question}/>
                                        )
                                    })}
                                </>
                            )
                        })}
                        </>
                    )}
                    </>
                )}
                
            </div>
            <div className='summary-button-container'>
                <Button
                    type={'alternate'}
                    text={'Retake'}
                />
                <div className='space'>

                </div>
                <Button
                    type={'primary'}
                    text={'Download as PDF'}
                />
            </div>
           
        </div>
        </>):(

            <Loading/>
        )}
        
    </div>
  )
}

export default Summary