import React, { Component, Fragment } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';

class TodolistUI extends Component {
  render() {
    return(
      <Fragment>
        <div style={{marginTop:'10px'}}>
          <Input 
            placeholder="请输入内容" 
            style={{width:'300px',margin:'0 10px 10px 10px'}} 
            value={this.props.inputValue}
            onChange={this.props.handleInputChange}
          />
          <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
        </div>
        <List
          style={{marginLeft:'10px',width:'300px'}}
          size="small"
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          // dataSource={data}
          dataSource={this.props.list}
          renderItem={
            (item,index) => 
              <List.Item onClick={(index)=>this.props.handleItemDelete(index)}
              >
                {item}
              </List.Item>}
        />
        </Fragment>

    )
  }
}

export default TodolistUI;
