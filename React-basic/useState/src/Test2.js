import React, { useState } from 'react'

// Response from API server
const courses = [
  { id: 1, name: 'HTML, CSS' },
  { id: 2, name: 'Javascript' },
  { id: 3, name: 'ReactJS' },
]
const Test2 = () => {
  const [checked, setChecked] = useState([])
  const handleSubmit = () => {
    //  CALL API
  }
  console.log(checked)
  const handleCheck = (id) => {
    setChecked((prev) => {
      const isChecked = checked.includes(id)
      if (isChecked) {
        return checked.filter((item) => item !== id)
      } else {
        return [...prev, id]
      }
    })
  }

  return (
    <div style={{ padding: 32 }}>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type='checkbox'
            onChange={() => handleCheck(course.id)}
            checked={checked.includes(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>
    </div>
  )
}

export default Test2
