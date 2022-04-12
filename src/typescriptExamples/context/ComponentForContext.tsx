import { useContext } from "react";
import { InputValueContext } from "./Context";

export default function ComponentForContext() {
  const { state, dispatch } = useContext(InputValueContext);

  return (
    <section>
      <p>Value: {state.inputValue}</p>
      <button onClick={() => dispatch({ type: "SET_INPUT_VALUE_TO_100" })}>
        SET VALUE TO 100
      </button>
    </section>
  );
}
