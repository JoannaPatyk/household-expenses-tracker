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

const colors = ['#dbba79', '#f5ad12', '#d385b5', '#af4569', '#98aa32', '#37750d'];

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
                                outerRadius={130}
                                label
                                labelLine={false}
                            >
                                {summedByCategory.map((entry, index) => (
                                    <Cell key={`cell-${index} zł`} fill={colors[index]} />
                                ))}
                            </Pie>
                            <Tooltip animationEasing="ease-in-out" />
                            <Legend iconType="circle" />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="chart-container">
                    <h3>aktualny stan poniesionych wydatków vs planowane</h3>
                    <ResponsiveContainer width={'100%'} height={300}>
                        <BarChart
                            data={data}
                            barCategoryGap="15%"
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
                            <Tooltip cursor={false} itemStyle={{ color: '#322C3B' }} />
                            <Bar name="planowane wydatki" unit=" zł" dataKey="plannedAmount" fill="#b093d1" />
                            <Bar name="aktualne wydatki" unit=" zł" dataKey="actualSummedExpense" fill="#af4569" />
                            <Legend iconType="circle" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </Wrapper>
    );
}

export default Statistics;
