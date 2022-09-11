import { useState } from "react";
import Crisis from "./Crisis";
import "../styles/gethelp.css";

export default function GetHelp() {
  const [crisis, setCrisis] = useState(false);

  const showCrisis = (event) => {
    setCrisis(true);
  };

  const closeCrisis = (event) =>{
    setCrisis(false);
  }

  return (
    <div className="gel-help-button">
      <button className="main-get-help-button" onClick={showCrisis}>
        Get Help
      </button>
      <div className="crisis-popup">{crisis && <div><Crisis /><button onClick={closeCrisis} className="close-crisis">X</button></div>}</div>
    </div>
  );
}
