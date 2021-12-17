import React, { useState } from 'react'
import './App.scss'
// import Test from './Test.js'
// import Test2 from './Test2.js'
// import TodoList from './TodoList.js'
// import Content from './Content.js'
// import Countdown from './Countdown.js'
// import Avatar from './Avatar.js'
// import ChatApp from './ChatApp.js'
// import Memo from './Memo.js'
import UseMemo from './UseMemo.js'

// import UseRef from './UseRef.js'
// import UseLayoutEffect from './UseLayoutEffect.js'

function App() {
  const [show, setShow] = useState(false)
  return (
    <div className='App'>
      {/* <Test /> */}
      {/* <Test2 /> */}
      {/* <TodoList /> */}
      <button className='btn' onClick={() => setShow(!show)}>
        <p>Toggle</p>
      </button>
      {/* {show && <Content />} */}
      {/* {show && <Countdown />} */}
      {/* {show && <Avatar />} */}
      {/* {show && <ChatApp />} */}
      {/* {show && <UseLayoutEffect />} */}
      {/* <UseRef /> */}
      {/* <Memo /> */}
      <UseMemo />
    </div>
  )
}

export default App
