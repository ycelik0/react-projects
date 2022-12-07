import React from 'react'
import Todo from './Todo';

const Todos = (props) => {
  const todos = props.todos
  
  

  return (
    <div className='todo__box bg-secondary w-[30rem] min-h-[30rem] h-fit rounded-2xl px-4 py-5 self-center flex flex-col gap-y-4'>
      {props.todos.map(todo => {
        return <Todo key={todo.key} todo={todo} />
      })}
    </div>
  )
}

export default Todos;