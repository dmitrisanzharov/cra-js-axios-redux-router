import React from 'react'

export const AppContext = React.createContext(null);

export const AppProvider = ({children}) => {

    const objValues = {
        name: 'hello'
    }


  return (
    <AppContext.Provider value={objValues}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider