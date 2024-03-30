import { useState } from "react";
import '../Style/Estilos.css'

const Form = () => {
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
  })

  const [show, setShow] = useState(false)
  const [err, setErr] = useState(false)
  
  const handleSubmit = (event) => {    
    event.preventDefault()    
    if(customer.name.length >= 5 && customer.email.length >= 10 ){
      setShow(true)
      setErr(false)
    } else {
      setErr(true)
    }
  }

  return (
    <div className="form-container">
      { show ? null : 
      <form onSubmit={handleSubmit} className="form">
        <input type="text" onChange={(event) => setCustomer({...customer, name: event.target.value})} placeholder="Ingrese su nombre completo" className="input-field"/>
        <input type="email" onChange={(event) => setCustomer({...customer, email: event.target.value})} placeholder="Ingrese su correo electrónico" className="input-field"/>
        <button className="submit-button">Enviar</button>
      </form>
      }
      { show && 
      <h3 className="success-message">Gracias, {customer.name} te contactaremos cuanto antes vía mail 📩</h3>}

      { err && 
      <h4 className="error-message"><strong>Por favor verifique su información nuevamente</strong></h4 >}
    </div>
  );
};

export default Form;
