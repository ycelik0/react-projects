import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid";

const TodoForm = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [todoStatus, setTodoStatus] = useState('');

  const inputHandler = (event) => {
    setInputValue(event.target.value);
  }

  const buttonHandler = (event) => {
    event.preventDefault()
    if (inputValue !== '') {
      setTodoStatus(false)
      props.onSetTodo({
        key: uuidv4(),
        todoText: inputValue,
        completed: todoStatus,
      });
      setInputValue('');
      setTodoStatus('');
    }
  }

  return (
    <form className={`self-center my-[5rem] backdrop-blur-xl rounded border-2 border-secondary shadow shadow-secondary`} style={{
      borderColor: (inputValue == '' ? 'red' : '')
    }}>
      <input type="text" className='px-4 py-3 w-[18rem] bg-transparent outline-none' onChange={inputHandler} />
      <button type="submit" className='py-3 px-4 text-2xl transition-all rounded hover:bg-orange-500' onClick={buttonHandler}>+</button>
    </form>
  )
}

export default TodoForm;