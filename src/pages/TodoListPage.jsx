import React, { useState, useEffect } from 'react'
import TodoForm from '../components/TodoList/TodoForm';
import Todos from '../components/TodoList/Todos';

const TodoListPage = () => {
  const [todos, setTodos] = useState([]);
  
  const addTodosHandler = (todo) => {
    setTodos([...todos, todo]);
  }
  return (
    <main className='flex flex-col bg-primary text-white h-full'>
      <TodoForm onSetTodo={addTodosHandler} />
      <Todos todos={todos} />
    </main>
  )
}

export default TodoListPage;