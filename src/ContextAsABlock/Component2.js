import React from 'react'
import { MyContext } from './ContextAsABlockWrapper'

const Component2 = () => {

  const contextValues = React.useContext(MyContext);
  console.log("Component 2: contextValues: ", contextValues);

  return (
    <div>Component2</div>
  )
}

export default Component2