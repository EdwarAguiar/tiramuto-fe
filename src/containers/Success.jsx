import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Helmet } from 'react-helmet';
import Map from '../components/Map';
import useGoogleAddress from '../hooks/useGoogleAddress';
import '../styles/components/Success.css';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  console.log(buyer[0]);
  const realAddress = buyer[0].address + " " +buyer[0].apto + " " + buyer[0].city + " "+ buyer[0].state + " " + buyer[0].country;
  console.log(realAddress);
  const location = useGoogleAddress(realAddress);

  return (
    <>
      <Helmet>
        <title>Gracias - Tiramuto</title>
      </Helmet>
      <div className="Success">
        <div className="Success-content">
          <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
          <span>Tu pedido llegara en 3 dias a tu direccion.</span>
          <div className="Success-map">
            <Map data={location}/>
          </div>
        </div>
      </div>

    </>
  );
};

export default Success;