import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {welcomeReducer} from '../reducers';
import createSagaMiddleware from 'redux-saga';
import {sagaWatcher} from '../saga/saga';

const saga = createSagaMiddleware();

const rootReducer = combineReducers({
  welcome: welcomeReducer,
});

export const store = createStore(rootReducer, applyMiddleware(saga));

export type AppStoreType = ReturnType<typeof rootReducer>;

saga.run(sagaWatcher);
