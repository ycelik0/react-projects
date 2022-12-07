import React, { useState } from 'react'
import TodoForm from '../components/TodoList/TodoForm';
import Todos from '../components/TodoList/Todos';

const TodoListPage = () => {
  const [todos, setTodos] = useState([]);
  
  const addTodosHandler = (todo) => {
    setTodos([...todos, todo]);
  }
  return (
    <main className='flex flex-col bg-primary text-white p-5'>
      <TodoForm onSetTodo={addTodosHandler} />
      <Todos todos={todos} />
    </main>
  )
}

export default TodoListPage;