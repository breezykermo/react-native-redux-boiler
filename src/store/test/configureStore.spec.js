import configureStore from '../configureStore'
import { expect } from 'chai'

describe('configureStore', () => {
  it('is a function', () => {
    expect(typeof configureStore).to.equal('function')
  })
})
