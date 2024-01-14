import React from 'react'
import { MyContext } from './ContextAsABlockWrapper'

const Component2 = () => {

  const objValues = React.useContext(MyContext);
  console.log("Component 2: objValues: ", objValues);

  return (
    <div>Component2</div>
  )
}

export default Component2