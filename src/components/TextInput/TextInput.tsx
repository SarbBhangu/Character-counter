import React from "react";
import type { TextInputProps } from "../../types";

function TextInput(props: TextInputProps) {
  const onTextChange = props.onTextChange;
  const placeholder = props.placeholder ?? "Start typing...";
  const initialValue = props.initialValue ?? "";

  return (
    <div>
      {/* we'll add the textarea next */}
    </div>
  );
}

export default TextInput;
