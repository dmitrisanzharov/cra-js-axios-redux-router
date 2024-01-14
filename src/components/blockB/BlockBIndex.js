import React from 'react'
import ContextWrapper from '../../context/ContextWrapper'


// child components
import ChildB1 from './ChildB1'

const BlockBIndex = () => {
  return (
    <ContextWrapper>
        <ChildB1 />
    </ContextWrapper>
  )
}

export default BlockBIndex