import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import '../styles/CSS/App.css';
import LogoLong from '../assets/Logo_Totalplay_long.svg';
import Img_Gadgets from '../assets/Totalplay_gadgets.png';
import plans_img from '../assets/Plans_complete.png';
import award_img from '../assets/Award.png';
import avatar from '../assets/user_icon.png';

import awards_img from '../assets/Award_icons.png';
import PROFECO from '../assets/PROFECO.png';

export default function App() {

  return (
    <>
      <div id='header'>
        {/* <div id='header-top-desktop' style={{display: 'none'}}>El internet mas premiado de México VER PAQUETES</div> */}
        <div id='header-top-mobile'>
          <div id='header-top-icons' className='row align-items-center'>
            <div className='col align-self-center'>
              <img src={PROFECO} className='img-fluid'></img>
            </div>
            <div className='col align-self-center'>
              <img src={awards_img} className='img-fluid'></img>
            </div>
          </div>
          <div id='header-top-text'>
            <button type='button' className='btn btn-link'>Descarga la App Totalplay y contrata ahora<i className='bi bi-chevron-right'></i></button>
          </div>
          
        </div>
        <div id='header-bottom-mobile' className='toolbar'>
          <div className='row align-items-center'>
            <div className='col'>
              <button className='btn btn-outline-primary'><i className='bi bi-list'></i></button>
            </div>
            <div className='col'>
              <img src={LogoLong} className='img-fluid'></img>
            </div>
            <div className='col d-flex justify-content-end' id='avatarIcon'>
              <img src={avatar} className='img-fluid'></img>
            </div>
          </div>
          <div className='row align-items-center'>
            {/* DROPDOWN START */}
            <div className='dropdown col'>
              <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><button className="dropdown-item" type="button">Another action</button></li>
                <li><button className="dropdown-item" type="button">Something else here</button></li>
              </ul>
            </div>
            {/* DROPDOWN END */}
            <div className='col'>
              <img src={PROFECO} className='img-fluid'></img>
            </div>
            
          </div>
          
        </div>
      </div>
      <div id='body'>
        <div id='body-section-ads'>
          <h1>No te pierdas ni un solo momento del Juego con el internet de Totalplay</h1>
          <img src={Img_Gadgets} className='img-fluid'></img>
          <button className='btn btn-dark btn-lg rounded-pill'>Ver paquetes<i className='bi bi-chevron-right'></i></button>
          <p>Cuando el partido importa, la conexión también: cada jugada, sin interrupciones</p>
        </div>
        <div id='body-section-plans'>
          <h1>Nuestros planes más vendidos</h1>
          <img src={plans_img} className='img-fluid'></img>
          <button className='btn btn-primary btn-lg rounded-pill'>Explorar más paquetes</button>
        </div>
        <div id='body-section-comments'>
          <h1>Más de 10 millones confían en nosotros</h1>
          {/* <img src={award_img}></img> */}
          USERS
        </div>
      </div>
      {/* <div id='footer'></div> */}
    </>
  )
}
