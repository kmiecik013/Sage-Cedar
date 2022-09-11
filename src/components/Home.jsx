import background from "../images/background2.jpeg";
import blurpic from "../images/blur3.jpg";
import "../styles/home.css";
import SCtitle from './SCtitle'


export default function Home() {
  return (
    <div className="home-page" id="home">
      <div className="fade-in-text">
        <p>“I breathe in calmness, I breathe out stress”</p>
      </div>
        <SCtitle />
    </div>
  );
}
