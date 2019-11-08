import { ActionTypes } from '../constants';
import { ActionGetMovie } from '../models/actionTypes';

export const getMovieAction = (): ActionGetMovie => ({
    type: ActionTypes.GET_MOVIES,
});
