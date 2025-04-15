import React from "react";
import TodoItem from "./TodoItem";
import "./style.css";
interface ItemTodo {
  id: number;
  title: string;
}
interface Todo {
  items: ItemTodo[];
}

const Todo: React.FC<Todo> = (p) => {
  return (
    <div className="todo-container">
      <ol>
        {/* <TodoItem title={"Eat"} />
        <TodoItem title={"Sleep"} />
        <TodoItem title={"code"} />
        <TodoItem title={"Repeat"} /> */}
        {p.items.map((item) => (
          <TodoItem key={item.id} title={item.title} />
        ))}
      </ol>
    </div>
  );
};
export default Todo;
