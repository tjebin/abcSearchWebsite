import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { removeComment } from '../../actions/post';

const CommmentItem = ({
    postId,
    comment: {
        _id,
        text,
        name,
        avatar,
        user,
        date
    },
    auth,
    removeComment
}) => {
    return (
        <div className="post bg-white p-1 my-1">
            <div>
                <Link to={`/profile/${user}`}>
                    <img
                        className="round-img"
                        src={avatar}
                        alt=""
                    />
                    <h4>{name}</h4>
                </Link>
            </div>
            <div>
                <p className="my-1">
                    {text}
                </p>
                <p className="post-date">
                    <Moment format='YYYY/MM/DD' value={date} />
                </p>
                {!auth.loading && auth.user._id === user && (
                    <button onClick={e => removeComment(postId, _id)} type="button" className="btn btn-danger" >
                        <i className="fa fa-times"></i>
                    </button>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
});

CommmentItem.propTypes = {
    postId: PropTypes.number.isRequired,
    comment: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    removeComment: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { removeComment })(CommmentItem);