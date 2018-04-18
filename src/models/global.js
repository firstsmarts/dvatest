const asyncadd = async (timeout) =>{
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}


export default {
  namespace: 'global',

  state: {
    collapsed: false,
    notices: [],
    record : 0,
    current: 0,
  },

  effects: {
    *test({payload: time},{put,call}){
        yield call(asyncadd,time)
        yield put({type: 'add',payload: time})
    }
  },

  reducers: {
    add: (state,action) => {
        return {
            ...state,
            current: state.current + action.payload
        }
    }
  },

  subscriptions: {

  },
};
