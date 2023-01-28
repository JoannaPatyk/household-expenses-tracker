import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Register from './pages/Register';
import Error from './pages/Error';
import { Budget, Expenses, Settings, Stats } from './pages/dashboard';
import SharedLayout from './pages/SharedLayout';
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
