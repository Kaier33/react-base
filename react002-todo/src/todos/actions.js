// action 构造函数 ,  就是生成各个 action 对象的方法 , action本质就是个JS对象
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionType';

let nextTodoId = 0;

//  ES6 的箭头函数 ()=>{ return XXX } , 也可以不用写return, 直接用({xxx}) , 包裹起来 
export const addTodo = (text) => ({
    type: ADD_TODO, //action类型
    completed: false,
    id: nextTodoId++,
    text: text
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id: id
});


export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    id: id
});

