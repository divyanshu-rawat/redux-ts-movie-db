import { fork, all } from 'redux-saga/effects';
import mSaga from './sagas';

export default function* rootSaga() {
  yield all([
    fork(mSaga),
  ]);
}