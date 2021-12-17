import React, { useState, useMemo, memo, useRef } from 'react'

// useMemo co tac dung trach thuc hien 1 logic nao do khong can thiet
const UseMemo = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProducts] = useState([])

  const nameRef = useRef()
  const handleSubmit = () => {
    setProducts([...products, { name, price: parseInt(price) }])
    setName('')
    setPrice('')
    nameRef.current.focus()
  }
  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      console.log('Bi Tinh Toan lai')
      return (result += prod.price)
    }, 0)
    return result
  }, [products])
  //  Gia tri tra ra tu input luon luon la Strings nen fai su ly no thanh so vs parseInt(price) hoac dau cong phia trc
  return (
    <div>
      <input
        ref={nameRef}
        value={name}
        placeholder='Enter name...'
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        value={price}
        placeholder='Enter price...'
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total: {total}
      <ul>
        {products.map((product, index) => {
          return (
            <li key={index}>
              {product.name} - {product.price}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default UseMemo
