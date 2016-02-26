import React from 'react';

import Token from './tokenComponent';
import DatePicker from './dateComponent';
import WorkHours from './workHoursComponent';

const filterComponent = () => {
    return (
        <div className="filter">
            <Token />
            <DatePicker />
            <WorkHours />
        </div>
    );
};

export default filterComponent;
