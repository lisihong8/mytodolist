import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes';
import axios from 'axios';

export const getInputChangeAction = (value)=> ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddTodoItemAction = ()=> ({
  type: ADD_TODO_ITEM
})


export const getDeleteTodoItemAction = (index)=> ({
  type: DELETE_TODO_ITEM,
  index
})


export const initListAction = (data)=> ({
  type: INIT_LIST_ACTION,
  data
})

export const getTodoList = ()=> {
  return (dispatch)=> {
    axios.get('http://localhost:8080/mytodolist')
      .then((res)=>{
        //console.log(res.data);
        //console.log(res.data.data);
        const data = res.data.data;
        console.log(data);
        //const action = initListAction(data);
        //console.log(action);
        //store.dispatch(action);
        const action = initListAction(data);
        dispatch(action);
      }).catch(()=>{
        console.log('err');
      })
    }
}
