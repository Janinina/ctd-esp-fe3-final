import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Style/Estilos.css'



const Detail = () => { 
  const [dentista, setDentista] = useState({})

  const params = useParams()
  const url = ('https://jsonplaceholder.typicode.com/users/' + params.id) 
  
  useEffect(() => {
    axios(url)
    .then(res => setDentista(res.data))
  }, [] )
  
  return (
    <>
      <h1>Perfil del Dentista</h1>      
      <table>
        <tbody>
          <tr>
            <td className="bold">Nombre:</td>
            <td>{dentista.name}</td>
          </tr>
          <tr>
            <td className="bold">Correo electrónico:</td>
            <td>{dentista.email}</td>
          </tr>
          <tr>
            <td className="bold">Telefono:</td>
            <td>{dentista.phone}</td>
          </tr>
          <tr>
            <td className="bold">Página web:</td>
            <td>{dentista.website}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Detail