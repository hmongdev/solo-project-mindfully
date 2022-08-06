export default function* updateName() {
    try {
        const response = yield axios.get('/history');
        yield put({ type: 'SET_STUDENT_LIST', payload: response.data });
    } catch (err) {
        console.log(err);
    }
}


import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchHistory() {
    try {
        const response = yield axios.get('/api/history');
        yield put({ type: 'SET_HISTORY', payload: response.data });
    } catch (err) {
        console.log(err);
    }
}

function* historySaga() {
    yield takeEvery('FETCH_HISTORY', fetchHistory);
}

export default historySaga;