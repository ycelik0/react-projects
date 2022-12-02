import React from 'react'

const Todo = (props) => {
  return (
    <div className={`todo flex justify-between border-2 border-secondaryLight p-3 rounded status-${props.todo.completed ? 'done' : 'undone'}`}>
      <div className="todo__text flex items-center">{props.todo.todoText}</div>
      <div className="todo__buttons flex gap-x-2">
        <button className="todo__done align-middle">
          <svg className='fill-green-500 transition-all hover:fill-green-700' xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
        </button>
        <button className="todo__delete align-middle">
          <svg className='fill-red-600 transition-all hover:fill-red-800' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"></path></svg>
        </button>
      </div>
    </div>
  )
}

export default Todo;