import React from 'react'
import { ReusableContext } from '../../context/ContextWrapper'

const ChildA1 = () => {

    const objValue = React.useContext(ReusableContext);
    objValue.blockA = 'this should NOT appear in Block B'
    console.log("objValue: ", objValue);


  return (
    <div>ChildA1</div>
  )
}

export default ChildA1