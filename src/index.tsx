import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';

const rootElement = document.getElementById("root");
ReactDOM.render((
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
), document.getElementById('root'))
