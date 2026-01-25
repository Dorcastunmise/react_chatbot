import { useState } from 'react'
import ChatMessages from './components/ChatMessages'
import ChatInput from './components/ChatInput'

import './App.css'

function App () {  
  const [chatMessages, setChatMessages] = useState([]);

  return (
      <>
          <div className="chat-header">
              <i className="fa-solid fa-robot"></i> Chatbot
          </div>
          <ChatMessages chat={chatMessages} />
          <ChatInput chat={chatMessages} setChat={setChatMessages}/>
      </>
  );
} 

export default App
