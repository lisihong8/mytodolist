import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

import { GET_INIT_LIST } from './actionTypes';
import { initListAction } from './actionCreator';

function* getInitList() {
  yield console.log(12345);
  
 
  //  axios.get('http://localhost:8080/mytodolist')
  //     .then((res)=>{
  //       //console.log(res);
  //       //console.log(res.data);
  //       //console.log(res.data.data);
  //       const data = res.data.data;
  //       const action = initListAction(data);
  //       //console.log(action);
  //       // 现在有了action了之后,我们可以怎么做呢?
  //       // 我们可以把action传递出去通过store.dispatch(action)发给store,然后传递给reducer,在reducer里面去修改数据就可以了,那怎么做呢?
  //       // 之前大家可能就像 我这里直接用 store.dispatch(action) 不就行了吗? 实际上 大家 可以看到 在sagas.js这个文件里面  
  //       //我们并没有store这个仓库,所以你调用 store.dispatch(action)是不行的.取而代之,我们会用到另一个方法,这个方法叫做 put方法,
  //       // put方法是redux-saga里的一个方法,然后把之前的 store.dispatch(action); 换成 put(action) 这样派发给store ,然后传递给reducer,在reducer里面去修改数据
  //       //store.dispatch(action);
  //        put(action);
  //     }).catch(()=> {
  //       console.log('请求失败');
  //     })

   // 用了generator函数,generator函数里面如果你做了这种异步请求的时候,就不要在使用promise这种形式了,上一张图 我们完全可以这么去写 如下 所示:

  // //const res = axios.get('http://localhost:8080/mytodolist'); //此时没加yield时,打印出来的res是undefined
  // const res = yield axios.get('http://localhost:8080/mytodolist');
  // //console.log(res.data);
  // //console.log(res.data.data);
  // const data = yield res.data.data;
  // const action = yield initListAction(data);
  // yield put(action);

  try {
    //const res = axios.get('http://localhost:8080/mytodolist'); //此时没加yield时,打印出来的res是undefined
    const res = yield axios.get('http://localhost:8080/mytodolist');
    //console.log(res.data);
    //console.log(res.data.data);
    const data = yield res.data.data;
    const action = yield initListAction(data);
    yield put(action);
  }catch(error) {
    console.log('mytodolist 网络请求失败');
  }
}



// generator函数
function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}


export default mySaga;
