import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Dashboard.css";
import Navbar from "../../component/NavBar/Navbar";
import IdeaCard from "../../component/IdeaCard/IdeaCard";
import Modal from "../../component/Modal/Modal";
import CreateBusinessModal from "./CreateBusinessModal/CreateBusinessModal";
import { getCurrentUser } from "../../services/Firebase/FireBaseAuth/AuthWithEmail";
import { addProject, getProjectByUID } from "../../services/Firebase/FireStore/Project";
import Loading from "../../component/Loading/Loading";
import useFirebaseAuth from "../../hook/useFirebaseAuth";
import { updateUser } from "../../services/Firebase/FireStore/User";

function Dashboard() {
  const navigate = useNavigate();
  const [projectList,setProjectList] = useState([]);
  const [showPage, setShowPage] = useState(false);
  const {user} = useFirebaseAuth();
  const [currentUser, setCurrentUser] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessIdea, setBusinessIdea] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [buttonState,setButtonState] = useState(false);
  useEffect(()=> {
    if(user !== null){
      getCurrentUserFromDB(user.uid);
    }else{
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[user])
  const toggleModal = () => {
    setShowModal(!showModal);
  }
  const getCurrentUserFromDB = async(uid)=>{
    const users = await getCurrentUser(uid);
    getProject(uid);
    setCurrentUser(users);
  }

  const getProject = (uid) => {
    getProjectByUID(uid).then((result) => {
      setProjectList(result)
      setLoading(false)
      setShowPage(true)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const handleStoreBusinessToDatabase = () => {
    const user = currentUser
    const project = {
      ideaGeneration:[{
        question:"Business Name",
        answer:businessName,
      },{
        question:"Business Idea",
        answer:businessIdea,
      }],
      uid:currentUser.uid
    }
    addProject(project, user).then((result)=> {
      const projectQuotas = currentUser.projectQuota;
      const newQuotas = projectQuotas-1;
      const data = {projectQuota:newQuotas}
      updateUser(currentUser.uid,data).then((res)=> {
        navigate('/project/'+result)
      })
      
    })
  }

  const handleCreateBusinsess = () => {
    const quota = currentUser.projectQuota;
    if(quota>0){
      toggleModal();
    }
  }
  return (
    <>
    {!loading?(<>
      {showPage&&(
      <div className="dashboard-page">
      <Navbar type={"login"}/>
      <div className="dashboard-centering">
        <div className="dashboard-container">
          <IdeaCard start={true} onClickStart={handleCreateBusinsess}/>
          {projectList.length > 0 ? (
            <>
              {projectList.map((project, index) => {
                return <IdeaCard project={project} onClickIdeaCard={()=>{navigate('/project/'+project.projectId)}}/>;
              })}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <Modal
        show={showModal}
      >
       <CreateBusinessModal
        toggle={toggleModal}
        setBusinessName={setBusinessName}
        setBusinessIdea={setBusinessIdea}
        businessName={businessName}
        businessIdea={businessIdea}
        handleStore = {handleStoreBusinessToDatabase}
        loading={buttonState}
        setLoading = {setButtonState}
       />
      </Modal>
    </div>
    )}
    
    </>):(<>
    <Loading/>
    </>)}
    
    </>
    
  );
}

export default Dashboard;
