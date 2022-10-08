import taylor from "../images/tayler5.jpg";
import "../styles/taylor.css";
import Sage from "./Sage";
import Slide from 'react-reveal/Slide';


export default function Taylor() {
  return (
    <div className="taylor-section"id="therapist">
    
      
    

      <div className="structure-taylor-page">
      
        <img className="taylor-pic" src={taylor} />
        
        
        <div className="all-descriptions">
          
          <h1 className="taylor-title">
        Meet the Therapist
      </h1>
          <div className="all-descriptions">
          <p className="tayler-description">
            My name is Tayler Schenkeveld. I am a Métis woman and professionally
            trained Art Therapist practicing in Calgary, AB. In 2015, I
            completed my Bachelor of Arts with a major in Native Studies. I then
            carried on to receive a masters-level diploma from the Kutenai Art
            Therapy Institute. It was there that I developed my unique approach
            to art therapy. I work from an Indigenous and relational lens, often
            integrating traditional healing ways and art forms into the
            sessions, such as using storytelling, beadwork, smudging, and even
            attending ceremony with my clients. I strive to create safe and
            sacred space for all peoples to heal and grow.
          </p>
          <p className="tayler-initiation">
            Sage and Cedar Art Therapy was established in late 2019 with a goal
            and mission to provide more culturally appropriate therapy to the
            community. The name emerged as I thought about the healing benefits
            that both traditional medicines, Sage and Cedar, provide and the
            parallels it serves in my Art Therapy practice.
          </p>
          <p className="tayler-description">
            Sage and Cedar. Two words, packed with meaning. Sage is a
            traditional Indigenous medicine that when smudged (burned ) helps
            cleanse the mind, body and soul. It allows for one to be better able
            to hear, see, think, speak and act in a better, more centered way.
            Just like sage, the practice of art therapy helps clients find their
            new beginnings.**
          </p>
          <p className="tayler-description">
            Cedar is used for both protection and restoration moving forward. My
            hope is that my clients feel the power of Cedar in and out of their
            Art Therapy session
          </p>
          </div>
        </div>
       
      </div>
    </div>
  );
}
