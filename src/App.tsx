import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import * as pages from './pages'
import * as RB from 'react-bootstrap'
import { Header, Footer } from './components'

var a: string;

function getData() {
  a = 'test123';
}

function App() {
  getData();
  return (
    <RB.Container fluid>
      <RB.Row>
        <Header></Header>
      </RB.Row>
      <RB.Row style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="" element={<pages.General />} />
          <Route path="Videos" element={<pages.Videos />} />
        </Routes>
      </RB.Row>
      <RB.Row>
        <Footer></Footer>
      </RB.Row>
    </RB.Container>
  );
}

export default App;
