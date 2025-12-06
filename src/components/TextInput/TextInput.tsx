import React from "react";
import type { TextInputProps } from "../../types";

function TextInput(props: TextInputProps) {
  const onTextChange = props.onTextChange;
  const placeholder = props.placeholder ?? "Start typing...";
  const initialValue = props.initialValue ?? "";

return (
  <div>
    <input
      type="text"
      placeholder={placeholder}
      defaultValue={initialValue}
      onChange={(e) => onTextChange(e.target.value)}
    />
  </div>
); 
}


export default TextInput;
