import React, { useReducer } from "react";
import "./TestReducer.css";
const inputHandler = (state, action) => {
  switch (action) {
    case "CHANGE": {
      return state.value;
    }
    default: {
      return state.value;
    }
  }
};
export default function TestReducer() {
  const [inputValue, dispatch] = useReducer(inputHandler, { value: "" });
  return (
    <div className='test-reducer'>
      <div className=''>
        <input
          onChange={() => dispatch({ type: "CHANGE" })}
          type='text'
          name=''
          id=''
        />
        <input
          onChange={() => dispatch({ type: "CHANGE" })}
          type='text'
          name=''
          id=''
        />
        <input
          onChange={() => dispatch({ type: "CHANGE" })}
          type='text'
          name=''
          id=''
        />
        <input
          onChange={() => dispatch({ type: "CHANGE" })}
          type='text'
          name=''
          id=''
        />
      </div>
    </div>
  );
}
