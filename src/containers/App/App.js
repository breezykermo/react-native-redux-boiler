import React from 'react'
import {
  View,
  Image,
  Text,
} from 'react-native'
import styles from './App.styles.js'
import Topbar from '../../components/Topbar'

export default () => (
  <View style={styles.container}>
    <Topbar />
    <Image 
      style={{
        width: 350,
        height: 200,
        paddingTop: 0,
        marginTop: 0
      }}
      resizeMode={"cover"}
      source={{uri:'https://unsplash.it/600/400/?random'}}
    />
    <Text
      style={{
        color: 'black',
        fontSize: 24,
        fontWeight: 'normal',
        fontFamily: 'Helvetica Neue',
        textAlign: 'center'
      }}>
      Welcome to this React Native Redux boiler.
    </Text>
  </View>
)
