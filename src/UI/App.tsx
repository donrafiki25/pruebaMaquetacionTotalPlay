import '../styles/CSS/App.css';
import LogoLong from '../assets/Logo_Totalplay_long.svg';
import Img_Gadgets from '../assets/Totalplay_gadgets.png';

export default function App() {

  return (
    <>
      <div id='header'>
        <div id='header-top'>El internet mas premiado de México VER PAQUETES / Descarga la App Totalplay y contrata ahora</div>
        <div id='header-bottom' className='toolbar'>
          <img src={LogoLong}></img>
        </div>
      </div>
      <div id='body'>
        <div id='body-section-carroussel'>
          <p>No te pierdas ni un solo momento del Juego con el internet de Totalplay</p>
          <img src={Img_Gadgets}></img>
          <p>Cuando el partido importa, la conexión también: cada jugada, sin interrupciones</p>
        </div>
        <div id='body-section-plans'>
          Nuestros planes más vendidos
        </div>
        <div id='body-section-comments'>
          USERS
        </div>
      </div>
      {/* <div id='footer'></div> */}
    </>
  )
}
