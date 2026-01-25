import {useState} from 'react';
import  Chatbot from '../chatbot';

function ChatInput({chat, setChat}) {
                const [inputText, setInputText] = useState('');
                function SaveInput(event) {
                    setInputText(event.target.value);
                }
                
                async function sendMessage() {
                    if (!inputText.trim()) return;
                    
                    const newChatMessages = [...chat,
                        {message: inputText, 
                            sender: 'user', 
                            id: crypto.randomUUID()
                        },
                    ];

                    const loadingId = crypto.randomUUID(); 
                    setChat([...newChatMessages,
                        {message: 'loading...', 
                            sender: 'robot', 
                            id: loadingId
                        },
                    ]);

                    await new Promise(resolve => setTimeout(resolve, 800));

                    setChat(newChatMessages);
                    const response = Chatbot.getResponse(inputText);
                    setChat([...newChatMessages,
                        {message: response, 
                            sender: 'robot', 
                            id: crypto.randomUUID()
                        },
                    ]);

                    setInputText('');
                }
                
                function handleKeyPress(event) {
                    if (event.key === 'Enter') {
                        sendMessage();
                    }
                }
                
                return(
                    <div className="chat-input-container">
                        <input 
                            placeholder="Type your message..." 
                            onChange={SaveInput}
                            onKeyDown={handleKeyPress}
                            value={inputText}
                        />
                        <button onClick={sendMessage}>Send</button>
                    </div>
                );
           }

export default ChatInput;
           