import {applyMiddleware, createStore, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './Reducers/reducer'
import { watchUser } from './saga/saga';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const store = createStore( rootReducer, compose(applyMiddleware(sagaMiddleware), composeWithDevTools()));
sagaMiddleware.run(watchUser);
export default store;