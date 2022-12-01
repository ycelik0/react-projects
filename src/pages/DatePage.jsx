import React, { useState, useEffect } from 'react'

const DatePage = () => {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  
  return (
    <main>
      <Date date={time} />
    </main>
  )
}

export default DatePage;