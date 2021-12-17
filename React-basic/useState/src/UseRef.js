import React, { useRef, useState, useEffect } from 'react'
// Luu cac gia tri qua mot tham chieu ben ngoai

const UseRef = () => {
  const [count, setCount] = useState(60)
  const timerId = useRef()
  const prevCount = useRef()
  // Cac gia tri trong useRef luon luon la Object
  // De lay gia tri thi timerId.current

  useEffect(() => {
    prevCount.current = count
  }, [count])
  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1)
    }, 1000)
    console.log('Start ->', timerId.current)
  }

  const handleStop = () => {
    clearInterval(timerId.current)
    console.log('Stop ->', timerId.current)
  }
  console.log(count, prevCount.current)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  )
}

export default UseRef
