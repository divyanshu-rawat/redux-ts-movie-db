import { put, takeLatest, all } from "redux-saga/effects";

async function* getMovies() {
    const key = '65e043c24785898be00b4abc12fcdaae';
    const data = yield await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US`)
        .then(response => console.log(response))
        .catch(err => err);

    yield put({ type: "MOVIES_RECEIVED", data: data });
}

function* moviesActionWatcher() {
    yield takeLatest("GET_MOVIES", getMovies);
}

export default function* rootSaga() {
    yield all([moviesActionWatcher()]);
}