
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Button} from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
       <div className="App">
       <Button colorScheme='blue'>Button</Button>
      Hello There 
    </div>
  
    </ChakraProvider>
  );
}

export default App;
