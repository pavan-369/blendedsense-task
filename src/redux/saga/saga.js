import {fork, all, call, put, takeEvery} from 'redux-saga/effects';import axios from 'axios';
import { notification } from 'antd';
import { CloseCircleFilled ,CheckCircleFilled } from '@ant-design/icons';


function* login({type, payload}) {
    try {
      let { data: { token  } } = yield call(axios.post, 'https://stage.blendedsense.com//api/login',payload.credentials);
      localStorage.setItem('Token', token);
      const token1 = localStorage.getItem("Token")
      let { data: { user  } } = yield call(axios.get, 'https://stage.blendedsense.com/api/users/me', {headers : { Authorization: `Bearer ${token1}` }});
      let { data: { projects  } } = yield call(axios.get, 'https://stage.blendedsense.com/api/projects/?status=1', {headers : { Authorization: `Bearer ${token1}` }});
      let arachive = yield call(axios.get, 'https://stage.blendedsense.com/api/projects/?status=2', {headers : { Authorization: `Bearer ${token1}` }});
      let arachiveProjects=arachive.data.projects;
      console.log("arachive",arachiveProjects )
      yield put({type: 'LOGIN_SUCCESS', payload: { user, token ,projects ,arachiveProjects }});
      payload.Navigate("/dashboard");
      
      notification.success({
        message: "Login success",
        duration: 0,
        className: "notification-success",
        closeIcon:<CheckCircleFilled className='icon-success'/>
      });

    } catch (error) {
        console.log(error.response.data.message );
      yield put({type: 'LOGIN_FAILED', payload: { error: error.response.data.message }});
      notification.error({
        message: error.response.error.message,
        className: "notification-failure",
        duration: 0,
        closeIcon:<CloseCircleFilled className='icon-close'/>
      });
    }
  }

export function* loginSaga() {
    yield all([
      takeEvery('LOGIN', login)
    ]);
  }

 function* refresh({type, payload}) {
    try {
      const token2 = localStorage.getItem("Token")
      let { data: { user  } } = yield call(axios.get, 'https://stage.blendedsense.com/api/users/me', {headers : { Authorization: `Bearer ${token2}` }});
      let user2=user;
      yield put({type: 'REFRESH_SUCCESS', payload: { user2 , token2}});

    } catch (error) {
        console.log(error.response.data.message );
        notification.error({
        message: error.response.error.message,
        className: "notification-failure",
        duration: 0,
        closeIcon:<CloseCircleFilled className='icon-close'/>
      });
    }
  }

export function* refreshSaga() {
    yield all([
      takeEvery('REFRESH', refresh)
    ]);
  }

  function* update({type, payload}) {
    try {
      let { data: { user , message } } = yield call(axios.post, 'https://stage.blendedsense.com/api/users/producer_profile_update',payload.edits,{headers : { Authorization: `Bearer ${payload.token}` }});
      let token1 = payload.token;
      let user1=user;
      yield put({type: 'UPDATE_SUCCESS',payload: { user1, token1 }});
      notification.success({
        message: message ,
        duration: 0,
        className: "notification-success",
        closeIcon:<CheckCircleFilled className='icon-success'/>
      });
    } catch (error) {
        console.log(error.response.data.message );
      yield put({type: 'UPDATE_FAILED', payload: { error: error.response.data.message }});
      notification.error({
        message: error.response.error.message,
        className: "notification-failure",
        duration: 0,
        closeIcon:<CloseCircleFilled className='icon-close'/>
      });
    }
  }

export function* updatesaga() {
    yield all([
      takeEvery('UPDATE', update)
    ]);
  }

  function* reset({type, payload}) {
    try {
      let response = yield call(axios.put, 'https://stage.blendedsense.com/api/users/change_password',payload.credentials,{headers : { Authorization: `Bearer ${payload.token}` }});
      notification.success({
        message: response.data.message,
        duration: 0,
        className: "notification-success",
        closeIcon:<CheckCircleFilled className='icon-success'/>
      });

    } catch (error) {
        console.log(error.response.data.error);
      notification.error({
        message: error.response.data.error,
        className: "notification-failure",
        duration: 0,
        closeIcon:<CloseCircleFilled className='icon-close'/>
      });
    }
  }

export function* resetsaga() {
    yield all([
      takeEvery('RESET', reset)
    ]);
  }

export function* watchUser() {
    yield all([
      fork(loginSaga),
      fork(updatesaga),
      fork(resetsaga),
      fork(refreshSaga),
    ]);
  }