import test from 'ava'
import { fromJS } from 'immutable'
import reducer from '../src/reducers/example'
import * as actions from '../src/reducers/example/actions'

// simple assertions
test('test suite can test', t => {
  t.is('Hello world', 'Hello world')
})

// reducer testing
test('change value from a fresh state', t => {
  const state = reducer(undefined, actions.updateDemo('breeze'))
  t.deepEqual(state.toJS(), { demo: 'breeze' })
})

test('change value from a previous state', t => {
  const state = reducer(fromJS({ demo: 'breeze' }), actions.updateDemo('breezier'))
  t.deepEqual(state.toJS(), { demo: 'breezier' })
})

test('play nicely with other reducers', t => {
  const previousState = fromJS({ demo: 'past' })
  const state = reducer(previousState, { type: 'NONE' })
  t.is(state, previousState)
})
