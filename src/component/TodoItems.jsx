import React from 'react'
import TodoItem from './TodoItem'
import style from "./TodoItems.module.css"
const TodoItems = ({todoItems}) => {

  return (
    <>
      <div className={style.itemsContainer}>
        {todoItems.map((item,id)=>(<TodoItem key={id} todoName={item.name} todoDate={item.dueDate} />))}
        

      </div>
    </>
  )
}

export default TodoItems