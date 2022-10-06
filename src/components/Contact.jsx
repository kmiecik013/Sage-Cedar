import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";
import ContactInfo from "./ContactInfo";
import Slide from 'react-reveal/Slide';
import Sage from './Sage';

const Result = () => {
  return (
    <p> Your message has been successfully sent. I will contact you soon! </p>
  );
};

export default function Contact() {
  const form = useRef();

  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j3zhrxq",
        "template_yzvaspq",
        form.current,
        "jQJ_duO8lZL-VTV4o"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    showResult(true);
  };

  setTimeout(() => {
    showResult(false)
  }, 7000);

  return (
    <div id="contact">
      <div className="contact-one">
        <form className="form-structure" ref={form} onSubmit={sendEmail}>
          <h1 className="contact-main-title">Contact</h1>
          <div className="subtitles">
          <h1 className="contact-subtitle1">
            Ready to take the next step? </h1>
            <h1 className="subtitle2">Send us a message!
          </h1>
          </div>
          <div className="more-structure">
            <div className="contact-methods-left">
              <div className="specific-contact-method left">
                <input
                  type="text"
                  name="fullName"
                  placeholder="First & Last Name"
                  className="input"
                />
              </div>
              <div className="specific-contact-method left">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input"
                />
              </div>
              <div className="specific-contact-method left">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="input"
                />
              </div> 
              
              <input type="submit" value="Submit" className="submit-button submit-position1" />
             
            </div>
            <div className="message-box2 right">
              <textarea
                name="message"
                className="message-box"
                placeholder="Message"
              />
              <div className="result-text result1">{result ? <Result /> : null}</div>
              </div>
              
            </div>
              <div className="send-and-result"> 

              <input type="submit" value="Submit" className="submit-button submit-position2" />
              <div className="result-text result2">{result ? <Result /> : null}</div>
            
               
                
            </div>
           
        </form>
       <Sage />
      </div>
    
    </div>
  );
}
