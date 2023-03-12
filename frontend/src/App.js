import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Landing, Login, Error, SharedLayout, Registration } from './pages/IndexPages';
import {
    Budget,
    Expenses,
    Statistics,
    Group,
    ProtectedRoute,
    AddExpenses,
    EditCategory
} from './pages/dashboard/IndexDashboard';
import { EditExpense, ThemeSwitch } from './components/IndexComponents';

function App() {
    return (
        <HashRouter>
            <ThemeSwitch />
            <Routes>
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <SharedLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route path="categories" element={<EditCategory />} />
                    <Route index path="add" element={<AddExpenses />} />
                    <Route path="expenses" element={<Expenses />} />
                    <Route path="budget" element={<Budget />} />
                    <Route path="statistics" element={<Statistics />} />
                    <Route path="group" element={<Group />} />
                </Route>
                <Route path="landing" element={<Landing />} />
                <Route path="login" element={<Login />} />
                <Route path="registration" element={<Registration />} />
                <Route path="edit_expense" element={<EditExpense />} />
                <Route path="*" element={<Error />}></Route>
            </Routes>
            <ToastContainer position="top-right" />
        </HashRouter>
    );
}

export default App;
