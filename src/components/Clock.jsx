import { useEffect, useState } from "react"
import { getFormattedTime } from "../utils/timeFormat"

export function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="clock-container">
      <p className="time">Today is {getFormattedTime(time)}.</p>
    </div>
  )
}

