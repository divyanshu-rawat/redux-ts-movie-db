import { put, takeLatest, all, call } from "redux-saga/effects";

function* getMovies() {
    const key = '65e043c24785898be00b4abc12fcdaae';
    const data = yield fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US`)
        .then(response => response.json())
        .catch(err => err);

    yield put({ type: "MOVIES_RECEIVED", data: data });
}

function* moviesActionWatcher() {
    yield takeLatest("GET_MOVIES", getMovies);
}

export default function* rootSaga() {
    yield all([moviesActionWatcher()]);
}