import React, { useState } from "react";
import Todo from "./components/Todo";
import Counter from "./components/Counter";

const data = [
  {
    id: 1,
    title: "I need to relax my mind",
  },
  {
    id: 2,
    title: "I need to relax my body",
  },
  {
    id: 3,
    title: "I need to relax my anxienty",
  },
  {
    id: 4,
    title: "I need to relax my anxienty",
  },
  {
    id: 5,
    title: "I need to relax my anxienty",
  },
  {
    id: 6,
    title: "I need to relax my anxienty",
  },
  {
    id: 7,
    title: "I need to relax my anxienty",
  },
  {
    id: 8,
    title: "I need to relax my anxienty",
  },
  {
    id: 9,
    title: "I need to relax my anxienty",
  },
];
const App: React.FC = () => {
  const [state, setState] = useState<boolean>(true);
  return (
    <div style={{ border: "1px solid red" }}>
      <Todo items={data} />
      <button onClick={(e) => setState(!state)}>Toggle</button>
      {state ? <Counter /> : "no toggle"}
    </div>
  );
};
export default App;
