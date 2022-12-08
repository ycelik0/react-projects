import React, { useState, useEffect } from "react";
import TodoForm from "../components/TodoList/TodoForm";
import Todos from "../components/TodoList/Todos";
import { v4 as uuidv4 } from "uuid";

const TodoListPage = () => {
  const [todos, setTodos] = useState([
    { key: uuidv4(), todoText: "Dummy Todo 1", completed: false },
    { key: uuidv4(), todoText: "Dummy Todo 2", completed: true },
  ]);

  const addTodosHandler = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <main className="flex flex-col bg-primary text-white p-5">
      <TodoForm onSetTodo={addTodosHandler} />
      <Todos todos={todos} setTodos={setTodos} />
    </main>
  );
};

export default TodoListPage;
