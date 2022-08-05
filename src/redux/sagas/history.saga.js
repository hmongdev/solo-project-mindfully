import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchHistory() {
    try {
        const response = yield axios.get('/api/history');
        console.log(`what is response.data`, response.data);
        yield put({ type: 'SET_HISTORY', payload: response.data });
    } catch (err) {
        console.log(err);
    }
}

function* historySaga() {
    yield takeEvery('FETCH_HISTORY', fetchHistory);
}

export default historySaga;
