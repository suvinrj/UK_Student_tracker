import { StyleSheet, Text, View, useEffect } from 'react-native'
import React from 'react'
import Routers from './src/routers'
import { NavigationContainer } from '@react-navigation/native'
import firebase from '@react-native-firebase/app'
import messaging from '@react-native-firebase/messaging'

const App = () => {
  // I call this code on the ./src/routers
  // useEffect(()=> {
  //   messaging().getToken(firebase.app().options.messagingSenderId).then((token)=>{
  //     console.log(`token:`, token);
  //   })
  // },[])
  return  (
  <NavigationContainer>
    <Routers />
  </NavigationContainer>
  )
}

export default App;