import React from 'react'
import { MyContext } from './ContextAsABlockWrapper'

const Component1 = () => {

  const objValues= React.useContext(MyContext); // this can be named as ANYTHING i want... objValues OR shakeAndBake or contextData, etc.
  objValues.comp1 = 'comp1'
  console.log("Component 1: objValues: ", objValues);

  return (
    <div>Component1</div>
  )
}

export default Component1