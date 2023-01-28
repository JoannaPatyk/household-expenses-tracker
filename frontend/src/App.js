import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Landing, Register, Error, SharedLayout } from './pages';
import { Budget, Expenses, Settings, Stats } from './pages/dashboard';
import ExpensesForm from './components/ExpensesForm';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<ExpensesForm />} />
                    <Route path="expenses" element={<Expenses />} />
                    <Route path="budget" element={<Budget />} />
                    <Route path="statistics" element={<Stats />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
                <Route path="landing" element={<Landing />} />
                <Route path="register" element={<Register />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
