import React, { useState, useCallback } from 'react'
import Testmemo from './Testmemo.js'
// tinh nang cua memo dung de ghi nho 1 prop cua 1 components de xem co re-render no hay khong, de toi uu hieu nang, trach tinh trang re-render nhung luc khong can thiet

// 1. memo() => Highter Order Component (HOC)
// 2. useCallback()
// - Reference types
// - React memo()

// useCallback dung de trach tao ra cac ham moi khong can thiet trong function component
const Memo = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const increase = () => {
    setCount(count + 1)
  }
  const increase2 = useCallback(() => {
    setCount2((prevCount) => prevCount + 1)
  }, [])

  return (
    <div>
      <Testmemo count={count} onIncrease={increase2} />
      {/* <Testmemo /> */}
      <h1>{count}</h1>
      <h1>{count2}</h1>
      <button onClick={increase}>Click me</button>
    </div>
  )
}

export default Memo
