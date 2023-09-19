
import './App.css';
// import { ChakraProvider } from '@chakra-ui/react';
// import { Button} from '@chakra-ui/react';
import {Route} from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
function App() {
  return (
    
       <div className="App">
       <Route path="/" component={Home} />
       <Route path="/chats/" component={Chat} />
    
    </div>
  

  );
}

export default App;
