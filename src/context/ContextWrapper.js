import React from 'react'

export const ReusableContext = React.createContext(null);

const ContextWrapper = ({children}) => {

    const objValues = {
        name: 'hello'
    }


  return (
    <ReusableContext.Provider value={objValues}>
        {children}
    </ReusableContext.Provider>
  )
}

export default ContextWrapper