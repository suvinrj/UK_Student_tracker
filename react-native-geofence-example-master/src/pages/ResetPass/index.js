import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { IconBack } from '../../assets/icons'
import { Button, TextInput, Gap } from '../../components'

const ResetPass = ({navigation, title='Reset Password', onBack}) => {
  return (
    <View>
        <View style={styles.headerWrapper}>
        {onBack && (
        <TouchableOpacity onPress={onBack} activeOpacity={0.7}>
        <View style={styles.back}>
            
        </View>
        </TouchableOpacity>
        )}
    <View style={styles.iconBack}>
        <TouchableOpacity activeOpacity={0.7}>
            <IconBack 
            onPress={() => navigation.navigate('ResetPassOne')}
            />
        </TouchableOpacity>
    </View>
    <Gap width={20} />
    <Text style={styles.text}>{title}</Text>
  </View>
  <View style={styles.text3}>
    <TextInput title='New Password' placeholder='  *****'></TextInput>
    <Gap height={26} />
    <TextInput title='Confirm Password' placeholder='  *****'></TextInput>
  </View>
  <Gap height={61} />
  <Button mL={110} mR={120} style={styles.button1} title={'Submit'} onPress={() => navigation.navigate('tabsNav')}>Submit</Button>
  </View>

  )
}

export default ResetPass

const styles = StyleSheet.create({
    headerWrapper: {
        backgroundColor: '#D3D3D380',
        flexDirection: 'row',
    },
    iconBack:{
        marginLeft: 15,
        marginTop: 42,
        marginBottom: 21,
    },  
    back:{
        padding: 10,
    }, 
    text: {
        fontSize: 35, 
        fontFamily: 'Roboto-Bold',
        color: 'black',
        marginTop: 45,
    },
    text3: {
        fontSize: 15,
        marginLeft: 81,
        marginRight: 73,
        marginTop: 94,
    },
})