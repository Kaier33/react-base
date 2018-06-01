//       创建仓库 ,  合成各个 reducer  ,  
import {createStore,combineReducers,applyMiddleware,compose } from 'redux';

import { reducer as todoReducer } from './todos';
import { reducer as filterReducer } from './filter';

const reducer = combineReducers({
    todos:todoReducer,
    filter:filterReducer
})

export default createStore(reducer);