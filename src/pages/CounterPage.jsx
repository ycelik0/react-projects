import React, { useState, useEffect } from 'react'

const CounterPage = () => {
  const initialCount = () => Number(localStorage.getItem('counter'));
  const [counter, setCounter] = useState(initialCount);

  useEffect(() => {
    localStorage.setItem('counter', JSON.stringify(counter));
  }, [counter]);

  const decrement = () => setCounter(counter - 1);
  const increment = () => setCounter(counter + 1);

  return (
    <main className='flex justify-center'>
      <div className='flex gap-5 items-center mt-[10%]'>
        <button className='bg-gray-600 text-white text-2xl w-[3rem] h-[3rem] transition-all hover:bg-gray-900' onClick={decrement}>
          -
        </button>
        <div variant='h5'>{counter}</div>
        <button className='bg-gray-600 text-white text-2xl w-[3rem] h-[3rem] transition-all hover:bg-gray-900' onClick={increment}>
          +
        </button>
      </div>
    </main>
  )
}

export default CounterPage;