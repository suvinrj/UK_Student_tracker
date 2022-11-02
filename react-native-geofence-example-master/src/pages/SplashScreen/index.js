import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import { Logo } from '../../assets'
import {ColorPropType,ViewPropTypes,EdgeInsetsPropType,PointPropType,} from 'deprecated-react-native-prop-types';

const SplashScreen = ({navigation}) => {
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('Pick')
    }, 3000)
  },[])
  return (
    <View style={styles.page}>
      <Logo/>
      <Text style={styles.text}>Student Tracker</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  text: {
    fontSize: 32,
    fontFamily: 'Poppins-Medium'
  }
})
