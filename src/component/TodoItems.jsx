import React from 'react'
import TodoItem from './TodoItem'
import style from "./TodoItems.module.css"
const TodoItems = ({todoItems}) => {
    console.log(todoItems)
  return (
    <>
      <div className={style.itemsContainer}>
        {todoItems.map(item=><TodoItem todoName={item.name} todoDate={item.dueDate} />)}
        

      </div>
    </>
  )
}

export default TodoItems