import "./App.css";
import { AddTodo } from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div>
      <h1> learn about redux</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
