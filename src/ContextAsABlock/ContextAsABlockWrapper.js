import React from 'react'
// components
import Component1 from './Component1'
import Component2 from './Component2'

export const MyContext = React.createContext(null);

const ContextAsABlockWrapper = () => {

    const objValues = {
        name: 'hello'
    }


  return (
    <MyContext.Provider value={objValues}>
        <h1>This Block Holds All Of The Components and is Imported Into View</h1>
        <Component1 />
        <Component2 />
    </MyContext.Provider>
  )
}

export default ContextAsABlockWrapper