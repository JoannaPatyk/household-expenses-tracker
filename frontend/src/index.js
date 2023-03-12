import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { CategoriesProvider } from './context/CategoriesContext';
import { ExpensesProvider } from './context/ExpensesContext';
import { BudgetProvider } from './context/BudgetContext';
import { UserProvider } from './context/UserContext';
import { GroupProvider } from './context/GroupContext';
import { ThemeProvider } from './context/ThemeContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <ThemeProvider>
        <UserProvider>
            <GroupProvider>
                <CategoriesProvider>
                    <ExpensesProvider>
                        <BudgetProvider>
                            <App />
                        </BudgetProvider>
                    </ExpensesProvider>
                </CategoriesProvider>
            </GroupProvider>
        </UserProvider>
    </ThemeProvider>
);
