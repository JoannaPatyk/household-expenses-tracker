import React from 'react';
import {
    PieChart,
    BarChart,
    Pie,
    Cell,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';
import Wrapper from '../../assets/wrappers/Statistic';
import { useBudgetContext } from '../../context/BudgetContext';

const colors = ['#cfc281', '#ffa1db', '#f54e86', '#f5ad12', '#873a8a', '#2583ff'];

function Statistics() {
    const { summedByCategory } = useBudgetContext();
    const { budget } = useBudgetContext();

    const data = budget.map((budgetEntry) => {
        const summedExpense = summedByCategory.find((item) => item.category === budgetEntry.categoryName);
        return {
            category: budgetEntry.categoryName,
            plannedAmount: budgetEntry.amount,
            actualSummedExpense: summedExpense === undefined ? 0 : summedExpense.amount
        };
    });

    return (
        <Wrapper>
            <div className="statistics-container">
                <div className="chart-container">
                    <h3>aktualny stan poniesionych wydatków</h3>
                    <ResponsiveContainer width={'100%'} height={400}>
                        <PieChart>
                            <Pie
                                data={summedByCategory}
                                dataKey="amount"
                                nameKey="category"
                                cx="50%"
                                cy="50%"
                                outerRadius={150}
                                label
                                labelLine={false}
                            >
                                {summedByCategory.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index]} />
                                ))}
                            </Pie>
                            <Tooltip animationEasing="ease-in-out" />
                            <Legend iconType="circle" />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className="chart-container">
                    <h3>aktualny stan wydatków z podziałem na kategorie</h3>
                    <ResponsiveContainer width={'100%'} height={300}>
                        <BarChart data={summedByCategory}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="category" />
                            <YAxis />
                            <Tooltip cursor={false} />
                            <Bar name="kwota" unit=" zł" dataKey="amount" fill="#873a8a" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="chart-container">
                    <h3>aktualny stan poniesionych wydatków vs planowane</h3>
                    <ResponsiveContainer width={'100%'} height={300}>
                        <BarChart
                            data={data}
                            margin={{
                                top: 5,
                                right: 5,
                                left: 5,
                                bottom: 5
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="category" />
                            <YAxis />
                            <Tooltip cursor={false} />
                            <Bar name="planowane wydatki" unit=" zł" dataKey="plannedAmount" fill="#f54e86" />
                            <Bar name="aktualne wydatki" unit=" zł" dataKey="actualSummedExpense" fill="#f5ad12" />
                            <Legend iconType="circle" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </Wrapper>
    );
}

export default Statistics;
