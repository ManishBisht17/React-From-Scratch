import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlices";

export const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault(); // prevent page refresh
    if (input.trim() === "") return; // avoid empty todos
    dispatch(addTodo(input));
    setInput(""); // clear input field
  };

  return (
    <form onSubmit={addTodoHandler}>
      <input
        type="text"
        value={input}
        placeholder="Add a todo"
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};
