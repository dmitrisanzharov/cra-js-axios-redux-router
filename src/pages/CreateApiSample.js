import React from 'react'
import myApi from '../redux/api/apiSlice';

const CreateApiSample = () => {

  const [nameOfTriggerFunction, {isError, isSuccess, data, currentData}, lastPromiseInfo] = myApi.useLazyGetTestArgQuery('hello');
  console.log("data: ", currentData);
  
  React.useEffect(() => {
    nameOfTriggerFunction();
  }, []);
 
    

 

  return (
    <div>
        <h4>CreateApiSample</h4>
        <p>see console.log</p>
    </div>
  )
}

export default CreateApiSample