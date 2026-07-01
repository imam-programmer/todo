import React from 'react'

const TodoItem1 = () => {
    let todoName="Buy milk";
    let todoDate="4/10/2026"
  return (
    <div className='container '>
         <div class="row justify-content-between  kg-row">
        <div class="col-4">
           {todoName}
        </div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default TodoItem1