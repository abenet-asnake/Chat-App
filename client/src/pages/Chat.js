import React,{useEffect} from 'react';
import axios from 'axios';


const Chat = () => {
// fetching data from server and client 
const fetchChat = async () => {
  const data = await axios.get("/api/chat");
  console.log(data)
};
//useEffect is  
useEffect(() => {
fetchChat();
}, []);

  return (
    <div>
      Well Come  to Chats
    </div>
  )
}

export default Chat;
