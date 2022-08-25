import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";
import ContactInfo from "./ContactInfo";

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

  return (
    <div>
      <div className="contact-one">

        
        
        <form className="form-structure" ref={form} onSubmit={sendEmail}>
      <h1 className="contact-subtitle">Ready to take the next step? Send us a message</h1>
          <div className="more-structure">
         
          <div className="contact-methods-left">
            <div className="specific-contact-method left">
           
              <input 
                type="text" 
                name="fullName"
                placeholder="Your Name" 
                className="input" />
            </div>
            <div className="specific-contact-method left">
              
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                className="input" />
            </div>
            <div className="specific-contact-method left">
              
              <input 
                type="text" 
                name="phone"
                placeholder="Your Phone Number" 
                className="input" />
            </div>
          </div>
          <div className="specific-contact-method right">
            
            <textarea 
              name="message"
              className="message-box"
              placeholder="Your Message" />

            <div className="send-and-result">
            <input 
              type="submit" 
              value="Send" 
              className="submit-button" />
            <div className="result-text">{result ? <Result /> : null}</div>
            </div>
          </div>
 <ContactInfo />
          </div>
        </form>

      </div>
    </div>
  );
}
