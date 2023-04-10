import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Landing, Login, Error, SharedLayout, Registration } from './pages/IndexPages';
import {
    Budget,
    Expenses,
    Group,
    ProtectedRoute,
    AddExpenses,
    EditCategory,
    Dashboard
} from './pages/menu/IndexDashboard';
import { EditExpense, ThemeSwitch } from './components/IndexComponents';

function App() {
    return (
        <BrowserRouter>
            <ThemeSwitch />
            <Routes>
                <Route
                    exact
                    path="/"
                    element={
                        <ProtectedRoute>
                            <SharedLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="add" element={<AddExpenses />} />
                    <Route path="categories" element={<EditCategory />} />
                    <Route path="expenses" element={<Expenses />} />
                    <Route path="budget" element={<Budget />} />
                    <Route path="group" element={<Group />} />
                </Route>
                <Route path="landing" element={<Landing />} />
                <Route path="login" element={<Login />} />
                <Route path="registration" element={<Registration />} />
                <Route path="edit_expense" element={<EditExpense />} />
                <Route path="*" element={<Error />}></Route>
            </Routes>
            <ToastContainer position="top-right" />
        </BrowserRouter>
    );
}

export default App;
