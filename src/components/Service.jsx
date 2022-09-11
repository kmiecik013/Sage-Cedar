
import "../styles/services.css";
import individual from '../images/individual.jpeg';
import group from '../images/group.jpeg';
import Card from "./Card";





export default function Service() {

  return (
    <div className="service-section" id="service">
      <h1 className="service-title">Offerings</h1>

      <div className="cards-structure">
    <Card
      imgUrl={individual} 
      title="Individual Sessions"
      body="Individual art therapy sessions are great for those who need the time and space to process their thoughts, feelings, and emotions with the one-on-one support of the art therapist.
      This can lead to in-depth personal insights and resolution." 
      />

    <Card
      imgUrl ={group}
      title ="Group Sessions"
      body= "Group art therapy can help individuals feel supported and normalized as they work through their emotions. The groups are held in safe and sacred space so that all peoples can heal and grow. Scroll for the upcoming groups being offered." />
    </div>
    <div className="future-sess">
      <h2 className="upcoming-sess-title">Upcoming Groups</h2>
      <h2 className="service-bottom-note">All groups have been postponed until further notice</h2>
    </div>
   
  </div>
      
    
  );
}

function SpecificService() {
  return (
    <div>
    <h1>Hello i'm here</h1>
    </div>
  )
  }