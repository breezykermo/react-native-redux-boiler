import {
  createStore,
  // applyMiddleware,
  compose,
} from 'redux'
import reducers from '../reducers'

export default function configureStore(initialState) {
  const middlewares = [
    // add thunk or sagas
  ]
  if (__DEV__) {
    if (global.reduxNativeDevTools) middlewares.push(global.reduxNativeDevTools())
  }
  return createStore(
    reducers,
    initialState,
    compose(...middlewares)
  )
}
