import { useState } from 'react'
import { motion } from 'framer-motion';
import Landing from './pages/landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './components/landing/auth';
import Music from './pages/music';
import ProtectedRoute from './utils/ProtectedRoute';

function App() {


  return (
    <div className='h-screen bg-black'>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
         <Route path="/auth" element={<Auth />} />
      <Route
        path="/music/*"
        element={
          <ProtectedRoute>
            <Music/>
          </ProtectedRoute>
        }
        />
      </Routes>
    </Router>
    </div>
  )
}

export default App
