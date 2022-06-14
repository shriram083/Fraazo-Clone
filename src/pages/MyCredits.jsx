import { Box, StackDivider, VStack } from '@chakra-ui/react'
import React from 'react'

const MyCredits = () => {
  return (
      <div style={{width:"100%", textAlign:"left"}} >
          <h3>Your Credits</h3> 
          {/* <VStack
              divider={<StackDivider borderColor='gray.200' />}
              spacing={4}
              align='stretch'
          >
              <Box h='40px' bg='yellow.200' alignItems={"center"} textAlign={"center"} minW="">
                  Available Fraazo Credit : ₹ 0
              </Box>
        
          </VStack> */}
          <Box bg='gray.50' w='100%' p={4}>
              Available Fraazo Credit : ₹ 0
          </Box>
          <h1>No data found</h1>
    </div>
  )
}

export default MyCredits