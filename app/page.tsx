"use client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/landing';
import Login from './pages/login';
import Signup from './pages/signup';
import Explore from './pages/explore';
import ForgotPass from './pages/forgotpass'
import Producer from './pages/producer';

export default function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/producer" element={<Producer />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
      </Routes>
    </Router>
  );
}