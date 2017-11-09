interface Action{
  type: string;
  payload?: any;
}

interface Reducer<T>{
  (state: T, action: Action): T;
}

class Store<T>{
  private state:T;

  constructor(
    private reducer: Reducer<T>,
    initState: T
  ){
    this.state = initState;
  }

  getState(): T{
    return this.state;
  }

  dispatch(action: Action): void{
    this.state = this.reducer(this.state, action);
  }
}

let reducer: Reducer<number> = (state: number = 0, action: Action) =>{
  if(action === null) return state;
  switch(action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'PLUS':
      return state + action.payload;
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

var plusAction: Action = {
  type: 'PLUS',
  payload: 5
}

let store = new Store<number>(reducer, 5);

console.log('init',store.getState());//5
store.dispatch(incrementAction);

console.log('incrementAction' ,store.getState());//6
store.dispatch(decrementAction);

console.log('decrementAction' ,store.getState());//6
store.dispatch(plusAction);

console.log('plusAction', store.getState());//6