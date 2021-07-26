import {Cat} from '../../types';
import {ActionTypes} from './actionTypes';
import {GET_CATS, GET_CATS_SUCESS} from '../constants';

export const getCatsAction = (): ActionTypes => ({
  type: GET_CATS,
});
export const getCatsActionSuccess = (payload: Cat[]): ActionTypes => ({
  type: GET_CATS_SUCESS,
  payload,
});
