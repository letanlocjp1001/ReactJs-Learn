import React, { useState, useEffect, useLayoutEffect } from 'react'

// UseEffect
// 1. Cap nhat lai state
// 2. Cap nhat lai DOM (mutated)
// 3.Render lai UI
// 4. Goi cleanup neu deps thay doi
// 5. Goi useEffect callback

//UseLayoutEffect
// 1. Cap nhat lai state
// 2. Cap nhat lai DOM (mutated)
// 3. Goi cleanupp neu deps thay doi (sync)
// 4. Goi useLayoutEffect callback (sync)
// 5. Render lai UI
const UseLayoutEffect = () => {
  const [count, setCount] = useState(0)

  useLayoutEffect(() => {
    if (count > 3) {
      setCount(0)
    }
  }, [count])

  const handleClick = () => {
    return setCount(count + 1)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default UseLayoutEffect
