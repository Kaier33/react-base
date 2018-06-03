import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';     // createStore用于创建仓库
import reducer from './reducers/counter';//处理action对象

import * as actions from './actions'



const store = createStore(reducer);      //创建一个store管理state

const render = () => {
    ReactDOM.render(
        < App
            onIncrement={() => { store.dispatch(actions.increment() ) }}
            onDecrease={() => { store.dispatch(actions.decrement() ) }}
            value={store.getState()}
        />,
        document.getElementById('root'));
}

render();
store.subscribe(render);  //监听




