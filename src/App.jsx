import React, { useState } from "react";
import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";

import TodoItems from "./component/TodoItems";
import WelcomeMessage from "./component/WelcomeMessage";

const App = () => {
  const initialTodoItems = [

  ];
  const [todoItems, setTodoItems] = useState(initialTodoItems)
  const handleNewItem=(itemName,itemDueDate)=>{
console.log(itemDueDate,itemName)
const newTodoItems=[...todoItems,{name:itemName,dueDate:itemDueDate},
]
setTodoItems(newTodoItems)
  }
  return (
    <center className="todo-Container">
      <AppName />

      <AddTodo onNewItem={handleNewItem}/>
      {
        todoItems.length==0 && <WelcomeMessage/>
      }
     
      <TodoItems todoItems={todoItems} />
    </center>
  );
};

export default App;
