import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState}  from 'react'
import { Button, TextInput, Gap } from '../../components'
import { IconBack, User } from '../../assets/icons'
import RNPickerSelect from 'react-native-picker-select';

const RegisTwo = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>  
      <Gap width={15} />
        <IconBack 
        onPress={() => navigation.navigate('RegisOne')}
        />
        <Text style={styles.text}>Registration</Text>
      </View>
      <View style={styles.textInput}>
        <Gap height={30} />
        <TextInput title="Faculty" placeholder='  Faculty of..'></TextInput>
        <Gap height={30} />
        <TextInput title="Semester" placeholder='  6th'></TextInput>
        <Gap height={30} />
      </View>
      
      <View style={styles.position}>
      <Text style={styles.text3}>Position</Text>
      <RNPickerSelect
            placeholder={{
              label: 'Select',
              value: 'Select',
              
            }}
            onValueChange={(value) => console.log()}
            items={[
                { label: 'Student', value: 'Student'},
                { label: 'Lecturer', value: 'Lecturer' },
                { label: 'Staff', value: 'Staff' },
            ]}
            style={
                pickerSelectStyles.inputAndroid
            }
        />
      </View>
      <View style={styles.footer}>
        <Button mL={120} mR={120} title={'Next'} onPress={() => navigation.navigate('RegisThree')}>Next</Button>
        <Gap height={25} />
        <View style={styles.progressBar}>
          <View style={styles.border1} />
          <View style={styles.border1} />
        </View>
      </View>
    </View>
  )
}

export default RegisTwo

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    footer: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 120,
    },
    textInput: {
      marginLeft: 29,
      marginRight: 41,
    },
    position: {
      marginLeft: 29,
      marginRight: 220,
    },  
    headerWrapper: {
        backgroundColor: '#D3D3D380',
        paddingTop: 40,
        paddingBottom: 33,
        flexDirection: 'row',
        alignItems: 'center'
    },
    back:{
        padding: 10,
    }, 
    text: {
        fontSize: 35, 
        fontFamily: 'Roboto-Bold',
        color: 'black',
        marginLeft: 14
    },
    text2: {
        fontSize: 15,
        fontFamily: 'Roboto-Bold',
        color: 'black',
        marginLeft: 26
    },
    text3: {
        fontSize: 15,
        fontFamily: 'Roboto-Bold',
        color: 'black',
    },
    border: {
        left: 45,
        width: 311,
        borderBottomWidth: 3,
        borderColor: '#554CCD'
    }, 
    border1: {
        left: 45,
        width: 104,
        borderBottomWidth: 10,
        borderColor: '#554CCD',
        borderRadius: 10
    }, 
  progressBar: {
    flexDirection: 'row'
  },
})

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});