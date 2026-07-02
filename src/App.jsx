import React, { useState } from "react";
import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";

import TodoItems from "./component/TodoItems";
import WelcomeMessage from "./component/WelcomeMessage";

const App = () => {
  const initialTodoItems = [];
  const [todoItems, setTodoItems] = useState(initialTodoItems);
  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  function handleDeleteItem(todoItemName) {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);

    setTodoItems(newTodoItems);
  }
  return (
    <center className="todo-Container">
      <AppName />

      <AddTodo onNewItem={handleNewItem} />
     <WelcomeMessage todoItems={todoItems}/>

      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
};

export default App;
