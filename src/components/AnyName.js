import React from 'react'
import {MyContext} from './UserContext';

const AnyName = () => {

    const {tel, name} = React.useContext(MyContext);


  return (
    <div>
        {tel}
        {name}
    </div>
  )
}

export default AnyName