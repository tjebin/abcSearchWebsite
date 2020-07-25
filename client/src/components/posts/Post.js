import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostItem from './PostItem';
import { getPosts } from '../../actions/post';
import PostForm from './PostForm';
import { Link } from 'react-router-dom';

const Post = ({ getPosts, post: { posts, loading } }) => {
    useEffect(() => {
        getPosts();
    }, [getPosts]);
    return loading ? <Spinner /> : (
        <Fragment>
            <h1 className="large text-primary">Posts </h1>
            <p className="lead">
                <i className="fa fa-user" ></i> Welcome to the community
            </p>
            <PostForm />
            {/* PostForm*/}
            <div className="posts" >
                {posts.map(post => (
                    <PostItem key={post._id} post={post} />
                ))}
            </div>
            <Link to='/dashboard' className="btn btn-success">
                To Dashboard
            </Link>
        </Fragment>
    );
}

Post.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    post: state.post,
    loading: state.post.loading
});

export default connect(mapStateToProps, { getPosts })(Post);