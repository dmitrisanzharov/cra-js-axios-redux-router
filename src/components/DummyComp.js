import React from 'react'
import {AppContext} from '../context/context'

const DummyComp = () => {

  const objValues = React.useContext(AppContext);
  console.log("objValues: ", objValues);


  return (
    <div>DummyComp</div>
  )
}

export default DummyComp