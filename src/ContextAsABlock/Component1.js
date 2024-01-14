import React from 'react'
import { MyContext } from './ContextAsABlockWrapper'

const Component1 = () => {

  const objValues= React.useContext(MyContext);
  objValues.comp1 = 'comp1'
  console.log("Component 1: objValues: ", objValues);

  return (
    <div>Component1</div>
  )
}

export default Component1