import React, { memo } from 'react'

const Testmemo = ({ count, onIncrease }) => {
  console.log('re-render')
  return (
    <>
      <h2>HELLO ANH EM F8 {count}</h2>
      <button onClick={onIncrease}>Click me2</button>
    </>
  )
}

export default memo(Testmemo)
