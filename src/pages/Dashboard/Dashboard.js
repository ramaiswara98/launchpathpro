import React, { useEffect, useState } from "react";

import "./Dashboard.css";
import Navbar from "../../component/NavBar/Navbar";
import IdeaCard from "../../component/IdeaCard/IdeaCard";
import Modal from "../../component/Modal/Modal";
import CreateBusinessModal from "./CreateBusinessModal/CreateBusinessModal";
import { checkCurrentUser, getCurrentUser } from "../../services/Firebase/FireBaseAuth/AuthWithEmail";
import { addProject, getProjectByUID } from "../../services/Firebase/FireStore/Project";

function Dashboard() {
  const listProject = [
    "New Project",
    "Idea Keren",
    "keren banget",
    "awesome project",
    "100M Idea",
    "copy pates",
  ];
  const [projectList,setProjectList] = useState([]);
  const [showPage, setShowPage] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  useEffect(()=> {
    getCurrentUserFromDB();
    checkCurrentUser(setShowPage)
  },[])
 
  const [businessName, setBusinessName] = useState('');
  const [businessIdea, setBusinessIdea] = useState('');
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  }
  const getCurrentUserFromDB = async()=>{
    const user = await getCurrentUser();
    getProject(user.uid);
    setCurrentUser(user);
  }

  const getProject = (uid) => {
    getProjectByUID(uid).then((result) => {
      setProjectList(result)
    })
    .catch((err)=>{
      
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
    addProject(project, user)
  }

  const handleCreateBusinsess = () => {
    const quota = currentUser.projectQuota;
    if(quota>0){
      toggleModal();
    }
  }
  return (
    <>
    {showPage&&(
      <div className="dashboard-page">
      <Navbar type={"login"}/>
      <div className="dashboard-centering">
        <div className="dashboard-container">
          <IdeaCard start={true} onClickStart={handleCreateBusinsess}/>
          {listProject.length > 0 ? (
            <>
              {projectList.map((project, index) => {
                return <IdeaCard project={project}/>;
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
       />
      </Modal>
    </div>
    )}
    </>
    
  );
}

export default Dashboard;
