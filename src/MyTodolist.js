import React, { Component, Fragment } from 'react';
import { Input, Button, List } from 'antd';
// import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionTypes';
import { getInputChangeAction, getAddTodoItemAction, getDeleteTodoItemAction } from './store/actionCreator';
import store from './store';
import 'antd/dist/antd.css';

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
    //console.log(store.getState());
    //store.getState() 获取store里的数据
    this.state = store.getState();
    // 只要store里的内容发生了改变,store.subscribe()里的函数就会自动的被执行.
    store.subscribe(this.handleStoreChange);
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
      <Fragment>
        <div style={{marginTop:'10px'}}>
          <Input 
            placeholder="请输入内容" 
            style={{width:'300px',margin:'0 10px 10px 10px'}} 
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
        </div>
        <List
          style={{marginLeft:'10px',width:'300px'}}
          size="small"
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          // dataSource={data}
          dataSource={this.state.list}
          renderItem={(item,index) => <List.Item onClick={this.handleItemDelete.bind(this,index)}>{item}</List.Item>}
        />
        </Fragment>

    )
  }
}

export default MyTodolist;
