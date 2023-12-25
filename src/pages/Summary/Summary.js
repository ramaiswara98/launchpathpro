import React, { useEffect, useState } from 'react'

import './Summary.css'
import Navbar from '../../component/NavBar/Navbar'
import SummaryCard from './SummaryCard/SummaryCard'
import Button from '../../component/Button/Button'
import { useParams } from 'react-router-dom'
import { Constant } from '../../utils/Constant'
import { getProjectById } from '../../services/Firebase/FireStore/Project'
import Loading from '../../component/Loading/Loading'
import { PDFDownloadLink } from '@react-pdf/renderer'
import PdfView from '../../component/PdfView/PdfView'
import useFirebaseAuth from '../../hook/useFirebaseAuth'

function Summary() {
    const {projectId,sectionId} = useParams();
    const section = Constant[sectionId];
    const [listData, setListData] = useState([]);
    const [currentSubSection, setCurrentSubSection] = useState(0)
    const [loading, setLoading] = useState(true);
    const [currentSubSubSectionList, setCurrentSubSUbSectionList] = useState([]);
    // eslint-disable-next-line
    const [blobs, setBlobs] = useState();
    // eslint-disable-next-line
    const [pdfReady,setPdfReady] = useState(false);
    const {user, type, userFireStore} = useFirebaseAuth();

    useEffect(()=> {
        getProjectByIds(projectId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    const getProjectByIds = async(projectId) => {
        getProjectById(projectId).then((result)=>{
          getListData(result);
          setLoading(false);
        }).catch((err) => {
        })
      }

      const getListData = (dataProject) => {
        if(section.id === 'ideaGeneration'){
            const data = dataProject[section.id];
            setListData(data);
        }else{
            const data = dataProject[section.id];
            setListData(data);
            getSubSubSection(0,data);
        }
        
      }

      const getSubSubSection = (index,listDatas) => {
        const currentSubSectionId = Object.keys(listDatas[index])[0];
        const subSubSectionList = listDatas[index][currentSubSectionId];
        setCurrentSubSUbSectionList(subSubSectionList);
      }
      const getSubSubSectionManual = (index) => {
        const currentSubSectionId = Object.keys(listData[index])[0];
        const subSubSectionList = listData[index][currentSubSectionId];
        setCurrentSubSUbSectionList(subSubSectionList);
      }
    
    const handleDownloadPDF = () => {
        if(pdfReady){
            if(userFireStore.type === "free"){
                alert("Your current plan not include this feature")
            }else{
                handleDownload();
            }
            
        }else{
            console.log("Makan")
        }
        
    }

    const handleDownload = () => {
        const blobUrl = window.URL.createObjectURL(blobs);
    
        const anchorElement = document.createElement('a');
        anchorElement.href = blobUrl;
        anchorElement.download = section.name+'.pdf'; // Replace 'myFile.pdf' with the desired filename
    
        anchorElement.click();
    
        window.URL.revokeObjectURL(blobUrl);
      };

      const handleRetake = () => {
        if(userFireStore.type === "free"){
            alert("Your current plan not include this feature")
        }else{
            window.location.href='/quiz/'+projectId+'/'+section.id
        }
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
                {section.id === 'ideaGeneration'&&(<>
                
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
                {section.id !== 'ideaGeneration'&&(
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
            {section.id !== 'ideaGeneration' &&(
                     <div className='summary-button-container'>
                     <Button
                         type={'alternate'}
                         text={'Retake'}
                         onClick={()=> {handleRetake()}}
                     />
                     <div className='space'>
     
                     </div>
                     <Button
                         type={'primary'}
                         text={'Download as PDF'}
                         onClick={handleDownloadPDF}
                     />
                     <div style={{display:'none'}}>
                    <PDFDownloadLink id='button1' document={<PdfView project={listData} section={section.name}/>} fileName='myNewPDF.pdf' >
                        {({blob, url, loading, error}) => {
                            setBlobs(blob)
                            setPdfReady(!loading);

                        }}
                    </PDFDownloadLink>
                </div>
                     
                 </div>
                    )}
           
           
        </div>
        </>):(

            <Loading/>
        )}
        
    </div>
  )
}

export default Summary