import React from 'react'
import { Container, Box, Text,Tabs,
         TabList,Tab,TabPanels,TabPanel } from '@chakra-ui/react';
import Login from '../components/Authentication/Login';
import SignUp from '../components/Authentication/SignUp';
const Home = () => {
  return (
    <Container maxW='xl' centerContent>
 <Box
        display='flex'
        justifyContent='center'
        padding='4' 
        bg={'whiteAlpha.100'}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
 >
<Text fontSize="25px" color="white" fontWeight="bold">AB Chat App</Text>
 </Box>
 <Box 
         bg="white" 
         w="100%" 
         p={4} 
         borderRadius="lg" 
         borderWidth="1px">
  
  <Tabs variant='soft-rounded' colorScheme='green'>
  <TabList marginBottom='1em'>
    <Tab width='50%'>Login</Tab>
    <Tab width='50%'>Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
           <Login/>
    </TabPanel>
    <TabPanel>
           <SignUp/>
    </TabPanel>
  </TabPanels>
</Tabs>

 </Box>
    </Container>
  )
}

export default Home;
