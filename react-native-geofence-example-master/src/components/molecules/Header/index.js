import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({title, textColor = '#868FEF'}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text(textColor)}>Hello {title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        paddingLeft: 17,
        paddingVertical: 20,
        backgroundColor: '#FFF9F9'
      }, 
    Text: textColor => ({
        fontSize: 32,
        //textAlign: 'center',
        fontFamily: 'Roboto-Bold',
        fontWeight: '900',
        color: textColor,
    })
})