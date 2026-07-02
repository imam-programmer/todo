import React from "react";
import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";

import TodoItems from "./component/TodoItems";

const App = () => {
  const todoItems=[
    {
      name:"Buy milk",
      dueDate:"4/10/2026"
    },
       {
      name:"Go to college",
      dueDate:"4/10/2026"
    }
    ,
       {
      name:"are you mad",
      dueDate:"hup bata"
    }
  ]
  return (
    <center className="todo-Container">
      <AppName />

      <AddTodo />
      <TodoItems todoItems={todoItems}/>
    
    </center>
  );
};

export default App;
