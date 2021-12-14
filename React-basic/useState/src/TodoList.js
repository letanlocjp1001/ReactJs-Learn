import React, { useState } from 'react'

const TodoList = () => {
  const [job, setJob] = useState()
  const [jobs, setJobs] = useState(() => {
    const storegeJobs = JSON.parse(localStorage.getItem('jobs'))
    console.log(storegeJobs)
    return storegeJobs ?? []
  })

  const handleSubmit = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job]

      //Save to local storage
      const jsonJobs = JSON.stringify(newJobs)
      localStorage.setItem('jobs', jsonJobs)
      return newJobs
    })
    setJob('')
  }
  return (
    <div>
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job, index) => {
          return <li key={index}>{job}</li>
        })}
      </ul>
    </div>
  )
}

export default TodoList
