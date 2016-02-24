import React from 'react';
import { connect } from 'react-redux';
import {setApiToken} from '../actions';

const tokenComponent = ({token, setApiToken}) => {
    return (
        <div className="token-input">
            <label>Api Token: </label>
            <input defaultValue={token} onChange={(e) => setApiToken(e.target.value)}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        token: state.get('settings').get('token')
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        setApiToken: (token) => {
            dispatch(setApiToken(token));
        }
    };
};

const tokenComponentConnect = connect(mapStateToProps, mapDispatchToProps)(tokenComponent);

export default tokenComponentConnect;
