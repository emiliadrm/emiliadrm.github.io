import { takeLatest } from 'redux-saga/effects';

export function* watcherSaga() {
  yield takeLatest('API_CALL', workerSaga);
}

function* workerSaga() {
  console.log('wololooooo');
}
