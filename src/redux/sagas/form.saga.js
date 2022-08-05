import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function* postForm(action) {
    try {
        const response = yield axios.post('/api/history', action.payload);
        yield put({
            type: 'FETCH_HISTORY',
            payload: response.data,
        });
    } catch (err) {
        console.log(err);
    }
}

function* formSaga() {
    yield takeEvery('POST_FORM', postForm);
}

export default formSaga;
