import React, { useState } from 'react'
import './App.css'
import Test from './Test.js'
import Test2 from './Test2.js'
import TodoList from './TodoList.js'

// const orders = [100, 200, 300]

function App() {
  // const [count, setCount] = useState(() => {
  //   const total = orders.reduce((total, cur) => {
  //     return (total += cur)
  //   })
  //   console.log(total)
  //   return total
  // })
  // const handleIncrease = () => {
  //   setCount((prevState) => prevState + 1)
  // }

  // const [info, setInfo] = useState({
  //   name: 'Kaneki Ken',
  //   age: 18,
  //   address: 'Osaka',
  // })

  // const handleUpdate = () => {
  //   setInfo((prev) => {
  //     return {
  //       ...prev,
  //       work: 'IT',
  //     }
  //   })
  // }
  return (
    <div className='App' style={{ padding: 20 }}>
      {/* <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>Increase</button> */}
      {/* <Test /> */}
      {/* <Test2 /> */}
      <TodoList />
    </div>
  )
}

export default App
