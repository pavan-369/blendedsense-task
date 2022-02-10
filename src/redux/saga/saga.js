import {all, call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import { notification } from 'antd';
import { CloseCircleFilled ,CheckCircleFilled } from '@ant-design/icons';

function* login({type, payload}) {
    try {
      let { data: { token  } } = yield call(axios.post, 'http://34.194.167.104/api/login',payload);
      let { data: { user  } } = yield call(axios.get, 'http://stage.blendedsense.com/api/users/me', {headers : { Authorization: `Bearer ${token}` }});
      yield put({type: 'LOGIN_SUCCESS', payload: { user, token }});
      notification.success({
        message: "Login success",
        duration: 2,
        className: "notification-success",
        closeIcon:<CheckCircleFilled className='icon-success'/>
      });

    } catch (error) {
        console.log(error.response.data.message );
      yield put({type: 'LOGIN_FAILED', payload: { error: error.response.data.message }});
      // toast.warning(error.response.data.message);
      notification.error({
        message: error.response.data.message,
        className: "notification-failure",
        duration: 20,
        closeIcon:<CloseCircleFilled className='icon-close'/>
      });
    }
  }

export function* watchUser() {
    yield all([
      takeEvery('LOGIN', login)
    ]);
  }