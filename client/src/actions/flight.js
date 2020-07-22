import {
    GET_FLIGHTS,
    FLIGHT_ERROR,
    ADD_FLIGHT,
    REMOVE_FLIGHT
} from './types';

import axios from 'axios';
import { setAlert } from './alert';
// To get all flights
export const getFlights = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:5000/api/flights');
        dispatch({
            type: GET_FLIGHTS,
            payload: res.data // to get all  posts
        });
    } catch (err) {
        dispatch({
            type: FLIGHT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

// To add flight

export const addFlight = (formData, history) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post('http://localhost:5000/api/flights', formData, config);
        console.log("1  Add_flight action" + res.data.length);


        dispatch({
            type: ADD_FLIGHT,
            payload: res.data // to get all flights
        });


        history.push("/flights");
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        dispatch({
            type: FLIGHT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

//To remove a flight
export const removeFlight = (flightId) => async dispatch => {
    try {
        await axios.delete(`http://localhost:5000/api/flights/${flightId}`);
        dispatch({
            type: REMOVE_FLIGHT,
            payload: flightId // for filtering out
        });
        dispatch(setAlert('Flight Removed ', 'success'));
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        dispatch({
            type: FLIGHT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}



