import React from 'react'
import {
  View,
  Text,
} from 'react-native'
import styles from './Topbar.styles'

export default Topbar = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>I am a topbar</Text>
    </View>
  )
}
