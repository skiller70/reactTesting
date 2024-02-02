import React, { useContext } from "react";
import { myContext } from "../providers/ThemeProvider";

const SecondComponent = () => {
  const { text, setText } = useContext(myContext);
  return (
    <div className=" flex flex-col gap-8">
      SecondComponent Context Value : {text}
      <button
        onClick={() => {
          setText("second component text");
        }}
        className=" border-2 bg-green-400  text-white font-medium rounded-md"
      >
        second button
      </button>
    </div>
  );
};  

export default SecondComponent;
