import {combineReducers} from 'redux-immutablejs';
import settings from './settingsReducer';
import report from './reportReducer';

const indexReducer = combineReducers({
    settings,
    report
});

export default indexReducer;
