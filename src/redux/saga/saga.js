import {fork, all, call, put, takeEvery, takeLatest} from 'redux-saga/effects';import axios from 'axios';
import { notification } from 'antd';
import { CloseCircleFilled ,CheckCircleFilled } from '@ant-design/icons';
import { useSelector } from 'react-redux';


function* login({type, payload}) {
    try {
      let { data: { token  } } = yield call(axios.post, 'https://stage.blendedsense.com//api/login',payload);
      let { data: { user  } } = yield call(axios.get, 'https://stage.blendedsense.com/api/users/me', {headers : { Authorization: `Bearer ${token}` }});
      yield put({type: 'LOGIN_SUCCESS', payload: { user, token }});
      localStorage.setItem('Token', token);
      notification.success({
        message: "Login success",
        duration: 2,
        className: "notification-success",
        closeIcon:<CheckCircleFilled className='icon-success'/>
      });

    } catch (error) {
        console.log(error.response.data.message );
      yield put({type: 'LOGIN_FAILED', payload: { error: error.response.data.message }});
      notification.error({
        message: error.response.data.message,
        className: "notification-failure",
        duration: 2,
        closeIcon:<CloseCircleFilled className='icon-close'/>
      });
    }
  }

export function* loginSaga() {
    yield all([
      takeEvery('LOGIN', login)
    ]);
  }

  function* update({type, payload}) {
    try {
      let { data: { user  } } = yield call(axios.post, 'https://stage.blendedsense.com/api/users/producer_profile_update',payload.edits,{headers : { Authorization: `Bearer ${payload.token}` }});
      let token1 = payload.token;
      let user1=user;
      yield put({type: 'UPDATE_SUCCESS',payload: { user1, token1 }});
      notification.success({
        message: "Profile data update success",
        duration: 2,
        className: "notification-success",
        closeIcon:<CheckCircleFilled className='icon-success'/>
      });

    } catch (error) {
        console.log(error.response.data.message );
      yield put({type: 'UPDATE_FAILED', payload: { error: error.response.data.message }});
      notification.error({
        message: error.response.data.message,
        className: "notification-failure",
        duration: 2,
        closeIcon:<CloseCircleFilled className='icon-close'/>
      });
    }
  }

export function* updatesaga() {
    yield all([
      takeEvery('UPDATE', update)
    ]);
  }

export function* watchUser() {
    yield all([
      fork(loginSaga),
      fork(updatesaga),
    ]);
  }