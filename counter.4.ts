import { 
  Action,
  Reducer,
  createStore,
  Store 
} from 'redux';

interface PlusAction extends Action{
  payload: number;
}

let reducer: Reducer<number> = (state: number = 0, action: Action) =>{
  if(action === null) return state;
  switch(action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'PLUS':
      return state + (<PlusAction>action).payload;
    default:
      return state;
  }
}

var incrementAction: Action = {
  type: 'INCREMENT'
}

var decrementAction: Action = {
  type: 'DECREMENT'
}

var plusAction: PlusAction = {
  type: 'PLUS',
  payload: 5
}

let store: Store<number> = createStore<number>(reducer);

console.log('init',store.getState());//0
store.subscribe(()=>{
  console.log('subscribe',store.getState());
})

store.dispatch(incrementAction);
store.dispatch(plusAction);
store.dispatch(decrementAction);