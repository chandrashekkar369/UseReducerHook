import React from "react";
import { useReducer } from "react";

//initial state
const initialState = {
  hideTextFlag: false,
  toggleTextFlag: false,
};

//constants for action types
const HIDE_TEXT = "HIDE_TEXT";
const SHOW_TEXT = "SHOIW_TEXT";
const TOGGLE_TEXT_STYLE = "TOGGLE_TEXT_STYLE";

//reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case HIDE_TEXT:
      return {
        ...state,
        hideTextFlag: true,
      };
    case SHOW_TEXT:
      return {
        ...state,
        hideTextFlag: false,
      };
    case TOGGLE_TEXT_STYLE:
      return {
        ...state,
        toggleTextFlag: !state.toggleTextFlag,
      };
    default:
      return {
        ...state,
      };
  }
};

export default function UseReducerHookExample() {
  //   useReducer hook defined
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div>
      <h1>useReducer Hook Learning</h1>
      {!state.hideTextFlag && (
        <p
          style={{
            backgroundColor:
              state.toggleTextFlag === true
                ? "#242424"
                : "rgba(255, 255, 255, 0.57)",
            color:
              state.toggleTextFlag === true
                ? "rgba(255, 255, 255, 0.57)"
                : "#242424",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat
          ipsam, blanditiis nemo officiis doloremque iusto voluptatum distinctio
          nesciunt adipisci. Quod ratione placeat sed nemo deleniti aut dolorum
          aperiam eveniet.
        </p>
      )}
      {/* dispatch action types on the functionalities such as input change or button click */}
      <button onClick={() => dispatch({ type: HIDE_TEXT })}>Hide Text</button>
      <button onClick={() => dispatch({ type: SHOW_TEXT })}>Show Text</button>
      <button onClick={() => dispatch({ type: TOGGLE_TEXT_STYLE })}>
        Toggle Text Style
      </button>
    </div>
  );
}
