import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Layout } from './comp/layout.jsx';
import { User } from './comp/user.jsx';
import { Note } from './comp/note.jsx';
import { AddNote } from './comp/addnote.jsx';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
     <Routes>
       <Route path="/" element={<Layout />}>
         <Route path="/user" element={<User />} />
         <Route path="/user/addnote" element={<AddNote/>} />
         <Route path="/user/:id" element={<Note />} />
       </Route>
     </Routes>
   </BrowserRouter>
 </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
