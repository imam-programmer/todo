import React from "react";
import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItem from "./component/TodoItem";

const App = () => {
  return (
    <center className="todo-Container">
      <AppName />

      <AddTodo />
      <div className="items-container">
        <TodoItem todoName="Buy milk" todoDate="4/10/2026" />
        <TodoItem todoName="Go to College" todoDate="4/10/2026" />
      </div>
    </center>
  );
};

export default App;
