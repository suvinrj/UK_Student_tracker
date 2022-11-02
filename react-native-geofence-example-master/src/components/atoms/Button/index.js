import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({title, color = '#868FEF', textColor = '#FFFFFF', onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.container(color)}>
      <Text style={styles.Text(textColor)}>{title}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default Button;

const styles = StyleSheet.create({
    container: color => ({
        height: 45,
        backgroundColor: color,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    }), 
    Text: textColor => ({
        fontSize: 24,
        fontFamily: 'Roboto-Medium',
        color: textColor,
    }),
})