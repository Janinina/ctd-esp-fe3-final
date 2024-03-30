import { Route, Routes } from "react-router-dom";
import { routes } from './Components/utils/routes';
import { useContextGlobal } from "./Components/utils/ContextGlobal";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from './Routes/Home';
import Favs from './Routes/Favs';
import Detail from './Routes/Detail';
import Contact from './Routes/Contact';
import './Style/Estilos.css'

function App() {
  const {state} = useContextGlobal();
  return (
      <div className={`App ${state.theme}`}>
          <Navbar/>
          <Routes> 
            <Route path={routes.home} element={<Home/>}/>
            <Route path={routes.favs} element={<Favs/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path={routes.contact} element={<Contact/>}/>            
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
