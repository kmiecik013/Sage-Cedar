
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Service from './components/Service';
import Contact from './components/Contact';
import Crisis from './components/Crisis';
import Navbar from './components/Navbar';
import Taylor from './components/Taylor';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCoffee} from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';



function App() {
  return (

    <div>
<Button>My Button</Button>

<FontAwesomeIcon icon={faCoffee} classsName="Coffee-icon"></FontAwesomeIcon>
<FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
<FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>


    <Header />
    <Navbar />
    <About />
    <Service />
    <Taylor />
    
    <Contact />
    <Footer />
    <Crisis />
   

    

    <h1> Hello  </h1>

  

    </div>
  );
}

export default App;
