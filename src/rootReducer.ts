import { combineReducers } from "redux";
import MOVIE_REDUCER from './reducers/';
import * as t from "./constants";

export default combineReducers({
    [t.GET_MOVIE_DATA]: MOVIE_REDUCER,
});

