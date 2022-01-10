import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

export const store = compose(
    applyMiddleware(...middleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore)(reducers);

sagaMiddleware.run(rootSaga);