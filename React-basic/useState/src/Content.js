import React, { useEffect, useState } from 'react'

//Mounted / Unmounted

//Side Effects
// 1.Update DOM events
// -Blog title
// 2.Call API
// 3.Listen DOM events
// -Scroll
// -Resize
// 4.Cleanup
// -Remove listener/ Unsubscribe
// -Clear timer

//1. useEffect(callback)
// - Gọi callback mỗi khi componend re-render
// - Goi callback sau khi component them element vao DOM
// 2. useEffect(callback,[])
// -Chi goi callback 1 lan sau khi component mounted
// 3. useEffect(callback,[deps])
// - Callback se dc goi lai moi khi deps thay doi
// -----
// 1.Callback luon dc goi sau khi component mouted
// 2.Cleanup function luon dc goi trc khi component unmounted

const tabs = ['posts', 'photos', 'albums']

function Content() {
  const [title, setTitle] = useState('')
  const [posts, setPosts] = useState([])
  const [type, setType] = useState('posts')
  const [showGoToTop, setShowGoToTop] = useState(false)

  useEffect(() => {
    console.log('Title change')
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts)
      })
  }, [type])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setShowGoToTop(true)
      } else {
        setShowGoToTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
  }, [])
  return (
    <div>
      {tabs.map((tab, index) => (
        <button
          style={
            type === tab
              ? {
                  color: '#FFF',
                  backgroundColor: '#333',
                }
              : {}
          }
          key={index}
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {posts.map((e) => {
          return <li key={e.id}>{e.title}</li>
        })}
      </ul>
      {showGoToTop && (
        <button style={{ position: 'fixed', right: 20, bottom: 20 }}>
          Go to Top
        </button>
      )}
    </div>
  )
}

export default Content
