import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { CategoriesProvider } from './context/CategoriesContext';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <CategoriesProvider>
        <App />
    </CategoriesProvider>
);
