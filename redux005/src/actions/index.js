import * as types from '../constants'
import axios from 'axios'

export const increment = () => {
    return {
        type: types.INCREMENT,
    }
}

export const decrement = () => {
    return {
        type: types.DECREMENT,
    }
}


export const get_user = () => {
    return dispatch => {
        dispatch(fetch_user_request());
        axios.get("https://randomuser.me/api/")
            .then(res => {
                dispatch(fetch_user(res.data.results[0]))
            })
            .catch(err => {
                dispatch(fetch_user_failure(err.response.data));
            })
    }
}


const fetch_user = (user) => {
    return {
        type: types.FETCH_USER_SUCCESS,
        user
    }
}

const fetch_user_request = () => {
    return {
        type: types.FETCH_USER_REQUEST
    }
};

const fetch_user_failure = (error) => {
    return {
        type: types.FETCH_USER_FAILURE,
        error
    };
};