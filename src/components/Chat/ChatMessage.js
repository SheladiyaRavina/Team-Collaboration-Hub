import React from 'react';

const ChatMessage = ({ message, sender }) => {
  return (
    <div className={`message mb-2 ${sender === 'You' ? 'text-right' : ''}`}>
      <strong>{sender}: </strong>
      {message}
    </div>
  );
};

export default ChatMessage;
