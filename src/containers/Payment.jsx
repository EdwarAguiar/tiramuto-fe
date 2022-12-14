import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import AppContext from '../context/AppContext';
import config from '../config/config';
import '../styles/components/Payment.css';

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const navigate = useNavigate();

  const paypalOptions = {
    clientId: config.paypalClientID,
    intent: 'capture',
    currency: 'USD'
  }

  const buttonStyles = {
    layout: 'horizontal',
    color: 'gold',
    shape: 'rect',
    label: 'paypal'
  }

  const handlePaymentSuccess = (data) => {
    //console.log(data);
    if(data.status === 'COMPLETED') {
        const newOrder = {
            buyer,
            product: cart,
            payment: data
        }
        addNewOrder(newOrder);
        navigate('/checkout/success');
    }
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <>
      <Helmet>
        <title>Pagar - Tiramuto</title>
      </Helmet>
      <div className="Payment">
        <div className="Payment-content">
          <h3>Resumen del pedido:</h3>
          {cart.map((item) =>(
            <div className="Payment-item" key={item.title}>
              <div className="Payment-element">
                <h4>{item.title}</h4>
                  <span>${' '}{item.price}</span>
              </div>
            </div>
          ))}
          <div className="Payment-button">
            <PayPalButton 
              paypalOptions={paypalOptions}
              buttonStyles={buttonStyles}
              amount={handleSumTotal()}
              onSuccess={data => handlePaymentSuccess(data)}
              onError={error => console.log(error)}
              onCancel={data => console.log(data)}
            />
          </div>
        </div>

        <div className="Payment-navigator">
          <Link to="/checkout/information">
            <button type="text">Regresar a Informacion de Contancto </button>
          </Link>
        </div>

      </div>
    </>


  );
};

export default Payment;