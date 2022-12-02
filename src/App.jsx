import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import CounterPage from './pages/CounterPage'
import DatePage from './pages/DatePage'
import Navbar from './components/Navbar'
import TodoListPage from './pages/TodoListPage'

const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/counter' element={<CounterPage />} />
        <Route path='/date' element={<DatePage />} />
        <Route path='/todolist' element={<TodoListPage />} />
      </Routes>
    </>
  )
}

export default App
