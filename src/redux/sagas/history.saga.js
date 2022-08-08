import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// GET everything from "history"
function* fetchHistory() {
    try {
        const response = yield axios.get('/api/history');
        yield put({ type: 'SET_HISTORY', payload: response.data });
    } catch (err) {
        console.log(err);
    }
}

// DELETE specific item from "history"
function* deleteItem(action) {
    try {
        console.log('DELETE item is:', action.payload);
        yield axios.delete(`/api/history/${action.payload}`);
        yield put({ type: 'FETCH_HISTORY' });
    } catch (error) {
        console.log('ERR with deleteItem:', error);
    }
}

function* historySaga() {
    yield takeEvery('FETCH_HISTORY', fetchHistory);
    yield takeEvery('DELETE_ITEM', deleteItem);
}

export default historySaga;
