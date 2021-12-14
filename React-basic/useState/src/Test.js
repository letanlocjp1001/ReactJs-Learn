import React, { useState } from 'react'

const gifts = ['CPU i9', 'RAM 32GB RGB', 'RGB Keyboard']

const Test = () => {
  const [gift, setGift] = useState()

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length)
    return setGift(gifts[index])
  }
  return (
    <div style={{ padding: 32 }}>
      <h1>{gift || 'Chua co phan thuong'}</h1>
      <button onClick={randomGift}>Lay Thuong</button>
    </div>
  )
}

export default Test
