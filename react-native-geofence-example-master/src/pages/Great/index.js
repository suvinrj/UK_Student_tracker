import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap } from '../../components'
import { Greatbutton } from '../../assets/icons'

const Great = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Greatbutton/>
      <Gap height={34} />
      <Button title="Continue" textColor='white' onPress={()=>navigation.navigate('Menu')} color="#D12A2A"/>
    </View>
  )
}

export default Great

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
})