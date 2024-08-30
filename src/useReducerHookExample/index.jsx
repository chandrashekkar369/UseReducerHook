import React from "react";
import { useReducer } from "react";

const initialState = {
  hideTextFlag: false,
  toggleTextFlag: false,
};

const SHOW_TEXT = "SHOW_TEXT";
const HIDE_TEXT = "HIDE_TEXT";
const TOGGLE_TEXT_STYLE = "TOGGLE_TEXT_STYLE";

const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_TEXT:
      return {
        ...state,
        hideTextFlag: false,
      };
    case HIDE_TEXT:
      return {
        ...state,
        hideTextFlag: true,
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
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div>
      <h1>useReducerHook Learning</h1>
      {!state.hideTextFlag && (
        <p
          style={{
            backgroundColor: state.toggleTextFlag === true ? "black" : "white",
            color: state.toggleTextFlag === true ? "white" : "black",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit alias
          dolorum laboriosam architecto itaque labore voluptatum fugit ea
          officia porro totam iusto quasi quo, excepturi eligendi facere
          doloremque sequi ipsum!
        </p>
      )}
      <button onClick={() => dispatch({ type: SHOW_TEXT })}>Show Text</button>
      <button onClick={() => dispatch({ type: HIDE_TEXT })}>Hide Text</button>
      <button onClick={() => dispatch({ type: TOGGLE_TEXT_STYLE })}>
        Toggle Text Style
      </button>
    </div>
  );
}
