import "../styles/contact.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { IoMapSharp } from "react-icons/io5";

export default function ContactInfo() {
  return (
    <div className="column-organization">
      <div className="name-pic-pair">
        <FaPhoneAlt className="left-tag" />
        <p className="info-text phone-number">(416) 570 9210</p>
      </div>
      <div className="name-pic-pair">
        <MdEmail className="left-tag" />
        <p className="info-text sage-email">sageandcedar.arttherapy@gmail.com</p>
      </div>
      <div className="name-pic-pair">
        <IoMapSharp className="left-tag" />
        <p className="info-text">Calgary, Alberta, Canada </p>
      </div>
      <div className="social-media-tags">
        <a
          href="https://www.instagram.com/sageandcedar.arttherapy/?hl=en"
          className="sm-tag"
        >
          <BsInstagram />
        </a>
        <a
          href="https://www.facebook.com/sageandcedararttherapy/"
          className="sm-tag"
        >
          <BsFacebook />
        </a>
        <a
          href="https://twitter.com/intent/tweet?related=wordpressdotcom&text=Contact&url=https%3A%2F%2Fsageandcedararttherapy.com%2Fcontact%2F"
          className="sm-tag"
        >
          <BsTwitter />
        </a>
      </div>
    </div>
  );
}
