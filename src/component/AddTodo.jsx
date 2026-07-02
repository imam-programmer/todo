import React, { useContext, useState } from 'react'
import { IoAddCircleOutline } from "react-icons/io5";
import { TodoItemsContext } from './store/TodoItemsStore';

const AddTodo = () => {
  const {addNewItem}=useContext(TodoItemsContext)
const [todoName, setTodoName] = useState("")
const [dueDate, setDueDate] = useState("")
function handleNameChange(event){
setTodoName(event.target.value)
}
function handleDateChange(event){
  setDueDate(event.target.value)
}
function handleAddButtonClicked(){
addNewItem(todoName,dueDate);
setDueDate("")
setTodoName("")
}
  return (
    <div className='container'>
        <div className="row justify-content-between kg-row  align-items-center">
    <div className="col-4">
      <input  value={todoName} type="text" placeholder='add task...' onChange={handleNameChange} />
    </div>
    <div className="col-4">
      <input value={dueDate} type="date" name="" id="" onChange={handleDateChange}/>
    </div>
    <div className="col-2">
      <button type="button" className="btn btn-info kg-button"
      onClick={handleAddButtonClicked}><IoAddCircleOutline size={25}/></button>
    </div>
  </div>
  </div>
  )
}

export default AddTodo