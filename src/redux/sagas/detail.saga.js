import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function* getDetail(action) {
    try {
        const response = yield axios.get(`/api/detail/${action.payload}`);
        yield put({
            type: 'SET_DETAIL',
            payload: response.data, //one detail
        });
    } catch (err) {
        console.log(err);
    }
}

export default function* detailSaga() {
    yield takeEvery('FETCH_DETAIL', getDetail);
}
