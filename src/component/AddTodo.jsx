import React, { useState } from 'react'

const AddTodo = ({onNewItem}) => {
const [todoName, setTodoName] = useState("")
const [dueDate, setDueDate] = useState("")
function handleNameChange(event){
setTodoName(event.target.value)
}
function handleDateChange(event){
  setDueDate(event.target.value)
}
function handleAddButtonClicked(){
onNewItem(todoName,dueDate);
setDueDate("")
setTodoName("")
}
  return (
    <div className='container'>
        <div className="row justify-content-between kg-row">
    <div className="col-4">
      <input  value={todoName} type="text" placeholder='add task...' onChange={handleNameChange} />
    </div>
    <div className="col-4">
      <input value={dueDate} type="date" name="" id="" onChange={handleDateChange}/>
    </div>
    <div className="col-2">
      <button type="button" className="btn btn-info kg-button"
      onClick={handleAddButtonClicked}>Add</button>
    </div>
  </div></div>
  )
}

export default AddTodo