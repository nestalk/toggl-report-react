import React from 'react';
import { connect } from 'react-redux';
import {setWorkHours} from '../actions';

const workHoursComponent = ({hours, setWorkHours}) => {
    return (
        <div className="token-input">
            <label>Work Hours: </label>
            <input type="number" defaultValue={hours} onChange={(e) => setWorkHours(e.target.value)}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        hours: state.get('settings').get('workHours')
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        setWorkHours: (hours) => {
            dispatch(setWorkHours(hours));
        }
    };
};

const workHoursComponentConnect = connect(mapStateToProps, mapDispatchToProps)(workHoursComponent);

export default workHoursComponentConnect;
