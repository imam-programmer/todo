import React from 'react'

const TodoItem = ({todoName,todoDate}) => {
//   let todoName="Buy milk";
//     let todoDate="4/10/2026"
  return (
    <div className='container '>
         <div className="row justify-content-between  kg-row">
        <div className="col-4">
           {todoName}
        </div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default TodoItem