import React, { Fragment } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';


// 当一个普通组件里只有render函数的时候,我们完全可以通过一个无状态组件 来替换掉一个这样只有一个render函数的普通组件.
// 无状态组件 性能比较高,因为无状态组件是个函数,没有声明周期函数.
// 而普通组件 它是一个js里面的一个类,这个类生成的对象里面还会有一些声明周期函数 所以它执行起来既要执行生命周期函数 又要执行render函数,所以普通组件执行的东西远比 无状态组件执行的东西要多的多,所以 一个普通组件的性能是赶不上无状态组件的性能.
// 无状态组件 是个函数,这个函数会接收一个参数叫做props,也就是父组件传递过来的内容,所以在这里面再去用父组件传递过来的参数的时候,就不再使用 this.props.属性名,而是 直接用 props.属性名
const TodolistUI = (props)=> {
  return(
    <Fragment>
      <div style={{marginTop:'10px'}}>
        <Input 
          placeholder="请输入内容" 
          style={{width:'300px',margin:'0 10px 10px 10px'}} 
          value={props.inputValue}
          onChange={props.handleInputChange}
        />
        <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
      </div>
      <List
        style={{marginLeft:'10px',width:'300px'}}
        size="small"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        // dataSource={data}
        dataSource={props.list}
        renderItem={
          (item,index) => 
            <List.Item onClick={(index)=>props.handleItemDelete(index)}
            >
              {item}
            </List.Item>}
      />
    </Fragment>
    )
  }


export default TodolistUI;
