import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux'  //connect将全局state连接到该组件
import {bindActionCreators} from 'redux'  
import * as types from './actions'  //导入action
import GetUser from './components/user'

class App extends Component {
  render() {
    const { increment, decrement } = this.props;  //this.props包含reducer的 ,在conne函数下已经挂载进去了
    // console.log(this.props)
    return (
      <div className="container">
        <h1 className="jumbotron-heading text-center">{this.props.counter}</h1>
        <p className="text-center">
          <button onClick={() => increment()} className="btn btn-primary mr-2">Increase</button>
          <button onClick={() => decrement()} className="btn btn-danger my-2">Decrease</button>
        </p>
        <GetUser />
      </div>
    );
  }
}

const mapStateToProps = (state) => { //将state变成props,就方便调用了
  // console.log(state)
  return {
    counter: state.counter  // 这件键值对的key自己定义, 返回的自己需要的state下的xx , 组件通过this.props.key获取
  }
}

const mapDispatchToProps = (dispatch)=>{
  return bindActionCreators(types,dispatch)
}

// 第一个参数将state的state引入到该组件 , 第二参数将 reducer的方法引入到该组组件 , 最后 是哪个组件调用(App)  
export default connect(mapStateToProps, mapDispatchToProps)(App);
