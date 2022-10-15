import React from "react";
import Home from './components/Home';
import TodoContainer from './components/TodoContainer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import style from './App.module.css';

/** App Component */
export default function App() {
  return (
    <>
      <nav className={`navbar navbar-light ${style.navbarCustom}`}>
        <img src="/todo.png" alt="image" width='120' />
      </nav>
      {/** React Router: Start */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Todo" element={<TodoContainer />} />
        </Routes>
      </Router>
      {/** React Router: End */}
    </>
  )
}