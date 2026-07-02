import React from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri";
const TodoItem = ({todoName,todoDate,onDeleteClick}) => {

  return (
    <div className='container '>
         <div className="row justify-content-between  kg-row align-items-center">
        <div className="col-4">
           {todoName}
        </div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button" onClick={()=>onDeleteClick(todoName)}>
            <RiDeleteBin6Fill size={20}/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TodoItem