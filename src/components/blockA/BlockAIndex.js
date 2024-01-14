import React from 'react'
import ContextWrapper from '../../context/ContextWrapper';

// child components
import ChildA1 from './ChildA1';
import ChildA2 from './ChildA2';

const BlockAIndex = () => {
  return (
    <ContextWrapper>
        <ChildA1 />
        <ChildA2 />
    </ContextWrapper>
  )
}

export default BlockAIndex