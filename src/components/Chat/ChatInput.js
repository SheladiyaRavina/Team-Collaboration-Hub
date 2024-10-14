import React, { useState } from 'react';

const ChatInput = ({ sendMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      sendMessage(inputValue);
      setInputValue(''); // Clear input after sending
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border p-2 flex-grow mr-2"
        placeholder="Type your message..."
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Send
      </button>
    </form>
  );
};

export default ChatInput;
