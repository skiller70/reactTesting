import React, { useContext } from "react";
import SecondComponent from "./SecondComponent";
import { myContext } from "../providers/ThemeProvider";

const FirstComponent = () => {
  const { text, setText } = useContext(myContext);
  return (
    <div className=" flex justify-center items-center w-full h-screen flex-col gap-6 text-xl font-medium">
      FirstComponent Context Value : {text}
      <button
        onClick={() => {
          setText("first component text");
        }}
      >
        first button
      </button>
      <SecondComponent />
    </div>
  );
};

export default FirstComponent;
