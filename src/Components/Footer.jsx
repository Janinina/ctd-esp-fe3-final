import React from 'react'
import DH from "../Images/DH.png";
import icofacebook from '../Images/icofacebook.png'
import icoinstagram from '../Images/icoinstagram.png'
import icotiktok from '../Images/icotiktok.png'
import icowhatsapp from '../Images/icowhatsapp.png'
import '../Style/Estilos.css'

const Footer = () => {
  return (
    <footer className='footer'>   
        <p>Powered by</p>
        <img src={DH} alt='DH-logo' />
        <a href="https://www.facebook.com"><img src={icofacebook} alt="fb" className="redes" /></a>
        <a href="https://www.instagram.com"><img src={icoinstagram} alt="ig" className="redes" /></a>
        <a href="https://www.tiktok.com"><img src={icotiktok} alt="tk" className="redes" /></a>
        <a href="https://www.whatsapp.com/?lang=es_LA"><img src={icowhatsapp} alt="wsp"className="redes"/></a> 
    </footer>
  )
}

export default Footer
