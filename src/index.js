import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './components/header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Header />
    <App />
    </>
)