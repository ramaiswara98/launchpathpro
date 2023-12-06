import React, { useEffect, useState } from 'react'

import './Summary.css'
import Navbar from '../../component/NavBar/Navbar'
import SummaryCard from './SummaryCard/SummaryCard'
import Button from '../../component/Button/Button'
import { useParams } from 'react-router-dom'
import { Constant } from '../../utils/Constant'
import { getProjectById } from '../../services/Firebase/FireStore/Project'

function Summary() {
    const {projectId,sectionId} = useParams();
    const section = Constant[sectionId];
    const [project, setProject] = useState();
    const [listData, setListData] = useState([]);
    useEffect(()=> {
        getProjectByIds(projectId)
    },[])

    const getProjectByIds = (projectId) => {
        getProjectById(projectId).then((result)=>{
          setProject(result);
          getListData(result)
        }).catch((err) => {
          setProject(err);
        })
      }

      const getListData = (dataProject) => {
        if(section.id === 'ideaGeneration'){
            const data = dataProject[section.id];
            console.log(dataProject[section.id])
            setListData(data);
        }
        
      }
  return (
    <div className='summary-page'>
        <Navbar/>
        <div className='summary-container'>
            <p className='bold-small'>Summary</p>
            <p className='summary-section-title'>{section.name}</p>
            {section.id !== 'ideaGeneration'?(<>
                <div className='sub-section-container'>
                    <div className='sub-section-item'>
                            <p className='sub-section-item-text active'>Nama Section</p>
                            <div className='sub-section-item-indicator active'></div>
                        </div>
                        <div className='sub-section-item'>
                            <p className='sub-section-item-text'>Nama Section</p>
                            <div className='sub-section-item-indicator'></div>
                        </div>
                        
                        <div className='sub-section-item'>
                            <p className='sub-section-item-text'>Nama Section</p>
                            <div className='sub-section-item-indicator'></div>
                        </div>
                    </div>
            
            </>):(<></>)}
            
            <div className='summary-card-list'>
                {listData.length>0&&(
                    <>
                    {listData.map((data,index) => {
                        return(
                            <SummaryCard data={data}/>
                        )
                    })}
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
    </div>
  )
}

export default Summary