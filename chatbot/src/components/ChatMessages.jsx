import {useRef, useEffect} from 'react';
import ChatMessage from './ChatMessage.jsx';


function ChatMessages({chat}) {
    const chatRef = useRef(null);  

    useEffect(() => {
        const containerElement = chatRef.current;
        if(containerElement) {
            containerElement.scrollTop = containerElement.scrollHeight;
        }
    },[chat]);
    return (
        <div 
            ref={chatRef} 
            className="chat-messages-container"
        >
            {chat.length === 0 ? (
                <div className="empty-state">
                    <i className="fa-solid fa-comments"></i>
                    <p>Start a conversation!</p>
                </div>
            ) : (
                chat.map((chatMessage) => {
                    return(
                        <ChatMessage 
                            message={chatMessage.message}
                            sender={chatMessage.sender}
                            key={chatMessage.id}
                        />
                    );
                })
            )}
        </div>
    );
}

export default ChatMessages;