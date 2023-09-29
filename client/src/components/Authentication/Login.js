import React, {useState} from 'react'
import { Button, FormControl, FormLabel, Input, 
  InputGroup, InputRightElement, InputLeftElement,VStack} from '@chakra-ui/react';
  import { EmailIcon,UnlockIcon } from '@chakra-ui/icons';
const Login = () => {
  // creating state
const [show, setShow]=useState(false);

const [email,setEmail] = useState();

const [password,setPassword] = useState();


// handling the show and hide buttons
const handleClick=() => setShow(!show);


// summit handler for Sign Up button
const submitHandler=() => {

};
  return (
    <VStack spacing='6px'>
       
 
       <FormControl id='email' isRequired>
        <FormLabel>Email Address</FormLabel>
      </FormControl>
      <InputGroup>
    <InputLeftElement pointerEvents='none'>
      <EmailIcon color='gray.300' />
    </InputLeftElement>
    <Input
      type='email'
      placeholder=' Email Address'
      onChange={(error)=>setEmail(error.target.value)}/>

    </InputGroup>
          <InputGroup>
          <Input
              type={show ? 'text':'password' }
              placeholder='Enter Your Password'
              onChange={(error)=>setPassword(error.target.value)}/>
              <InputLeftElement pointerEvents='none'>
      <UnlockIcon color='gray.300' />
    </InputLeftElement>
         <InputRightElement width='4.5rem'>
           <Button h='1.5rem' size='sm' onClick={handleClick}>
             {show ? "Hide" : "Show"}
           </Button>
         </InputRightElement>
 
          </InputGroup>
    
 
        
         <Button
         colorScheme="blue"
         width="100%"
         style={{ marginTop: 15 }}
         onClick={submitHandler}
       
       >
        Login
       </Button>
    </VStack>
   )
}

export default Login
