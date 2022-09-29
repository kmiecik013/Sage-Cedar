import '../styles/acknowledgement.css'
import Slide from 'react-reveal/Slide';
import Sage from './Sage'

export default function Acknowledgement() {


  return (

    <div className="acknowledgement-note">
      <h1 className="ackno-title">Land  Acknowledgement</h1>
     
      <div className="acknowlegdment-description"> In the spirit of respect, reciprocity and truth, I honour and acknowledge Moh’kinsstis, and the traditional Treaty 7 territory and oral practices of the Blackfoot confederacy: Siksika, Kainai, Piikani, as well as the Îyâxe Nakoda and Tsuut’ina nations. I acknowledge that this territory is home to the Métis Nation of Alberta, Region 3 within the historical Northwest Métis homeland. Finally, I acknowledge all Nations – Indigenous and non – who live, work and play on this land, and who honour and celebrate this territory.</div>
      <Sage />
    </div>
  )
}