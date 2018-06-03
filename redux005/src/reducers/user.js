import * as types from '../constants'

const initalState = {
    isFetching: false,
    error: null,
    user: {}
}
const user = (state = initalState, action = {}) => {
    switch (action.type) {
        case types.FETCH_USER_SUCCESS:
            return {
                isFetching: false,
                error: null,
                user: action.user
            }
        case types.FETCH_USER_REQUEST:
            return {
                isFetching: true,
                error: null,
                user: {}
            }
        case types.FETCH_USER_FAILURE:
            return {
                isFetching: false,
                error: action.error,
                user: {}
            }
        default:
            return state;
    }
};
export default user;