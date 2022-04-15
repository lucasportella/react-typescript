import React, { createContext, useReducer } from "react";

// types for state and action
type AppState = typeof initialState;
type Action = 
  | { type: "SET_INPUT_VALUE", payload: number}
  | { type: "SET_INPUT_VALUE_TO_100"}

  // type for props
  interface InputProviderProps {
    children: React.ReactNode;
  }

const initialState = {
  inputValue: 0,
};

const reducer = (state: AppState, action: Action) => {
// no destructuring
  switch (action.type) {
    case "SET_INPUT_VALUE":
      return {
        ...state,
        inputValue: action.payload,
      };
    case "SET_INPUT_VALUE_TO_100":
      return {
        ...state,
        inputValue: 100,
      };
    default:
      return state;
  }
};
// setting AppState and Action types to createContext
const InputValueContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>
}>({state: initialState, dispatch: () => {}});

function InputValueProvider({children}: InputProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
// we could have created an interface Context instead:
// interface Context {
//     state: AppState;
//   dispatch: React.Dispatch<Action>
// }

  return (
    <InputValueContext.Provider value={{ state, dispatch }}>
      {children}
    </InputValueContext.Provider>
  );
}

export { InputValueContext, InputValueProvider };
