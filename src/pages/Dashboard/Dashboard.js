import React, { useEffect, useState } from "react";

import "./Dashboard.css";
import Navbar from "../../component/NavBar/Navbar";
import IdeaCard from "../../component/IdeaCard/IdeaCard";
import Modal from "../../component/Modal/Modal";
import CreateBusinessModal from "./CreateBusinessModal/CreateBusinessModal";
import { checkCurrentUser } from "../../services/Firebase/FireBaseAuth/AuthWithEmail";

function Dashboard() {
  const listProject = [
    "New Project",
    "Idea Keren",
    "keren banget",
    "awesome project",
    "100M Idea",
    "copy pates",
  ];
  const [showPage, setShowPage] = useState(false);
  useEffect(()=> {
    checkCurrentUser(setShowPage)
  },[])
 
  const [businessName, setBusinessName] = useState();
  const [businessIdea, setBusinessIdea] = useState();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  }
  return (
    <>
    {showPage&&(
      <div className="dashboard-page">
      
      <Navbar type={"login"}/>
      <div className="dashboard-centering">
        <div className="dashboard-container">
          <IdeaCard start={true} onClickStart={toggleModal}/>
          {listProject.length > 0 ? (
            <>
              {listProject.map((project, index) => {
                return <IdeaCard />;
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
       />
      </Modal>
    </div>
    )}
    </>
    
  );
}

export default Dashboard;
