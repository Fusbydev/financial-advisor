import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Make sure to import Link for navigation
import './chatbox.css';

function Chatbox() {
    // State to handle the message input and list of messages
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [userName, setUserName] = useState(null); // State to store user's name
    const chatMessagesRef = useRef(null);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user && user.full_name) setUserName(user.full_name);
    }, []);

    // Mock API function to simulate fetching a bot reply
    const fetchBotReply = (userMessage) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let botReply;
                // Create a response based on the user's message
                if (userName === null) {
                    // Prepare the bot's reply with a React component instead of a string
                    botReply = (
                        <span>
                            You need to register first to use this service! 
                            <Link to="/login" className="link" style={{textDecoration:'none'}}> Login here</Link>
                        </span>
                    );
                } else {
                    botReply = `Hello! "${userName}". How can I assist you?`;
                }
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
        <div className="container chatbox mt-5">
            <div className="container-fluid chatHeader">
                <div className="container">
                    <div className="col-12 text-start head">
                        <h2>Finance Mentor</h2>
                        <p>Active Now <i className="bi bi-circle-fill active-now"></i></p>
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
                        {/* Use React's ability to render JSX for bot messages */}
                        {typeof msg.text === 'string' ? msg.text : msg.text}
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
