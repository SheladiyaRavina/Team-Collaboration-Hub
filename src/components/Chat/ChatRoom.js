import React, { useState } from 'react';

const ChatRoom = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Alice', text: 'Hey team! Let’s discuss our project status.', timestamp: '10:00 AM' },
    { id: 2, sender: 'Bob', text: 'I have completed the UI design.', timestamp: '10:05 AM' },
    { id: 3, sender: 'Charlie', text: 'Great! I am working on the API integration.', timestamp: '10:10 AM' },
    { id: 4, sender: 'Diana', text: 'Don’t forget to add the unit tests.', timestamp: '10:15 AM' },
    { id: 5, sender: 'Alice', text: 'When is the deadline for the project?', timestamp: '10:20 AM' },
    { id: 6, sender: 'Bob', text: 'The deadline is next Friday.', timestamp: '10:22 AM' },
    { id: 7, sender: 'Charlie', text: 'I should have the backend ready by then.', timestamp: '10:25 AM' },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        sender: 'You',
        text: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
    }
  };

  return (
    <div className="flex-1  overflow-auto">
      <div className="bg-gray-300 rounded-lg shadow-lg p-5 min-h-screen flex flex-col">
        <div className="flex-1 overflow-y-auto mb-4">
          <ul className="space-y-4">
            {messages.map((message) => (
              <li key={message.id} className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-3 rounded-lg max-w-xs ${message.sender === 'You' ? 'bg-gray-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                  <p className="font-semibold">{message.sender}</p>
                  <p>{message.text}</p>
                  <span className="text-xs text-gray-500">{message.timestamp}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <form onSubmit={handleSendMessage} className="flex">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="border rounded-lg p-2 flex-1 mr-2"
          />
          <button type="submit" className="bg-indigo-600 text-white rounded-lg px-4">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatRoom;
