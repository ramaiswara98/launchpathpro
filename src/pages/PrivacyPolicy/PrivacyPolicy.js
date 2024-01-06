import React, { useState } from "react";

import "./PrivacyPolicy.css";
import Navbar from "../../component/NavBar/Navbar";
import { Constant } from "../../utils/Constant";
import Footer from "../../component/Footer/Footer";

function PrivacyPolicy() {
  const [active, setActive] = useState(0);

  const handleActiveMenu = (index) => {
    setActive(index);
  };

  return (
    <div className="privacy-policy">
      <Navbar />
      <div className="privacy-policy-container">
        <div className="privacy-policy-top-menu">
          <p
            className={active === 0 ? "item active" : "item"}
            onClick={() => {
              handleActiveMenu(0);
            }}
          >
            Privacy Policy
          </p>
          <p
            className={active === 1 ? "item active" : "item"}
            onClick={() => {
              handleActiveMenu(1);
            }}
          >
            Refund Policy
          </p>
        </div>
        <div className="rules-page">
          {active === 0 ? (
            <>
              <h3>Privacy Policy</h3>
              <p>
                LaunchPath Pro operates the LaunchPath Pro website to help user
                to turn their idea into a business. This page informs you of our
                policies regarding the collection, use, and disclosure of
                personal data when you use our Service and the choices you have
                associated with that data. We use your data to provide and
                improve the Service. By using the Service, you agree to the
                collection and use of information in accordance with this
                policy.
              </p>
              <h4>Information Collection and Use</h4>
              <p>
                We collect several different types of information for various
                purposes to provide and improve our Service to you.
              </p>
              <h4>Personal Data</h4>
              <p>
                While using our Service, we may ask you to provide us with
                certain personally identifiable information that can be used to
                contact or identify you ("Personal Data"). Personally
                identifiable information may include, but is not limited to:
              </p>
              <li>Email Address</li>
              <li>Full Name</li>
              <h4>Use of Data</h4>
              <p>We use the collected data for various purposes:</p>
              <li>To provide and maintain the Service</li>
              <li>To notify you about changes to our Service</li>
              <li>
                To allow you to participate in interactive features of our
                Service when you choose to do so
              </li>
              <li>To provide customer care and support</li>
              <li>
                To provide analysis or valuable information so that we can
                improve the Service
              </li>
              <li>To monitor the usage of the Service</li>
              <p>
                Any personal information received will only be used to fill your
                order or provide you a better user experience. We will not sell
                or redistribute your information to anyone.
              </p>
              <br />
              <br />
              <h4>LauncPath Pro</h4>
            </>
          ) : (
            <>
              <h3>Refund Policy</h3>
              <p>
                If you are not completely satisfied with your purchase, you have
                60 days from the date of purchase to request a full refund of
                the cost of your order. To claim your refund, please follow
                these steps:
              </p>
              <li>
                Send an email to{" "}
                <a href="mailto:ramaiswara0098@gmail.com">
                  ramaiswara098@gmail.com
                </a>{" "}
                with the subject line: "REFUND REQUEST [YOUR REGISTERED EMAIL]".
              </li>
              <li>
                In the email, provide details such as your email, full name,
                selected plan and the reason for your refund request.
              </li>
              <p>
                Once we receive your refund request email with the necessary
                information, we will process your refund immediately.
              </p>
              <h4>LaunchPath Pro</h4>
            </>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default PrivacyPolicy;
