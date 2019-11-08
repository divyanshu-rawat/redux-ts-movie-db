import { combineReducers } from "redux";
import MOVIE_REDUCER from './reducers/';
import { ActionTypes } from './constants';

export default combineReducers({
    [ActionTypes.GET_MOVIE]: MOVIE_REDUCER,
});

