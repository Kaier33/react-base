// reducer 就是处理action , 是一个纯函数 , 接收旧的的store和action ,返回新的state

import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionType';


// state是之前的state , reduce要做的就是处理action , 由于action会改变原本的state中状态 , 所以返回新的state 
// 由于 reduce是个纯函数, 所以不用 push  ,UNshift这种会改变原数组的方法. 用map, filter去返回新的数组
export default (state = [], action) => {
    switch (action.type) {
       case ADD_TODO : {
           return [
               {
                   id: action.id,
                   text:action.text,
                   completed:false,
               },
               ...state 
           ]
       };
       case TOGGLE_TODO :{
           return state.map((todoItem)=>{
               if(todoItem.id === action.id){
                   return [...todoItem,{completed:!todoItem.completed}]
               }else{
                   todoItem
               }
           })
       };
    //   过滤掉 不是对应ID的item, 就相当于删掉了
       case REMOVE_TODO : {
           return state.filter((todoItem)=>{
               return  todoItem.id != action.id
           })
       };
    // 因为reducer 会接收任务的action ,包括它根本不感兴趣的action, 这样就是执行 default中的语句, state原封不动的返回.不做任何改变
       default:{
           return state
       }
    }
}