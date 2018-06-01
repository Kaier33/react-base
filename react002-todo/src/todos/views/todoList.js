import React from 'react';
import PropTypes from 'prop-types';  //propType类型检查  

// react-redux 中 connect : 连接容器组件和傻瓜组件;
import { connect } from 'react-redux';
// 简化代码用,因为很多的mapDispatchToProps的代码都一致
import { bindActionCreators } from 'redux'

import TodoItem from './todoItem.js';

import { toggleTodo, removeTodo } from '../actions.js';
import { FilterTypes } from '../../constants.js';

const TodoList = ({ todos, onToggleTodo, onRemoveTodo }) => {
    return (
        <ul className='todo-list'>
            {
                todos.map((item) => (
                    <TodoItem
                        key={item.id}
                        text={item.text}
                        completed={item.completed}
                        onToggle={() => onToggleTodo(item.id)}
                        onRemove={() => onRemoveTodo(item.id)}
                    />
                ))
            }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
}

const selectVisiableTodos = (todos, filter) => {
    switch (filter) {
        case FilterTypes.ALL:
            return todos;
        case FilterTypes.COMPLETED:
            return todos.filter(item => item.completed );
        case FilterTypes.UNCOMPLETED:
            return todos.filter(item=>!item.completed)
        default:
           throw new Error('unsupported filter')
    } 
}

const mapStateToProps = (state)=>{
    return {
        todos:selectVisiableTodos(state.todos, state.filter)
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        onToggleTodo:(id)=>{
            dispatch(toggleTodo(id))
        },
        onRemoveTodoL:(id)=>{
            dispatch(removeTodo(id))
        }
    }
}
/*
 * prams 
 * 把store上的状态转化为内层傻瓜组件的prop;
 * 把内层傻瓜组件中的用户动作转化为派送给store的动作;
*/ 

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
