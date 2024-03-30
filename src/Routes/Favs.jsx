import React from "react"
import Card from "../Components/Card";

const Favs = () => {  
  const favsItems = JSON.parse(localStorage.getItem('favs')) || []

  return (
    <>
      <h1>Dentistas Favoritos</h1>
      <p>Aquí puedes encontrar a tus Dentistas favoritos:</p>
      <div className="card-grid">        
        {favsItems.map((item) => <Card key={item.id} item={item}/>)}        
      </div>
    </>
  );
};

export default Favs;
