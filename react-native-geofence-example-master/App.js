import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Routers from './src/routers'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return  (
  <NavigationContainer>
    <Routers />
  </NavigationContainer>
  )
}

export default App;