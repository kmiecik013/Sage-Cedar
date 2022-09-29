import "../styles/footer.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { IoMapSharp } from "react-icons/io5";
import PT from "../images/PT.png"

export default function Footer() {
  return (
    <div className="column-organization">
      <div className="main-contact">
      
      
      <div className="name-pic-pair">
        <IoMapSharp className="left-tag" />
        <p className="info-text">Calgary, Alberta, Canada </p>
      </div>
      <div className="name-pic-pair name-pic-pair-email">
        <MdEmail className="left-tag" />
        <p className="info-text sage-email">sageandcedar.arttherapy@gmail.com</p>
      </div>
      <div className="name-pic-pair">
        <FaPhoneAlt className="left-tag" />
        <p className="info-text phone-number">(416) 570 9210</p>
      </div>
      
      </div>
      <div className="social-media-tags">
        <a
          href="https://www.instagram.com/sageandcedar.arttherapy/?hl=en"target="_blank"
          className="sm-tag"
        >
          <BsInstagram />
        </a> 
        <a
          href="https://www.psychologytoday.com/ca/therapists/tayler-schenkeveld-indigenous-art-therapist-calgary-ab/722108"target="_blank"
          className="sm-tag"
        >
          <img className="psycology-pic" src={PT} />
        </a>
        <a
          href="https://www.facebook.com/sageandcedararttherapy/"target="_blank"
          className="sm-tag"
        >
          <BsFacebook />
        </a>
       
      </div>
      <h3 className="copywrite"> Copyright Sage and Cedar Art Therapy – All rights reserved </h3>
    </div>
  );
}
