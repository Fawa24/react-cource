import { useReducer } from "react";

const buttonStyle = {
  width: '40px', 
  fontSize: '20px'
};

enum ActionType {
  Increment = 0,
  Decrement = 1
}

interface CountStateType {
  count: number;
}

function reducer(state: CountStateType, actionType: ActionType) {
  switch (actionType) {
    case ActionType.Increment:
      return { count: state.count + 1 };
    case ActionType.Decrement:
      return { count: state.count - 1};
    default:
      return state;
  };
  
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increnemt() {
    dispatch(ActionType.Increment);
  }

  function decrement() {
    dispatch(ActionType.Decrement);
  }

  return (
    <div style={{display: 'flex', width: '100px', justifyContent: 'space-between'}}>
      <button onClick={increnemt} style={buttonStyle}>+</button>
      <p>{state.count}</p>
      <button onClick={decrement} style={buttonStyle}>-</button> 
    </div>
  )
}

export default App
