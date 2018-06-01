import React, { Component } from 'react';
import PropTypes from 'prop-types';  //propType类型检查

// react-redux 中 connect : 连接容器组件和傻瓜组件;
import { connect } from 'react-redux';

import { addTodo } from '../actions.js';

class AddTodo extends Component {
    constructor(props, context) {
        super(props, context);

        this.onSubmit = this.onSubmit.bind(this);
        this.refInput = this.refInput.bind(this);
    }
    // 组件完成装载(mount)中,会看ref属性是不是一个函数, 如果是, 就是会调用, 参数就 该dom
    refInput(node) {
        this.input = node
    }

    onSubmit(event) {
        event.preventDefault();

        const input = this.input;
        if (input.value.trim()) {
            return;
        }
        this.props.onAdd(input.value);
        input.value = '';
    }


    render() {
        return(
            <div className='add-todo'>
                <form onSubmit={this.onSubmit}>
                    <input type="text" className='new-todo' ref={this.refInput} />
                    <button className='add-btn' type='submit'>
                        添加
                    </button>
                </form>
            </div>
        )
    }

}

AddTodo.propTypes = {
    onAdd: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (text) => {
            dispatch(addTodo(text));
        }
    }
};

export default connect(null, mapDispatchToProps)(AddTodo)

