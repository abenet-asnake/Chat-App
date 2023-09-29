import React , {useState} from 'react'
import { Button, FormControl, FormLabel, Input, 
  InputGroup, InputRightElement, VStack} from '@chakra-ui/react';
const SignUp = () => {
  // creating state
const [show, setShow]=useState(false);
  const [firstName,setFirstName] = useState();
  const [lastName,setLastName] = useState();
  const [userName,setUserName] = useState();
  const [email,setEmail] = useState();
  const [phone,setPhone] = useState();
  const [password,setPassword] = useState();
  const [confirmPassword,setConfirmPassword] = useState();
  const [picture,setPicture] = useState();

  // handling the show and hide buttons
  const handleClick=() => setShow(!show);


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
         <InputGroup>
         <Input
             type={show ? 'text':'password' }
             placeholder='Enter Your Password'
             onChange={(error)=>setPassword(error.target.value)}/>
        <InputRightElement width='4.5rem'>
          <Button h='1.5rem' size='sm' onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>

         </InputGroup>
   

    <FormControl id='re-password' isRequired>
        <FormLabel>Confirm password</FormLabel>
        </FormControl>
         <InputGroup>
         <Input
             type={show ? 'text':'password' }
             placeholder='Enter Your Password'
             onChange={(error)=>setPassword(error.target.value)}/>
        <InputRightElement width='4.5rem'>
          <Button h='1.5rem' size='sm' onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>

         </InputGroup>

   </VStack>
  )
}

export default SignUp
