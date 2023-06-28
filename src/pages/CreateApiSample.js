import React from 'react'
import { useGetAllQuery, useGetOneByIdQuery } from '../redux/api/apiSlice';

const CreateApiSample = () => {

    const data = useGetAllQuery();
    // when you get data, you get an object with:
    /*
        currentData: this has ALL data in it,
        data: same as currentData,
        endpointName: what ever I put into createApi, under endpoints, name of the Query,
        fulfilledtimeStamp: Epoch time stamp when request was fullfilled,
        isError: boolean, if fullfilled = false, else is true
        isFetching: boolean, false if fullfilled, usually true on first call,
        isLoading: boolean, false if fullfilled,
        isSuccess: boolean, true, if fullfilled,
        isUninitialized: boolean - dunno what that does,
        requestId: string,
        startedTimeStamp: Epoch start time,
        status: 'fulfilled', or what ever it is in

    */
    console.log("data: ", data);
    


  return (
    <div>CreateApiSample</div>
  )
}

export default CreateApiSample