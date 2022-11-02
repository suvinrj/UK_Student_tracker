import { StyleSheet, Text, View, TextInput as TextInputRN } from 'react-native'
import React from 'react'
import { keyboardType } from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes'

const TextInput = ({title, placeholder, onChangeText, value, keyboardType}) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <TextInputRN style={styles.input} placeholder={placeholder} onChangeText={onChangeText} value={value} keyboardType={keyboardType}/>
    </View>
  )
}

export default TextInput

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        fontFamily: "Roboto-Medium",
        color: '#020202',
        marginBottom: 6,
    }, 
    input: {
        borderWidth: 1,
        width: '100%',
        height: 41,        
        borderColor: '#020202',
        borderRadius: 8,
        paddingLeft: 10,
        paddingHorizontal: 10,
    }
})