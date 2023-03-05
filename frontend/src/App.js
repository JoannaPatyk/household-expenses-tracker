import React, { useState, useEffect } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Landing, Login, Error, SharedLayout, Registration } from './pages';
import { Budget, Expenses, Statistics, Group, ProtectedRoute } from './pages/dashboard';
import ExpensesForm from './components/ExpensesForm';
import EditCategory from './components/EditCategory';
import EditExpense from './components/EditExpense';

function App() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
    }, [theme]);

    return (
        <>
            <div className={`switch-wrapper ${theme}`}>
                <label className="switch" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" onChange={toggleTheme} />
                    <div className="slider round">
                        <BsMoonStars className="moon slider-icon" />
                        <BsSun className="sun slider-icon" />
                    </div>
                </label>
            </div>
            <HashRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <SharedLayout />
                            </ProtectedRoute>
                        }
                    >
                        <Route index path="add" element={<ExpensesForm theme={theme} />} />
                        <Route path="expenses" element={<Expenses />} />
                        <Route path="budget" element={<Budget />} />
                        <Route path="statistics" element={<Statistics />} />
                        <Route path="group" element={<Group />} />
                    </Route>
                    <Route path="landing" element={<Landing />} />
                    <Route path="login" element={<Login />} />
                    <Route path="registration" element={<Registration />} />
                    <Route path="edit_category" element={<EditCategory />} />
                    <Route path="edit_expense" element={<EditExpense theme={theme} />} />
                    <Route path="*" element={<Error />}></Route>
                </Routes>
                <ToastContainer position="top-right" />
            </HashRouter>
        </>
    );
}

export default App;
