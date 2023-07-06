import React from 'react';
import AnyName from './AnyName';

export const MyContext = React.createContext(null);

const UserContext = () => {

    const obj ={
        tel: '123', 
        name: 'yes'
    }


  return (

    <MyContext.Provider value={obj}>
        <div>UserContext</div>
        <AnyName />
    </MyContext.Provider>

  )
}

export default UserContext