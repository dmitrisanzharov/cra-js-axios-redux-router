import React from 'react'
import { ReusableContext } from '../../context/ContextWrapper'

const ChildA2 = () => {

    const objValue = React.useContext(ReusableContext);
    console.log("objValue: ", objValue);
    
  return (
    <div>ChildA2</div>
  )
}

export default ChildA2