import doctorImage from "../Images/doctor.jpg";
import { useContextGlobal } from "./utils/ContextGlobal";
import { Link, useLocation } from "react-router-dom";
import '../Style/Estilos.css'

const Card = ({ item }) => { 
  const {dispatch} = useContextGlobal()
  const location = useLocation()

  const addFav = () => {
    const favsItems = JSON.parse(localStorage.getItem('favs')) || []
    dispatch({type: 'ADD_FAVS', payload: item})
    localStorage.setItem('favs', JSON.stringify([...favsItems, item]))
  }

  const removeFav = (itemId) => {
    const favsItems = JSON.parse(localStorage.getItem('favs')) || [];
    const updatedFavs = favsItems.filter((fav) => fav.id !== itemId);
    localStorage.setItem('favs', JSON.stringify(updatedFavs));
  };

  return (
    <div className="card">
        <Link to={'/detail/' + item.id}><img src={doctorImage} alt="" style={{ width: '200px' }}/></Link>                 
        <h3>{item.name}</h3>       
        <h3>{item.username}</h3>
        <h3>{item.id}</h3>                  
        {
          !location.pathname.includes('favs') && (
          <button onClick={addFav} className="favButton">❤️</button>
        )}
        {
          location.pathname.includes('favs') &&
          <button onClick={() => {
            dispatch({ type: 'DELETE_FAV', payload: item.id });
            removeFav(item.id);
          }}>❌</button>
        }
    </div>
  );
};

export default Card;
