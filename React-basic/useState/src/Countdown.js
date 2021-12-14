import React, { useState, useEffect } from 'react'

const Countdown = () => {
  const [countdown, setCountdown] = useState(180)

  useEffect(() => {
    const timeId = setInterval(() => {
      setCountdown((prevState) => prevState - 1)
    }, 1000)

    return () => {
      clearInterval(timeId)
    }
  }, [])
  return (
    <div>
      <h1>{countdown}</h1>
    </div>
  )
}

export default Countdown
