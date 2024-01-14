import React from 'react'
import { MyContext } from './ContextAsABlockWrapper'

const Component1 = () => {

  const contextValues = React.useContext(MyContext);
  contextValues.comp1 = 'comp1'
  console.log("Component 1: contextValues: ", contextValues);

  return (
    <div>Component1</div>
  )
}

export default Component1