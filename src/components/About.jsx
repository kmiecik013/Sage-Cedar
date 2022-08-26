import sage2 from "../images/sage2.jpeg";
import Card from "react-bootstrap/Card";
import "../styles/about.css";

export default function About() {
  return (
    <div className="about-section"id="about">
      <div className="title-strcuture">
     <h2 className="art-subtitle">What is Art Therapy?</h2>
     </div>
      <div className="about-page-structure">
        

        
          
          <p className="art-therapy-description">
              Art Therapy is a therapeutic modality that uses the creative
              process of art making as a vehicle to improvement in ones
              physical, emotional, spiritual, and mental health. The process of
              creating art and reflecting on themes and metaphors with the help
              of the art therapist can bring forth inner thoughts and feelings
              that may otherwise be difficult to articulate in words. You do not
              have to be an artist to benefit from art therapy. In art therapy
              the emphasis is based on the process and self-expression, not the
              final product. Art therapy also aligns with the belief that
              everyone is innately creative.</p>
          <img className="sage-img" src={sage2} />
       
      </div>

    
    </div>
  );
}
