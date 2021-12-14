import React, { useState, useEffect } from 'react'

const lessons = [
  { id: 1, name: 'ReactJS la gi? Tai sao nen hojc ReactJS' },
  { id: 2, name: 'Hoc useState' },
  { id: 3, name: 'ReactJS la gi? useEffect la gi' },
]
const ChatApp = () => {
  const [lessonId, setLessonId] = useState(1)

  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail)
    }
    window.addEventListener(`lesson-${lessonId}`, handleComment)
    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComment)
    }
  }, [lessonId])
  return (
    <div>
      <ul>
        {lessons.map((lesson) => {
          return (
            <li
              key={lesson.id}
              style={{ color: lessonId === lesson.id ? 'red' : '#333' }}
              onClick={() => setLessonId(lesson.id)}
            >
              {lesson.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ChatApp
