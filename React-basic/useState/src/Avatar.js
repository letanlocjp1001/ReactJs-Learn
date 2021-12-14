import React, { useState, useEffect } from 'react'
// file la 1 object nen co the them tuy y 1 prop
const Avatar = () => {
  const [avatar, setAvatar] = useState()

  useEffect(() => {
    // Cleanup
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview)
    }
  }, [avatar])
  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0]
    file.preview = URL.createObjectURL(file)
    setAvatar(file)
  }
  return (
    <div>
      <input type='file' onChange={handlePreviewAvatar} />
      {avatar && <img src={avatar.preview} alt='avatar' width='80%' />}
    </div>
  )
}

export default Avatar
