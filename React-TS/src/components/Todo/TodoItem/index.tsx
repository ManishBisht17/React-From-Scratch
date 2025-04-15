import React from "react";
import "./style.css";
interface TodoItemProps {
  title?: string;
}
const TodoItem: React.FC<TodoItemProps> = (prop) => {
  return <li>{prop.title}</li>;
};

export default TodoItem;
