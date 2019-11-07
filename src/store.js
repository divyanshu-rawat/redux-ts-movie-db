/* Redux */
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";

/* Redux Sagas */
import createSagaMiddleware from "redux-saga";
import { logger } from "redux-logger";
import rootSaga from "./rootSagas";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);
