import React from 'react';
import PropTypes from 'prop-types';  //propType类型检查  

const TodoItem = ({ onToggle, onRemove, completed, text }) => {
    const checkedProp = completed ? { checked: true } : {};
    return (
        <li
            className='todo-item'
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
        >
            <input className='toggle' type="checkBox" {...checkedProp}
                readOnly onClick={onToggle} />
            <lable className='text'>{text}</lable>
            <button className='remove' onClick={onRemove}> x </button>
        </li>
    )
}

TodoItem.propTypes = {
    onToggle: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default TodoItem;
