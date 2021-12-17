import React, { useReducer } from 'react'

// 1.Init state
const initState = {
  job: '',
  jobs: [],
}

// 2. Actions
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

// 3. Reducer
const reducer = (state, action) => {}
//4. Dispatch
const TodoListReducer = () => {
  const [state, dispatch] = useReducer(reducer, initState)

  const { job, jobs } = state
  return (
    <div>
      <h3>Todo</h3>
      <input value={job} placeholder='Enter todo' onChange={(e) => {}} />
      <button>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job} &times;</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoListReducer
