import { useState, useEffect } from 'react'
import './App.css'
import { formatDate, formatTime } from './utils/timeFormat';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1>Demo App</h1>
      <p className='time'>
        Today is {formatDate(time)} and it is {formatTime(time)}.
      </p>
    </>
  )
}

export default App
