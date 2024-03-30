import { Link } from 'react-router-dom'
import { routes } from '../Components/utils/routes'
import { useContextGlobal } from './utils/ContextGlobal'
import '../Style/Estilos.css'
import DH from "../Images/DH.png";

const Navbar = () => {
  const {state, toggleTheme} = useContextGlobal();

  return (
    <nav className={`navbar ${state.theme}`}> 
        <img src={DH} alt='DH-logo' width={'200px'}/>     
        <Link to={routes.home}><h4>Inicio</h4></Link>       
        <Link to={routes.favs}><h4>Favoritos</h4></Link>
        <Link to={routes.contact}><h4>Contacto</h4></Link>      
        <button className="theme-toggle" onClick={toggleTheme}> 🌙 </button>
    </nav>
  )
}

export default Navbar