import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";

import '../styles/CSS/App.css';
import LogoLong from '../assets/Logo_Totalplay_long.svg';
import Img_Gadgets from '../assets/Totalplay_gadgets.png';

import plans_img from '../assets/Plans_complete.png';
import plan_150 from '../assets/Plan_150mb.png';
import plan_250 from '../assets/Plan_250mb.png';
import plan_350 from '../assets/Plan_350mb.png';

import award_img from '../assets/Award.png';
import avatar from '../assets/user_icon.png';

import awards_img from '../assets/Award_icons.png';
import PROFECO from '../assets/PROFECO.png';
import awardsAndProfeco from '../assets/Awards&PROFECO.png';
import carouselAds from '../assets/carousselAds.png';
import carouselPlans from '../assets/carousselPlans.png';

export default function App() {

  return (
    <>
    {/* HEADER, uses _header.scss for styles */}
      <div id='header'>
        {/* <div id='header-top-desktop' style={{display: 'none'}}>El internet mas premiado de México VER PAQUETES</div> */}
        <div id='header-top-mobile'>
          <div id='header-top-icons' className='row align-items-center'>
            <div className='col'>
              <img src={awardsAndProfeco} className='img-fluid'></img>
            </div>
            
          </div>
          <div id='header-top-text'>
            <button type='button' className='btn btn-link'>Descarga la App Totalplay y contrata ahora<i className='bi bi-chevron-right'></i></button>
          </div>
          
        </div>
        <div id='header-bottom-mobile' className='toolbar'>
          <div className='row align-items-center' id='threeItems'>
            {/* HAMBURGER MENU START */}
            <div className='col' id='hamburgerMenu'>
              
              <button className="btn btn-no" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTP" aria-controls="offcanvasExample">
                <i className='bi bi-list'></i>
              </button>

              <div className="offcanvas offcanvas-start" id="offcanvasTP" aria-labelledby="offcanvasLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasLabel">Totalplay</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul id='offcanvas_options'>
                  <li><a href="#">Nuestras ventajas</a></li>
                  <li><a href="#">Paquetes</a></li>
                  <li><a href="#">Soporte</a></li>
                  <li><a href="#">Servicios</a></li>
                </ul>
              </div>
            </div>
            </div>
            {/* HAMBURGER MENU END */}
            <div className='col'>
              <img src={LogoLong} className='img-fluid'></img>
            </div>
            <div className='col d-flex justify-content-end' id='avatarIcon'>
              <img src={avatar} className='img-fluid'></img>
            </div>
          </div>
          <div className='row align-items-center' id='dropdownAndImg'>
            {/* DROPDOWN START */}
            <div className='dropdown col' id='dropdownCity'>
              <button type="button" className="btn btn-dropdown dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Ciudad de México<i className='bi bi-chevron-down'></i>
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Puebla</a></li>
                <li><button className="dropdown-item" type="button">Estado de México</button></li>
                <li><button className="dropdown-item" type="button">Monterrey</button></li>
              </ul>
            </div>
            {/* DROPDOWN END */}
            <div className='col'>
              <img src={PROFECO} className='img-fluid'></img>
            </div>
          </div>
        </div>
      </div>

      {/* BODY, uses _content.scss for styles */}
      <div id='body'>
        <div id='body-section-ads'>
          <h1>No te pierdas ni un solo momento del Juego con el internet de Totalplay</h1>
          <img src={Img_Gadgets} className='img-fluid'></img>
          <button className='btn btn-dark btn-lg rounded-pill'>Ver paquetes<i className='bi bi-chevron-right'></i></button>
          <p>Cuando el partido importa, la conexión también: cada jugada, sin interrupciones</p>
          <div>
            <img src={carouselAds}></img>
          </div>
        </div>
        <div id='body-section-plans'>
          <h1>Nuestros planes más vendidos</h1>
          {/* <img src={plans_img} className='img-fluid'></img> */}
          <div id='carousel'>
            <img src={plan_150} className='img-fluid'></img>
            <img src={plan_250} className='img-fluid'></img>
            <img src={plan_350} className='img-fluid'></img>
          </div>
          <div>
            <img src={carouselPlans}></img>
          </div>
          <button className='btn btn-primary btn-lg rounded-pill'>Explorar más paquetes</button>
        </div>
        <div id='body-section-comments'>
          <h1>Más de 10 millones confían en nosotros</h1>
          <div id='comments-names'>
            <button className='btn btn-dark rounded-pill'>Ángelica</button>
            <button className='btn btn-otherOption rounded-pill'>Nery</button>
            <button className='btn btn-otherOption rounded-pill'>Ivonne</button>
            <button className='btn btn-otherOption rounded-pill'>Jose Jair</button>
          </div>
          <div id='comments-stars'>
            <i className='bi bi-star-fill'></i>
            <i className='bi bi-star-fill'></i>
            <i className='bi bi-star-fill'></i>
            <i className='bi bi-star-fill'></i>
            <i className='bi bi-star-fill'></i>
          </div>
          <div id='comments_text'>
            <p>Tengo más de 10 años @totalplaymx y si bien no es barato durante todos estos años ha sido el mejor servicio de todos. He tenido 2 fallas en 10 años y el soporte siempre fue muy rápido.</p>
          </div>
        </div>
        <div id='body-section-awards'>
            <h1>Totalplay tiene la red fija más rápida de México, avalado por Ookla speedtest* y NPerf</h1>
            <img src={awards_img}></img>
            <p>*Análisis realizado por Ookla ® de los datos de Speedtest intelligence ® para Q2-Q3 2024.</p>
          </div>
      </div>
    </>
  )
}
