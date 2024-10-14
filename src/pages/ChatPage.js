import React from 'react';
import ChatRoom from '../components/Chat/ChatRoom';

const ChatPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-green-100 flex flex-col">
      <header className="bg-indigo-600 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Team Chat</h1>
        <p className="text-sm">Connect with your team in real-time</p>
      </header>
      <ChatRoom />
    </div>
  );
};

export default ChatPage;
