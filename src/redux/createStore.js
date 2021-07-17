import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddle from 'redux-saga'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddle()
export const middlewares = [thunk, sagaMiddleware, logger]

// export const store = createStore(rootReducer, applyMiddleware(...middlewares))

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
)
sagaMiddleware.run(rootSaga)
export default store
