import { Input } from "@chakra-ui/react";
import React, { useRef } from "react";

export const RefAndState = () => {
  const inputRef = useRef(null);

  return (
    <div>
      <Input border="1px solid" ref={inputRef} type="text" />
      <Input border="1px solid" ref={inputRef} type="text" />
      <button
        onClick={() => {
          inputRef.current?.focus();
        }}
      >
        Inputa fokuslan
      </button>
    </div>
  );
};
