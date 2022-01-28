import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import './App.css';

import * as pages from './pages'
import * as RB from 'react-bootstrap'
import { Header, Footer, ScrollToTopWrapper } from './components'
import { isConditionalExpression } from 'typescript';

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
        <ScrollToTopWrapper>
          <Routes>
            <Route path="" element={<pages.General />} />
            <Route path="Catalog" element={<pages.Catalog />} />
            <Route path="Videos" element={<pages.Videos />} />
            <Route path="Projects" element={<pages.Projects />} />
            <Route path="Contacts" element={<pages.Contacts />} />
          </Routes>
        </ScrollToTopWrapper>
      </RB.Row>
      <RB.Row>
        <Footer></Footer>
      </RB.Row>
    </RB.Container>
  );
}

export default App;
