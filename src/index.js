import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";


const DATA = [
  // { id: "todo-0", name: "Eat", completed: true },
  // { id: "todo-1", name: "Sleep", completed: false },
  // { id: "todo-2", name: "Repeat", completed: false }
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App tasks={DATA} />
  </BrowserRouter>
);

reportWebVitals();
