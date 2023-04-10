import React, { useState } from 'react';
import Wrapper from '../../assets/wrappers/Statistic';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import PieChartContainer from '../../components/PieChartContainer';
import BarChartContainer from '../../components/BarChartContainer';

function Statistics() {
    const [barChart, setBarChart] = useState(true);

    return (
        <Wrapper>
            <div className="statistics-container">
                <button type="button" className="btn btn-toggle-chart left" onClick={() => setBarChart(!barChart)}>
                    <SlArrowLeft />
                </button>
                <button type="button" className="btn btn-toggle-chart right" onClick={() => setBarChart(!barChart)}>
                    <SlArrowRight />
                </button>
                {barChart ? <BarChartContainer /> : <PieChartContainer />}
            </div>
        </Wrapper>
    );
}

<Wrapper></Wrapper>;

export default Statistics;
