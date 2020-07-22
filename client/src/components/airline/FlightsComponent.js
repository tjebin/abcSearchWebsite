import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom';
import { getFlights } from '../../actions/flight';
import FlightItem from './FlightItem';

const Flights = ({ getFlights, flights, loading }) => {

    // alert(" loading -" + loading + " flights " + flights + " flights length -" + flights.length);
    useEffect(() => {
        getFlights();
    }, [getFlights]);
    const [formData, setFormData] = useState({
        from: '',
        to: '',
        departure: '',
        arrival: ''
    });
    // need to see
    const {
        from,
        to,
        departure,
        arrival
    } = formData;
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Flights</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div>
                <p className="lead">
                    Search Flights...
                    <Link to="/addFlight" className="btn btn-light">
                        <i className="fa fa-plus text-primary"></i> Add Flight
                    </Link>
                </p>
                <small>* = required field</small>
                <form className="form" onSubmit={e => {
                    e.preventDefault();
                    getFlights();
                }}>
                    <div className="form-group">
                        <i className="fa fa-plane"></i>
                        <input
                            type="text"
                            placeholder="Depating From "
                            name="from"
                            required
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
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>From Date</label>
                        <input
                            type="date"
                            name="departure"
                            placeholder="Destination"
                            value={departure}
                            onChange={e => onChange(e)} />
                    </div>
                    <div className="form-group">
                        <label>To Date</label>
                        <input type="date"
                            name="arrival"
                            value={arrival} onChange={e => onChange(e)}
                        />
                    </div>
                    <input type="submit" className="btn btn-primary my-1" />
                    <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
                </form>
                <div className="my-1">
                    <h2 className="text-primary">Flights Available</h2>
                    <div className="flightsContainer bg-white pp-2">
                        {!loading && flights && flights.length > 0 ? (
                            <Fragment>
                                {flights.map(flight => (
                                    <FlightItem key={flight._id} flight={flight} />
                                )
                                )}
                            </Fragment>)
                            : (<h4>No experience credentials </h4>
                            )}
                    </div>
                </div>
            </div>
        </Fragment >
    );
};

Flights.propTypes = {
    getFlights: PropTypes.func.isRequired,
    flights: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    flights: state.flight.flights,
    loading: state.flight.loading
});
export default connect(mapStateToProps, { getFlights })(withRouter(Flights));
