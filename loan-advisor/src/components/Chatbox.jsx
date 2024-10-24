import React, { useState, useEffect, useRef } from 'react';
import './chatbox.css';

function Chatbox() {
    // State to handle the message input and list of messages
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    // Reference to the chat messages container
    const chatMessagesRef = useRef(null);

    // Mock API function to simulate fetching a bot reply
    const fetchBotReply = (userMessage) => {
        //mock function for api call
        return new Promise((resolve) => {
            setTimeout(() => {
                // Create a response based on the user's message
                const botReply = `You said: "${userMessage}". How can I assist you further?`;
                resolve(botReply);
            }, 1000); // Simulate a 1-second delay for the API call
        });
    };

    // Function to handle input change
    const handleInputChange = (e) => {
        setMessage(e.target.value);
    };

    // Function to handle form submission
    const handleSendMessage = async () => {
        if (message.trim() !== '') {
            // Add the user message to the messages array
            setMessages([...messages, { text: message, sender: 'user' }]);
            // Clear the input field after sending the message
            setMessage(''); 

            // Simulate a bot reply from an API
            const botReply = await fetchBotReply(message);
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: botReply, sender: 'bot' },
            ]);
        }
    };

    // Effect to scroll to the bottom when messages change
    useEffect(() => {
        if (chatMessagesRef.current) {
            chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="container chatbox">
            <div className="container-fluid chatHeader">
                <div className="container">
                    <div className="col-12 text-start head">
                        <h2>Finance Mentor</h2>
                        <p>Active Now <i className="bi bi-circle-fill"></i></p>
                    </div>
                </div>
            </div>

            {/* Chat content area */}
            <div className="chatMessages" ref={chatMessagesRef}>
                {/* Dynamically render messages */}
                {messages.map((msg, index) => (
                    <div 
                        key={index} 
                        className={`message ${msg.sender === 'user' ? 'message-right' : 'message-left'}`}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>

            {/* Message input form at the bottom */}
            <div className="messageForm">
                <div className="input-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Type a message..." 
                        value={message} 
                        onChange={handleInputChange} 
                    />
                    <button 
                        className="btn btn-primary" 
                        type="button" 
                        onClick={handleSendMessage}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Chatbox;
