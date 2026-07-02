import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import style from "./TodoItems.module.css"
import { TodoItemsContext } from './store/TodoItemsStore'
const TodoItems = () => {
const {todoItems} = useContext(TodoItemsContext)

  return (
    <>
      <div className={style.itemsContainer}>
        {todoItems.map((item,id)=>(
          <TodoItem key={id} todoName={item.name} todoDate={item.dueDate}/>
          ))}
        

      </div>
    </>
  )
}

export default TodoItems