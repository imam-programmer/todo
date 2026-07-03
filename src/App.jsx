import React from "react";
import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItems from "./component/TodoItems";
import WelcomeMessage from "./component/WelcomeMessage";
import TodoItemsContextProvider from "./component/store/TodoItemsStore";

const App = () => {
  return (
    <TodoItemsContextProvider>
      <center className="todo-Container">
        <AppName />

        <AddTodo />
        <WelcomeMessage />

        <TodoItems />
      </center>
    </TodoItemsContextProvider>
  );
};

export default App;
