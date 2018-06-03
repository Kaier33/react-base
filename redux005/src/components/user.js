import React, { Component } from 'react'
import { connect } from 'react-redux'
import { get_user } from '../actions'

class GetUser extends Component {
    render() {
        const { get_user } = this.props;
        const { error, isFetching, user } = this.props.user;

        let data;
        if (error) {
            data = error;
        } else if (isFetching) {
            data = "Loading...";
        } else {
            data = user.email;
        }
        return (
            <div className="container">
                <h1 className="jumbotron-heading text-center">{data}</h1>
                <p className="text-center">
                    <button onClick={() => get_user()} className="btn btn-success mr-2">get random user email</button>
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { get_user })(GetUser)