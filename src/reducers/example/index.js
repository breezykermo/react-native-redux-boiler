import defaultState from './defaultState'
import { UPDATE_DEMO } from './actions'

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_DEMO:
      return state.set('demo', action.value)

    default:
      return state
  }
}
