import React, { useState } from "react";

import "./Dashboard.css";
import Navbar from "../../component/NavBar/Navbar";
import IdeaCard from "../../component/IdeaCard/IdeaCard";
import Modal from "../../component/Modal/Modal";
import CreateBusinessModal from "./CreateBusinessModal/CreateBusinessModal";

function Dashboard() {
  const listProject = [
    "New Project",
    "Idea Keren",
    "keren banget",
    "awesome project",
    "100M Idea",
    "copy pates",
  ];

  const [businessName, setBusinessName] = useState();
  const [businessIdea, setBusinessIdea] = useState();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  }
  return (
    <div className="dashboard-page">
      <Navbar />
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
  );
}

export default Dashboard;
