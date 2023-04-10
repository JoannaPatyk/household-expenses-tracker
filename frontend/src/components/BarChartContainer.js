import React from 'react';
import { useBudgetContext } from '../context/BudgetContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function BarChartContainer() {
    const { summedExpensesByCategory, budget } = useBudgetContext();

    const data = budget.map(({ categoryName, amount }) => {
        const summedExpense = summedExpensesByCategory.find((item) => item.category === categoryName);
        return {
            category: categoryName,
            plannedAmount: amount,
            actualSummedExpense: summedExpense === undefined ? 0 : summedExpense.amount
        };
    });

    return (
        <div className="chart-container">
            <h3>Aktualne a planowane wydatki:</h3>
            <ResponsiveContainer width={'100%'} height={400}>
                <BarChart
                    data={data}
                    barCategoryGap="15%"
                    margin={{
                        top: 5,
                        right: 15,
                        left: 0,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip
                        cursor={false}
                        itemStyle={{ fontWeight: '500' }}
                        labelStyle={{ color: '#322C3B', fontWeight: '500' }}
                    />
                    <Bar name="planowane wydatki" unit=" PLN" dataKey="plannedAmount" fill="#ff7809b9" />
                    <Bar name="aktualne wydatki" unit=" PLN" dataKey="actualSummedExpense" fill="#f5ad12a4" />
                    <Legend iconType="circle" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default BarChartContainer;
