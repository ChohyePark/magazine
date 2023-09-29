import { useState } from "react";

export default function (initialValue) {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const submitEvent = (inputname) => {
    setInputValue({ [inputname]: "" });
  };

  return [inputValue, handleChange, submitEvent];
}
