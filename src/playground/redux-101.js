import { createStore } from 'redux';

const INITIAL_STATE = {count: 0};

// Action describe the fact that something happened, but don't specify how the application's state changes in response.
// That's the job of reducers!

// Action generators -- functions that return action objects

//const incrementCount = (payload = {}) => {
const incrementCount = ({incrementBy = 1} = {}) => {
  return {
    type: 'INCREMENT',
    //incrementBy: typeof incrementBy === 'number' ? incrementBy : 1
    incrementBy
  };
}

const decrementCount = ({decrementBy = 1} = {}) => {
  return {
    type: 'DECREMENT',
    decrementBy
  };
}

const setCount = ({count = INITIAL_STATE.count} = {}) => {
  return {
    type: 'SET',
    count
  };
}

// const resetCount = () => {
//   return {
//     type: 'RESET'
//   };
// }
const resetCount = () => ({type: 'RESET'});  // return an object explicitly


// Reducers
// 1. Reducers are pure funcitons
// 2. Never change state or action

const countReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INCREMENT': 
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      //return {count: ++state.count};  // it will probably use pointers to the INITIAL_STATE (original reference)
      return {count: state.count + incrementBy};
      break;
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {count: state.count - decrementBy};
      break;
    case 'SET':
      return {count: action.count};
      break;
    case 'RESET':
      return INITIAL_STATE;
      break;
    default:
      return state;
  }
}



const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});


// store.dispatch({type: 'INCREMENT', incrementBy: 5});
store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());

//unsubscribe();

store.dispatch({type: 'INCREMENT'});

store.dispatch({type: 'RESET'});

store.dispatch({type: 'DECREMENT'});

store.dispatch({type: 'DECREMENT', decrementBy: 10});

store.dispatch(decrementCount({decrementBy: 3}));

store.dispatch({type: 'SET', count: 101});