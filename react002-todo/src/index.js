import React from 'react';
import ReactDom from "react-dom";
import {Provider} from 'react-redux';

import TodoApp from './todoApp'
import store from './store'

ReactDom.render(
    // 顶层包裹 ,全局共享一个store 
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
)
