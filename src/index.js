import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import App from './App';
import './config/global.css';
import Layout from './config/Layout/Layout';
import { ThemeProvider } from './config/Context/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Layout>
          <Toaster />
          <App />
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
