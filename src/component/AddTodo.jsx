import React from 'react'

const AddTodo = () => {
  return (
    <div className='container'>
        <div className="row justify-content-between kg-row">
    <div className="col-4">
      <input  type="text" placeholder='add task...' />
    </div>
    <div className="col-4">
      <input type="date" name="" id="" />
    </div>
    <div className="col-2">
      <button type="button" className="btn btn-info kg-button">Add</button>
    </div>
  </div></div>
  )
}

export default AddTodo