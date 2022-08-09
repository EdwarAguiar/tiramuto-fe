import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Payment.css';

const Payment = () => {
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        <div className="Payment-button">
          Boton de Pago con Paypal
        </div>
      </div>
      <div className="Payment-navigator">
      <Link to="/checkout/information">
        <button type="text">Regresar a Informacion de Contancto </button>
      </Link>
    </div>
    </div>

  );
};

export default Payment;