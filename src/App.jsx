import React, { useReducer, useState } from "react";
import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";

import TodoItems from "./component/TodoItems";
import WelcomeMessage from "./component/WelcomeMessage";
import { TodoItemsContext } from "./component/store/TodoItemsStore";


const todoItemsReducer=(currTodoItems,action)=>{
  let newTodoItems= currTodoItems
  if(action.type=="NEW_ITEM"){
  newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
    setTodoItems(newTodoItems);
  }else if(action.type==="DELETE_ITEM"){

  }
return newTodoItems
}
const App = () => {

  const [todoItems, setTodoItems] = useState([]);
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer,[])
  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction={
      type:"NEW_ITEM",
      payload:{
        itemName,
        itemDueDate
      }
    };
    dispatchTodoItems(newItemAction)
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
