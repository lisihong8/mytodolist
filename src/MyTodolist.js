import React, { Component } from 'react';
// import axios from 'axios';

// import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionTypes';
import { getInputChangeAction, getAddTodoItemAction, getDeleteTodoItemAction, getInitList } from './store/actionCreator';
import store from './store';
import TodolistUI from './TodolistUI';


// const data = [
//   'Racing car sprays burning fuel into crowd.',
//   'Japanese princess to wed commoner.',
//   'Australian walks 100km after outback crash.',
//   'Man charged over missing wedding girl.',
//   'Los Angeles battles huge wildfires.',
// ];


class MyTodolist extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    //console.log(store.getState());
    //store.getState() 获取store里的数据
    this.state = store.getState();
    // 只要store里的内容发生了改变,store.subscribe()里的函数就会自动的被执行.
    store.subscribe(this.handleStoreChange);
  }

  componentDidMount() {

    // axios.get('http://localhost:8080/mytodolist')
    //   .then((res)=>{
    //     //console.log(res);
    //     //console.log(res.data);
    //    //console.log(res.data.data);
    //     const data = res.data.data;
    //     const action = initListAction(data);
    //     // console.log(action);
    //     store.dispatch(action);
    //   })
    const action = getInitList();
   // console.log(action);
    store.dispatch(action);
    
  }

  handleInputChange(e) {
    console.log(e.target.value);

    // const action = {
    //   type: CHANGE_INPUT_VALUE,
    //   value: e.target.value
    // }

    const action = getInputChangeAction(e.target.value);

    store.dispatch(action);
  }

  handleStoreChange() {
    console.log('store change');
    this.setState(store.getState());
  }

  handleBtnClick() {
    // const action = {
    //   type: ADD_TODO_ITEM,
    // }
    const action = getAddTodoItemAction();
    store.dispatch(action);
  }

  handleItemDelete(index) {
    // const action = {
    //   type: DELETE_TODO_ITEM,
    //   index
    // }
    const action = getDeleteTodoItemAction(index)
    store.dispatch(action);
  }

  render() {
    return (
      <TodolistUI 
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }
}

export default MyTodolist;
