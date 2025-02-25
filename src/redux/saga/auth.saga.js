import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';


import { Alert } from 'react-native';
import { registerFail, registerRequest, registerSuccess } from '../slicers/auth.slicers';

function* registerSaga(action) {
    try {
      const { data, callback } = action.payload;
      const result = yield axios.post('http://localhost:4000/register', data);
      yield put(registerSuccess({ data: result.data }));
      yield callback();
      Alert.alert.success({
        message: 'Đăng ký thành công',
      });
    } catch (e) {
      yield put(
        registerFail({
          error: e.response.data === 'Email already exists' ? 'Email đã tồn tại' : e.response.data,
        })
      );
    }
  }

  export default function* authSaga() {
    yield takeEvery(registerRequest, registerSaga);
  }
