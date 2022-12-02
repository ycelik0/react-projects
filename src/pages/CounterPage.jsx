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
    <main className='flex justify-center bg-primary text-white h-full'>
      <div className='flex gap-5 h-fit mt-[12rem]'>
        <button className='bg-secondaryLight text-white text-2xl w-[3rem] h-[3rem] transition-all hover:bg-secondary' onClick={decrement}>
          -
        </button>
        <div className='flex items-center text-2xl'>{counter}</div>
        <button className='bg-secondaryLight text-white text-2xl w-[3rem] h-[3rem] transition-all hover:bg-secondary' onClick={increment}>
          +
        </button>
      </div>
    </main>
  )
}

export default CounterPage;