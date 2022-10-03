import React from "react";
import Navbar from './masterpage/Navbar';
import Home from './components/Home';
import TodoContainer from './components/TodoContainer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import style from './App.module.css';

{/* App Component */}
export default function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Todo" element={<TodoContainer />} />
        </Routes>
      </Router>
    </>
  )
}