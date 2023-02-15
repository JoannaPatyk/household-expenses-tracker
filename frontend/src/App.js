import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { Landing, Login, Error, SharedLayout, Registration } from './pages';
import { Budget, Expenses, Statistics, ProtectedRoute } from './pages/dashboard';
import ExpensesForm from './components/ExpensesForm';
import EditCategory from './components/EditCategory';
import EditExpense from './components/EditExpense';

function App() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

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
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <SharedLayout />
                            </ProtectedRoute>
                        }
                    >
                        <Route index path="add" element={<ExpensesForm />} />
                        <Route path="expenses" element={<Expenses />} />
                        <Route path="budget" element={<Budget />} />
                        <Route path="statistics" element={<Statistics />} />
                    </Route>
                    <Route path="landing" element={<Landing />} />
                    <Route path="login" element={<Login />} />
                    <Route path="registration" element={<Registration />} />
                    <Route path="edit_category" element={<EditCategory />} />
                    <Route path="edit_expense" element={<EditExpense />} />
                    <Route path="*" element={<Error />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
