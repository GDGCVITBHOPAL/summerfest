import React from 'react'
import Contact from "../../components/Contact"

const ContactPage = () => {
  return (
    <div className={'section'}>
            <div className={'section-page-container'}>
                <div className={'section-content-container'}>
                    <div className={'section-header'}>Contact Us</div>
                    <p className={'speaker-intro'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <div className={"speakers"}><Contact /></div>
                </div>
            </div>
        </div>
  )
}

export default ContactPage