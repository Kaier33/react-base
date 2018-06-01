import { combineReducers } from 'redux' ; //整合多个reducer

import counter from './counter';
import user from './user';

const rootReducer = combineReducers({
    counter,
    user
})

export default rootReducer;