import React from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import {setDate} from '../actions';

import 'react-datepicker/dist/react-datepicker.css';

const dateComponent = ({date, setDate}) => {
    return (
        <div className="date-input">
            <label>Date: </label>
            <DatePicker dateFormat="DD/MM/YYYY"
                        selected={date}
                        onChange={setDate} />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        date: state.get('settings').get('date')
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        setDate: (date) => {
            dispatch(setDate(date));
        }
    };
};

const dateComponentConnect = connect(mapStateToProps, mapDispatchToProps)(dateComponent);

export default dateComponentConnect;
