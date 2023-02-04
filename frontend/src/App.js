import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { Landing, Register, Error, SharedLayout } from './pages';
import { Budget, Expenses, Settings, Stats } from './pages/dashboard';
import ExpensesForm from './components/ExpensesForm';
import EditExpense from './components/EditExpense';
import EditCategory from './components/EditCategory';

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
                    <Route path="/" element={<SharedLayout />}>
                        <Route index element={<ExpensesForm />} />
                        <Route path="expenses" element={<Expenses />} />
                        <Route path="budget" element={<Budget />} />
                        <Route path="statistics" element={<Stats />} />
                        <Route path="settings" element={<Settings />} />
                    </Route>
                    <Route path="landing" element={<Landing />} />
                    <Route path="register" element={<Register />} />
                    <Route path="edit-category" element={<EditCategory />} />
                    <Route path="expenses/edit-expense" element={<EditExpense />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
