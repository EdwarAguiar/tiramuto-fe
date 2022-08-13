import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config/config';

const useGoogleAddress = address => {
    const [ map, setMap ] = useState({});
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${config.googleMapsAPI}`;

    useEffect(() => {
        async function fetchData() {
            const response = await axios(API);
            setMap(response.data.results[0].geometry.location);
        }
        fetchData();
        //alert('Inside useEffect');
    }, []);
    return map;

};

export default useGoogleAddress;
