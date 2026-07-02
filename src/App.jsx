import React, { useState } from "react";
import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";

import TodoItems from "./component/TodoItems";
import WelcomeMessage from "./component/WelcomeMessage";
import { TodoItemsContext } from "./component/store/TodoItemsStore";

const App = () => {
  const initialTodoItems = [];
  const [todoItems, setTodoItems] = useState(initialTodoItems);
  const addNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  function deleteItem(todoItemName) {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);

    setTodoItems(newTodoItems);
  }
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todo-Container">
        <AppName />

        <AddTodo />
        <WelcomeMessage />

        <TodoItems/>
      </center>
    </TodoItemsContext.Provider>
  );
};

export default App;
