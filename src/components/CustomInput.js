import React from 'react'

const CustomInput = React.forwardRef((props, ref1, ref2) => {
  return (
    <input {...props} ref={ref1}/>
  )
})

export default CustomInput