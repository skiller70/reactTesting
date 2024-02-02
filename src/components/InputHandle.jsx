import React, { useState } from "react";

const InputHandle = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    setEmail("");
  };

  return (
    <div className=" flex justify-center items-center w-full h-screen flex-col gap-4">
      <h1>Form</h1>
      <h2>email:{email}</h2>
      <div>
        <h1>Email</h1>
        <input
          value={email}
          type="email"
          name=""
          id=""
          className=" border-2 border-blue-500 rounded-md pl-2"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <button
        className=" px-2 py-1.5 rounded-md border-2 bg-blue-500 text-white    "
        type="submit"
        onClick={handleSubmit}
      >
        {" "}
        Submit
      </button>
    </div>
  );
};

export default InputHandle;
