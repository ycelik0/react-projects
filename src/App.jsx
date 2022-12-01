import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import CounterPage from './pages/CounterPage'
import DatePage from './pages/DatePage'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/counter' element={<CounterPage />} />
        <Route path='/date' element={<DatePage />} />
      </Routes>
    </>
  )
}

export default App
