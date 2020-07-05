import { combineReducers } from 'redux';
import dashboardReducer from "./dashboardReducer";
import homeReducer from "./homeReducer"; 

const reducers = combineReducers({
  dashboardReducer: dashboardReducer,
  homeReducer: homeReducer
});

export default reducers;
