import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import TaskPage from './pages/TaskPage';
import ChatRoom from './components/Chat/ChatRoom';

const App = () => {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  const isAuthPage = window.location.pathname === '/login' || window.location.pathname === '/register';

  return (
    <Router>
    {!isAuthPage && <NavBar loggedInUser={loggedInUser} />}
   
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/chat" element={<ChatRoom />} />
        <Route path="/" element={<DashboardPage />} />
      </Routes>
  
    {!isAuthPage && <Footer />}
  </Router>
  );
};

export default App;
