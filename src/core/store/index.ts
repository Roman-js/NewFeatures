import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {welcomeReducer} from '../reducers';
import createSagaMiddleware from 'redux-saga';
import {sagaWatcher} from '../saga/saga';

const saga = createSagaMiddleware();
saga.run(sagaWatcher);
const rootReducer = combineReducers({
  welcome: welcomeReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppStoreType = ReturnType<typeof rootReducer>;
