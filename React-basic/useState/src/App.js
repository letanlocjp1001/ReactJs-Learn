import React, { useState } from 'react'
import './App.css'
import Test from './Test.js'
import Test2 from './Test2.js'
import TodoList from './TodoList.js'
import Content from './Content.js'

function App() {
  const [show, setShow] = useState(false)
  return (
    <div className='App' style={{ padding: 20 }}>
      {/* <Test /> */}
      {/* <Test2 /> */}
      {/* <TodoList /> */}
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content />}
    </div>
  )
}

export default App
