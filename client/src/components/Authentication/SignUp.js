import React , {useState} from 'react'
import { FormControl, FormLabel, Input, VStack} from '@chakra-ui/react';
const SignUp = () => {
  // creating state
  const [firstName,setFirstName] = useState();
  const [lastName,setLastName] = useState();
  const [userName,setUserName] = useState();
  const [email,setEmail] = useState();
  const [phone,setPhone] = useState();
  const [password,setPassword] = useState();
  const [confirmPassword,setConfirmPassword] = useState();
  const [picture,setPicture] = useState();

  return (
   <VStack spacing='6px'>
      <FormControl id='first-name' isRequired>
        <FormLabel>First Name</FormLabel>
      </FormControl>
      <Input
      placeholder='Enter Your First Name'
      onChange={(error)=>setFirstName(error.target.value)}/>

      <FormControl id='last-name' isRequired>
        <FormLabel>Last Name</FormLabel>
      </FormControl>
      <Input
      placeholder='Enter Your Last Name'
      onChange={(error)=>setLastName(error.target.value)}/>

      <FormControl id='first-name' isRequired>
        <FormLabel>User Name</FormLabel>
      </FormControl>
      <Input
      placeholder='Enter Your User Name'
      onChange={(error)=>setUserName(error.target.value)}/>

<FormControl id='email' isRequired>
        <FormLabel>Email Address</FormLabel>
      </FormControl>
      <Input
      placeholder='Enter Your  Email Address'
      onChange={(error)=>setEmail(error.target.value)}/>

      <FormControl id='phone-number' isRequired>
        <FormLabel>Phone Number</FormLabel>
      </FormControl>
      <Input
      placeholder='Enter Your Phone Number'
      onChange={(error)=>setPhone(error.target.value)}/>

      <FormControl id='password' isRequired>
        <FormLabel>Password</FormLabel>
      </FormControl>
      <Input
      placeholder='Enter Your Password'
      onChange={(error)=>setPassword(error.target.value)}/>


    <FormControl id='re-password' isRequired>
        <FormLabel>Confirm password</FormLabel>
        </FormControl>
         <Input
         placeholder='Confirm Password'
         onChange={(error)=>setPassword(error.target.value)}/>

   </VStack>
  )
}

export default SignUp
