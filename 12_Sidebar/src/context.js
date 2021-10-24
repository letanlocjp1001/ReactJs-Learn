import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false)
  const [isModal, setIsModal] = useState(false)

  const openSidebar = () => {
    setIsSidebar(true)
  }
  const closeSidebar = () => {
    setIsSidebar(false)
  }
  const openModal = () => {
    setIsModal(true)
  }
  const closeModal = () => {
    setIsModal(false)
  }

  return (
    <AppContext.Provider
      value={{
        isModal,
        isSidebar,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, AppContext }
