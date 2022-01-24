import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import * as pages from './pages'

var a: string;

function getData() {
  a = 'test123';
}

function App() {
  getData();
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/home">Главная</Link>
        <Link to="/Videos">Видео</Link>
        {a}
        <Routes>
          <Route path="home" element={<pages.General />} />
          <Route path="Videos" element={<pages.Videos />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
