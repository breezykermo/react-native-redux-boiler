import React from 'react'
import {
  AppRegistry
} from 'react-native'
import App from './containers/App'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

export default function native () {
  // remove warnings overlay
  console.disableYellowBox = true // eslint-disable-line no-console

  const store = configureStore()

  const OnsiteHire = () => (
    <Provider store={store} >
      <App />
    </Provider>
  )

  AppRegistry.registerComponent('OnsiteHire', () => OnsiteHire)
}
