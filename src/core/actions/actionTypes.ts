import {Cat} from '../../types';
import {GET_CATS, GET_CATS_SUCESS} from '../constants';

interface GetCatsActionType {
  type: typeof GET_CATS;
}

interface GetCatsActionSuccessType {
  type: typeof GET_CATS_SUCESS;
  payload: Cat[];
}

export type ActionTypes = GetCatsActionType | GetCatsActionSuccessType;
