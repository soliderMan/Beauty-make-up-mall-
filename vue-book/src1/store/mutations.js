import * as Types from './mutations-type';
const mutations={
  [Types.INCREMENT](state,count){ //参数state是自动放入的 默认指的是当前的state
    state.count +=count;
  },
  [Types.DECREMENT](state){
    state.count -=1;
  }
};

export default mutations;

// 创建快捷键 宏


