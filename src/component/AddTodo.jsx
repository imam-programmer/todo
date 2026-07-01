import React from 'react'

const AddTodo = () => {
  return (
    <div className='container'>
        <div class="row justify-content-between kg-row">
    <div class="col-4">
      <input  type="text" placeholder='add task...' />
    </div>
    <div class="col-4">
      <input type="date" name="" id="" />
    </div>
    <div class="col-2">
      <button type="button" class="btn btn-info kg-button">Add</button>
    </div>
  </div></div>
  )
}

export default AddTodo