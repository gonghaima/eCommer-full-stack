import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/home';
import React from 'react';
import UserList from './pages/userList/UserList';
import User from './pages/user/user';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
          </Routes>
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
