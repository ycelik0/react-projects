import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid";

const TodoForm = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [todoStatus, setTodoStatus] = useState(false);
  const [isInputValid, setIsInputValid] = useState(true);

  const inputHandler = (event) => {
    setInputValue(event.target.value);
  }

  const onFormSubmit = (event) => {
    event.preventDefault()
    if (inputValue.trim().length !== 0) {
      props.onSetTodo({key: uuidv4(), todoText: inputValue, completed: todoStatus});
      setInputValue('');
      setTodoStatus('');
      setIsInputValid(true)
    } else {
      setIsInputValid(false)
    }
  }

  return (
    <form 
    className={`self-center my-[5rem] backdrop-blur-xl rounded border-2 border-${isInputValid ? 'secondary' : 'red-600'} shadow shadow-secondary flex align-middle`}
    onSubmit={onFormSubmit}
    >
      <input 
      type="text" 
      className='px-4 py-3 w-[18rem] bg-transparent outline-none' 
      autoFocus 
      onChange={inputHandler}
      placeholder='Enter Todo...'
      />
      <button type="submit" className='py-2 px-4 text-2xl transition-all rounded rotate-0 hover:rotate-90 hover:bg-orange-500'>
      <span className='rotate-0 hover:rotate-90'>+</span>
      </button>
    </form>
  )
}

export default TodoForm;