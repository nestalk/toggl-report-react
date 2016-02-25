import React from 'react';
import { connect } from 'react-redux';

const durationString = (duration) => {
    let returnString = '';
    const regex = /P(?:(\d*)?D)?T(?:(\d*)?H)?(?:(\d*)?M)?(?:(\d*)?S)?/g;
    const match = regex.exec(duration);
    if (match == null)
        return returnString;

    if (typeof match[1] !== 'undefined') {
        returnString += `${match[1]} Days, `;
    }
    if (typeof match[2] !== 'undefined') {
        returnString += `${match[2]} Hours, `;
    }
    if (typeof match[3] !== 'undefined') {
        returnString += `${match[3]} Minutes`;
    }

    return returnString;
};

const reportComponent = ({report}) => {
    const createReportRecord = (record, index) => {
        return (
            <tr key={index}>
                <td>{record.Client}</td>
                <td>{record.Activity}</td>
                <td>{durationString(record.Duration)}</td>
            </tr>
        )
    };
    return (
        <div className="report">
            <h2>Details </h2>
            <table>
                <thead>
                    <tr>
                        <th>Client</th>
                        <th>Activity</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {report.map(createReportRecord)}
                </tbody>
            </table>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        report: state.get('report').toJS()
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
    };
};

const reportComponentConnect = connect(mapStateToProps, mapDispatchToProps)(reportComponent);

export default reportComponentConnect;
