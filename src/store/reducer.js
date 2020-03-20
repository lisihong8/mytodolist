import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes';

const defaultState = {
  inputValue: '',
  list: []
}

// reducer可以接受state,但是绝不能修改state
// reducer必须是纯函数,所谓的纯函数指的是 给定固定的输入,就一定会有固定的输出,而且不会有任何副作用.
export default (state=defaultState,action)=> {
  
  //console.log(state,action);

  if(action.type === CHANGE_INPUT_VALUE) {
    // 把原来的state深拷贝一份出来
    const newState = JSON.parse(JSON.stringify(state));
    //console.log(newState);
    newState.inputValue = action.value;
    return newState
  }
  if(action.type ===  ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    //console.log(newState);
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if(action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index,1);
    return newState;
  }
  if(action.type === INIT_LIST_ACTION) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data;
    return newState;
  }
  return state;
}
