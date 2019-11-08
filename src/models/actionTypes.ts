import { ActionTypes } from '../constants/index';
import { MovieType } from './responseType';

export interface ActionMoviesRetrieved {
    type: ActionTypes.MOVIES_RETRIEVED,
    data: MovieType,
}

export interface ActionGetMovie {
    type: ActionTypes.GET_MOVIES,
    data?: MovieType
}