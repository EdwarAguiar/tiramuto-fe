import React, { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import AppContext from '../context/AppContext';
import '../styles/components/Information.css';

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const { cart } = state;
  const navigate = useNavigate();

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apto': formData.get('apto'),
      'city': formData.get('city'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'country': formData.get('country'),
      'phone': formData.get('phone'),
    }
    addToBuyer(buyer);
    navigate('/checkout/payment');
  }

  return (
    <>
      <Helmet>
        <title> Informacion del Cliente - Tiramuto</title>
      </Helmet>
      <div className="Information">
        <div className="Information-content">
          <div className="Information-head">
            <h2>Informacion de contacto:</h2>
          </div>
          <div className="Information-form">
            <form ref={form}>
              <input type="text" placeholder="Nombre Completo" name="name" />
              <input type="text" placeholder="Correo Electronico" name="email" />
              <input type="text" placeholder="Direccion" name="address" />
              <input type="text" placeholder="Apto" name="apto" />
              <input type="text" placeholder="Ciudad" name="city" />
              <input type="text" placeholder="Codido Postal" name="cp" />
              <input type="text" placeholder="Estado" name="state" />
              <input type="text" placeholder="Pais" name="country" />
              <input type="text" placeholder="Telefono" name="phone" />
            </form>
          </div>
          <div className="Information-buttons">
            <div className="Information-back">
              <Link to="/checkout">
                Regresar
              </Link>
            </div>
            <div className="Information-next">
              <button type="button" onClick={handleSubmit}>Pagar</button>
            </div>
          </div>
          </div>
          <div className="Information-sidebar">
            <h3>Pedido:</h3>
          {cart.map((item) => (
            <div className="Information-item" key={item.title}>
                <div className="Information-element">
                  <h4>{item.title}</h4>
                  <span>${item.price}</span>
                </div>
            </div>
          ))}
        </div>
      </div>
    </>

  );
};

export default Information;