import {call, put, takeEvery} from '@redux-saga/core/effects';
import {getCatsAction, getCatsActionSuccess} from '../actions';
import {API} from '../api';

function* getCats() {
  try {
    //yield put('actons')
    const payload = yield call(API.getAllCats);
    console.log('payload: ', payload);
    yield put(getCatsActionSuccess(payload));
  } catch (e) {
    console.log('error: ', e);
  }
}

export function* sagaWatcher() {
  yield takeEvery(getCatsAction, getCats);
}
