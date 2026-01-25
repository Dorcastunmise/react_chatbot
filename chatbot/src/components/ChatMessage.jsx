
function ChatMessage({message, sender}) {
    const isLoading = message === 'loading...';
    return(
        <div className={`message-wrapper ${sender}`}>
            <div className="message-icon">
                {sender === 'robot' ? (
                    <i className="fa-solid fa-robot"></i>
                ) : (
                    <i className="fa-solid fa-user"></i>
                )}
            </div>
            <div className="message-bubble">
                {isLoading ? (
                    <div className="typing-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                ) : (
                    message
                )}
            </div>
        </div> 
    );
}
           
export default ChatMessage;