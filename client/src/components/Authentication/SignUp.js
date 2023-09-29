import React from 'react'
import { FormControl, FormLabel, Input, VStack} from '@chakra-ui/react';
const SignUp = () => {
  // creating state
  const [firstName,setFirstName] = useState();
  const [lastName,setLastName] = useState();
  const [userName,setUserName] = useState();
  const [email,setEmail] = useState();
  const [phone,setPhone] = useState();
  const [password,setPassword] = useState();
  const [confirmPassword,setconfirmPassword] = useState();
  const [picture,setPicture] = useState();

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
