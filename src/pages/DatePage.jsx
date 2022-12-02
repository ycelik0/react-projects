import React, { useState, useEffect } from 'react'

const DatePage = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  
  return (
    <main className='bg-primary text-white h-full'>
      <Date />
    </main>
  )
}

export default DatePage;