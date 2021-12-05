import React, { useState } from 'react'
import { useGlobalContext } from './context'

// components
import Navbar from './Navbar'
import CartContainer from './CartContainer'
// item

function App() {
  const { loading } = useGlobalContext()
  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App

// import React from 'react'
// import { useGlobalContext } from './context'

// // components
// import Navbar from './Navbar'
// import CartContainer from './CartContainer'
// // items

// function App() {
//   // if (loading) {
//   //   return (
//   //     <div className='loading'>
//   //       <h1>Loading...</h1>
//   //     </div>
//   //   )
//   // }
//   return (
//     <main>
//       <Navbar />
//       <CartContainer />
//     </main>
//   )
// }

// export default App
