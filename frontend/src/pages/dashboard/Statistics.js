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

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <Wrapper>
            <div className="statistics-container">
                <div className="chart-container">
                    <h3>stan poniesionych wydatków</h3>
                    <ResponsiveContainer width={'100%'} height={420}>
                        <PieChart>
                            <Pie
                                data={summedByCategory}
                                dataKey="amount"
                                nameKey="category"
                                cx="50%"
                                cy="50%"
                                outerRadius={135}
                                label={renderCustomizedLabel}
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
                    <h3>aktualne a planowane wydatki</h3>
                    <ResponsiveContainer width={'100%'} height={320}>
                        <BarChart
                            data={data}
                            barCategoryGap="30%"
                            margin={{
                                top: 5,
                                right: 0,
                                left: 0,
                                bottom: 5
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis />
                            <YAxis />
                            <Tooltip cursor={false} itemStyle={{ color: '#322C3B' }} />
                            <Bar name="planowane wydatki" unit=" zł" dataKey="plannedAmount" fill="#ff7809b9" />
                            <Bar name="aktualne wydatki" unit=" zł" dataKey="actualSummedExpense" fill="#f5ad12a4" />
                            <Legend iconType="circle" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </Wrapper>
    );
}

export default Statistics;
