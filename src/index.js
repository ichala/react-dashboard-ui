import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import App from './App';
import './config/global.css';
import Layout from './config/Layout/Layout';
import { ThemeProvider } from './config/Context/theme';
import { DataProvider } from './config/Context/database';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <ThemeProvider>
          <Layout>
            <Toaster toastOptions={{
              style: {
                zIndex: '999 !important',
              },
            }}
            />
            <App />
          </Layout>
        </ThemeProvider>
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
