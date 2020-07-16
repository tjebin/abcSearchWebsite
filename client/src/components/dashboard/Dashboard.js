import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';

const Dashboard = ({
    auth: { user },
    getCurrentProfile,
    profile: { profile, loading },
    deleteAccount
}) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);
    return loading && profile === null ? <Spinner /> :
        <Fragment>
            <h1 className="large text-primary">Dasboard</h1>
            <p className="lead">
                <i className="fas fa-user">
                    Welcome {user && user.name}
                </i>
            </p>
            {profile !== null ? <Fragment>
                <DashboardActions />
                <Experience experience={profile.experience} />
                <Education education={profile.education} />
                <div className="my-2">
                    <button className="btn btn-danger" onClick={() => deleteAccount()}>
                        <i className="fas fa-user-minus">
                            Delete My Account
                        </i>
                    </button>
                </div>
            </Fragment> :
                <Fragment>
                    <p> You have not setup a profile, please add some info </p>
                    <Link to="/createProfile" className="btn btn-primary my-1">
                        Create Profile
                    </Link>
                </Fragment>
            }
        </Fragment>;
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    deleteAccount: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);