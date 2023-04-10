import React from 'react';
import { useBudgetContext } from '../context/BudgetContext';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const colors = [
    '#dbba79',
    '#f5ad12',
    '#c08401',
    '#ff7809',
    '#815b07',
    '#cfa2be',
    '#6d3749',
    '#af4569',
    '#ff86af',
    '#572838',
    '#310212',
    '#98aa32',
    '#37750d'
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.7;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x + 5} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

function PieChartContainer() {
    const { summedExpensesByCategory } = useBudgetContext();

    return (
        <div className="chart-container">
            <h3>Stan wydatków według kategorii:</h3>
            <ResponsiveContainer width={'100%'} height={400}>
                <PieChart>
                    <Pie
                        data={summedExpensesByCategory}
                        dataKey="amount"
                        nameKey="category"
                        cx="50%"
                        cy="45%"
                        outerRadius={150}
                        label={renderCustomizedLabel}
                        labelLine={false}
                    >
                        {summedExpensesByCategory.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index]} />
                        ))}
                    </Pie>
                    <Tooltip
                        animationEasing="ease-in-out"
                        itemStyle={{ fontWeight: '500' }}
                        labelStyle={{ color: '#322C3B', fontWeight: '500' }}
                    />
                    <Legend iconType="circle" />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PieChartContainer;
