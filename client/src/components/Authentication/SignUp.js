import React from 'react'
import { FormControl, FormLabel, Input, VStack} from '@chakra-ui/react';
const SignUp = () => {
  return (
   <VStack spacing='6px'>
      <FormControl>
        <FormLabel></FormLabel>
      </FormControl>
      <Input
      placeholder='Enter Your Full Name'
      onChange={}/>
   </VStack>
  )
}

export default SignUp
