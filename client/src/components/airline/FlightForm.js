import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom';
import { addFlight } from '../../actions/flight';
import { REMOVE_ALERT } from '../../actions/types';
import store from '../../store';

import Alert from '../layout/Alert';

const FlightForm = ({ addFlight, history }) => {
    useEffect(() => {
        store.dispatch({
            type: REMOVE_ALERT
        })
    });
    const [formData, setFormData] = useState({
        from: '',
        to: '',
        departure: '',
        arrival: '',
        price: '',
        airlineName: '',
        route: '',
        deal: ''
    });
    // need to see
    const {
        from,
        to,
        departureDate,
        arrivalDate,
        price,
        airlineName,
        route,
        deal
    } = formData;
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Add Flights</BreadcrumbItem>
                    </Breadcrumb>
                </div>
            </div>

            <p className="lead">
                Add available flights
                </p>
            <small>* = required field</small>
            <form className="form" onSubmit={e => {
                e.preventDefault();
                addFlight(formData, history);
            }}>
                <div className="form-group">
                    <i className="fa fa-plane"></i>
                    <input
                        type="text"
                        placeholder="Depating From "
                        name="from"

                        value={from}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className="form-group">
                    <i className="fa fa-plane"></i>
                    <input
                        type="text"
                        placeholder="Destination"
                        name="to"
                        value={to}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className="form-group">
                    <label>From Date</label>
                    <input
                        type="date"
                        name="departureDate"
                        placeholder="Destination"
                        value={departureDate}
                        onChange={e => onChange(e)} />
                </div>
                <div className="form-group">
                    <label>To Date</label>
                    <input
                        type="date"
                        name="arrivalDate"
                        value={arrivalDate}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Price"
                        name="price"
                        value={price}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Airline"
                        name="airlineName"
                        value={airlineName}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Route"
                        name="route"
                        value={route}
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Deal"
                        name="deal"
                        value={deal}
                        onChange={e => onChange(e)}
                    />
                </div>
                <input type="submit" className="btn btn-primary my-1" />
                <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
            </form>
            <Alert />
        </div>
    );
};

FlightForm.propTypes = {
    addFlight: PropTypes.func.isRequired
};

export default connect(null, { addFlight })(withRouter(FlightForm));
