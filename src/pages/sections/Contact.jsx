import React from "react";
import Contact from "../../components/Contact";
import { ImWhatsapp } from "react-icons/im"
import { FiInstagram } from "react-icons/fi"
const ContactPage = () => {
  return (
    <div className={"section"}>
      <div className={"section-page-container"}>
        <div
          className={"section-content-container"}
          // Removed margin till we get sponsors ...
          style={{ marginTop: "0" }}
        >
          <div className={"section-header"}>Contact Us</div>
          <p className={"speaker-intro"}>
            In case of any help feel free to contact us {" "}
            <br />
            <a
                className={"social-icons-contact"}
                href="https://chat.whatsapp.com/IEZoFPagZYeJjULEj6TZU3"
                style={{ marginRight: "20px" , textDecoration: "none" }}
              >
           <span style={{fontSize:"1em" , color: "white"}}>Join Our Whatsapp</span> 
            
                <ImWhatsapp style={{marginLeft:"10px" , position:"relative" , top: "8px" , color: "white"}} size="25px"/>
              </a>

              <br />
              <a
                className={"social-icons-contact"}
                href="https://www.instagram.com/gdscvitbhopal/"
                style={{ marginRight: "20px" , textDecoration: "none" }}
              >
           <span style={{color: "white" , fontSize:"1em"}}>For latest updates don’t forget to follow us on instagram</span> 
            
                <FiInstagram style={{marginLeft:"10px" , position:"relative" , top: "8px" , color: "white"}} size="25px"/>
              </a>
            
          </p>
          <div className={"speakers"}>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
