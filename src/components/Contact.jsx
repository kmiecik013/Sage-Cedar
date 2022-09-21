import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";
import ContactInfo from "./ContactInfo";
import Slide from 'react-reveal/Slide';

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
  }, 3000);

  return (
    <div id="contact">
      <Slide bottom>
      <div className="contact-one">
        <form className="form-structure" ref={form} onSubmit={sendEmail}>
          <h1 className="contact-main-title">Contact</h1>
          <div className="subtitles">
          <h1 className="contact-subtitle1">
            Ready to take the next step? </h1>
            <h1 className="subtitle2">Send us a message
          </h1>
          </div>
          <div className="more-structure">
            <div className="contact-methods-left">
              <div className="specific-contact-method left">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Your Name"
                  className="input"
                />
              </div>
              <div className="specific-contact-method left">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="input"
                />
              </div>
              <div className="specific-contact-method left">
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone Number"
                  className="input"
                />
              </div>
              <input type="submit" value="Send" className="submit-button" />
            </div>
            <div className="message-box2 right">
              <textarea
                name="message"
                className="message-box"
                placeholder="Your Message"
              />

              <div className="send-and-result">
                <div className="result-text">{result ? <Result /> : null}</div>
                
                
              </div>
            </div>
          </div>
        </form>
      </div>
      </Slide>
    </div>
  );
}
