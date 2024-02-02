import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

const TestingRedux = () => {
  const dispatch = useDispatch();
  const num = useSelector((state) => {
    return state.mathReducer.num;
  });

  return (
    <div>
      <h1>{num}</h1>
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={() => {
            dispatch({ type: "increment" });
          }}
        >
          increment
        </button>

        <button
          onClick={() => {
            dispatch({ type: "decrement", action: { value: 15 } });
          }}
        >
          decrement
        </button>
      </div>
    </div>
  );
};

export default TestingRedux;
