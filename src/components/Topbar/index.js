import React from 'react'
import {
  View,
  Text,
} from 'react-native'
import styles from './Topbar.styles'

const Topbar = () => (
  <View style={styles.container}>
    <Text style={styles.text}>I am a topbar</Text>
  </View>
)

export default Topbar
