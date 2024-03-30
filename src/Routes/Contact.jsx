import React from 'react'
import Form from '../Components/Form'
import '../Style/Estilos.css'

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">¿Quiéres más información?</h2>
      <p className="contact-description">Envíanos tus preguntas y te contactaremos</p>
      <Form/>
    </div>
  )
}

export default Contact