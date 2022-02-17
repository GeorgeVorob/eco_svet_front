import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  Outlet
} from "react-router-dom";
import './css/App.css';

import * as pages from './pages'
import * as RB from 'react-bootstrap'
import { Header, Footer, ScrollToTopWrapper } from './components'

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
      <RB.Row style={{ minHeight: "100vh", justifyContent: "center", alignContent: "baseline" }}>
        <ScrollToTopWrapper>
          <Routes>
            <Route path="" element={<pages.General />} />
            <Route path="Catalog" element={<Outlet />}>
              <Route index element={<pages.Catalog />} />
              <Route path=":CategoryId" element={<pages.SeriesSelector />} />
              <Route path=":CategoryId/:seriesName" element={<pages.SeriesView />} />
            </Route>
            <Route path="Videos" element={<pages.Videos />} />
            <Route path="Projects" element={<pages.Projects />} />
            <Route path="Contacts" element={<pages.Contacts />} />
            <Route path="Models" element={<Outlet />}>
              <Route path=":ModelId" element={<pages.ModelView />} />
            </Route>
          </Routes>
        </ScrollToTopWrapper>
      </RB.Row>
      <RB.Row>
        <Footer></Footer>
      </RB.Row>
    </RB.Container >
  );
}

export default App;
