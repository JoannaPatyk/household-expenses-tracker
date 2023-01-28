import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { CategoriesProvider } from './context/CategoriesContext';
import { ExpensesProvider } from './context/ExpensesContext';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <ExpensesProvider>
        <CategoriesProvider>
            <App />
        </CategoriesProvider>
    </ExpensesProvider>
);
