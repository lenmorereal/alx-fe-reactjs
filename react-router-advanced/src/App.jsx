import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute'; // Import the ProtectedRoute component
import { useAuth } from './hooks/useAuth';

const App = () => {
  const { login, logout, isAuthenticated } = useAuth();

  return (
    <Router>
      <div>
        {/* Buttons to simulate login and logout */}
        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          {/* Protect the Profile route */}
          <Route
            path="/profile"
            element={<ProtectedRoute element={<Profile />} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
