import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import config from '../config/config';

const Map = ({ data }) => {
    const mapStyles = {
        height: "50vh",
        width: "100%"
    }

    const defaultCenter = {
        lat: data.lat, lng: data.lng
        //lat: 9.707622299999999, lng: -68.4352835
    }
  return (
    <LoadScript googleMapsApiKey={config.googleMapsAPI}>
        <GoogleMap
        mapContainerStyle={mapStyles}
        //zoom={9}
        zoom={11}
        center={defaultCenter}
        >
            <Marker position={defaultCenter}/>
        </GoogleMap>
    </LoadScript>
  )
}

export default Map;