import React, { useState } from "react";

const withShareInput = (WrappedComponent) => {
  return (props) => {
    const [input, setInput] = useState("hello"); // Shared input state
    return <WrappedComponent input={input} setInput={setInput} {...props} />;
  };
};

export default withShareInput;
