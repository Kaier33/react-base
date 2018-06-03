import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import * as actions from './actions';    // actions
import rootReducer from './reducers';    //处理action对象

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';     // createStore用于创建仓库

import { Provider } from 'react-redux';  //provider包裹全局




const store = createStore(rootReducer, {}, applyMiddleware(logger,thunk));      //创建一个store管理state, 接收一个reducer函数去改变state , 第二个参数表示给定初始的store, 第三个可以填上中间件

ReactDOM.render(
    <Provider store={store}>
        < App />
    </Provider>,
    document.getElementById('root')
);






// //applyMiddleware
// let login = store => next => action => {
//     console.log("will dispatch1", action);
//     let nextone = next(action);
//     console.log('state after dispatch1', store.getState())
//     return nextone
// }

// let verify = store => next => action => {
//     console.log("will dispath2", action);
//     let nextone = next(action);
//     console.log('state after dispatch2', store.getState())
//     return nextone
// }

// let err = store => next => action => {
//     try {
//         console.log("will dispath3", action);
//         let nextone = next(action);
//         console.log('state after dispatch3', store.getState())
//         return nextone
//     } catch (error) {
//         console.log('err'+error)
//     }
// }

