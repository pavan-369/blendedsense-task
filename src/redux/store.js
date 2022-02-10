import {applyMiddleware, createStore, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './Reducers/reducer'
import { watchUser } from './saga/saga';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const store = createStore( reducer, compose(applyMiddleware(sagaMiddleware), composeWithDevTools()));
sagaMiddleware.run(watchUser);
export default store;