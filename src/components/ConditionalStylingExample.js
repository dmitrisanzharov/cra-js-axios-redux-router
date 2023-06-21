import React from 'react'
import { Box } from '@mui/material'

const ConditionalStylingExample = () => {

  return (
    <div className='foo1'>
        <Box sx={{
            '.foo1 &': { 
                color: 'red'
            }
        }}>
            Hello World
        </Box>
    </div>
  )
}

export default ConditionalStylingExample