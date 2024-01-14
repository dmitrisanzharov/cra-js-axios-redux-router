import React from 'react'
import {ReusableContext} from '../../context/ContextWrapper'

const ChildB1 = () => {

    const anyName = React.useContext(ReusableContext);
    console.log("anyName: ", anyName);


  return (
    <div>ChildB1</div>
  )
}

export default ChildB1