import React, { useState } from 'react';
import Wrapper from '../../assets/wrappers/Statistic';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import PieChartContainer from '../../components/PieChartContainer';
import BarChartContainer from '../../components/BarChartContainer';

function Statistics() {
    const [barChart, setBarChart] = useState(true);

    return (
        <Wrapper>
            <div className="statistics-container">
                <button type="button" className="btn btn-toggle-chart left" onClick={() => setBarChart(!barChart)}>
                    <GoArrowLeft />
                </button>
                <button type="button" className="btn btn-toggle-chart right" onClick={() => setBarChart(!barChart)}>
                    <GoArrowRight />
                </button>
                {barChart ? <BarChartContainer /> : <PieChartContainer />}
            </div>
        </Wrapper>
    );
}

<Wrapper></Wrapper>;

export default Statistics;
