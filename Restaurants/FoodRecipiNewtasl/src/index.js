import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';


let roote1 = document.getElementById('root');
let root = ReactDOM.createRoot(roote1);

root.render(<BrowserRouter><App /></BrowserRouter>);