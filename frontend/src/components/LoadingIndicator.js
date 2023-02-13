import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import * as Loader from 'react-loader-spinner';
import Wrapper from '../assets/wrappers/Loading';

function LoadingIndicator() {
    const { promiseInProgress } = usePromiseTracker();
    return (
        promiseInProgress && (
            <Wrapper>
                <div className="spinner-container">
                    <div id="spinner">
                        <Loader.InfinitySpin color="#ffc125" height="100" width="400" />
                    </div>
                </div>
            </Wrapper>
        )
    );
}

export default LoadingIndicator;
