interface Action{
  type: string;
  payload?: any;
}

interface Reducer<T>{
  (state: T, action: Action): T;
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

console.log(reducer(5, null));//5
console.log(reducer(1, incrementAction));//2
console.log(reducer(610, decrementAction));//609
console.log(reducer(25, plusAction));//30