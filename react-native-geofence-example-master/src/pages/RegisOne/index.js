import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput, Gap } from '../../components'
import { IconBack, User } from '../../assets/icons'
import { CheckBox } from "react-native-elements";

const RegisOne = ({navigation}) => {
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);

  const genderMale = () =>{
      setMale(true);
      setFemale(false);
  }
  const genderFemale = () =>{
      setMale(false);
      setFemale(true);
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
      <Gap width={15} />
      <TouchableOpacity activeOpacity={0.7}>
        <IconBack 
        onPress={() => navigation.navigate('SignUp')}
        />
      </TouchableOpacity>
      <Text style={styles.text}>Registration</Text>
      </View>
      <Gap height={30} />
      <Text style={styles.text2}>Welcome, John Doe</Text>
      <Gap height={10} />
      <View style={styles.border} />
      <Gap height={10} />
      <TouchableOpacity activeOpacity={0.8}>
        <User width={113} height={115} style={{marginLeft: 145}}/>
      </TouchableOpacity>
      <Gap height={30} />
      <View style={styles.birthdate}>
        <TextInput title="Birthdate" />
      </View>
      <Gap height={20} />
      <Text style={styles.text3}>Gender</Text>
      <Gap height={10} />
      <View style={styles.checkBoxWrapper}>
        <View style={styles.checkbox}>
            <CheckBox 
            title="Male"
            checked={male}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            onPress={genderMale}
            />
        </View>
        <View style={styles.checkbox}>
            <CheckBox
            title="Female"
            checked={female}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            onPress={genderFemale}
            />
        </View>
    </View>
      <View style={styles.footer}>
        <Button mL={120} mR={120} style={styles.button1} title={'Next'} onPress={() => navigation.navigate('RegisTwo')}>Next</Button>
        <Gap height={25} />
        <View style={styles.border1} />
      </View>
    </View>
  )
}

export default RegisOne

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    footer: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 120,
    },
    checkbox: {
      height: 50
    },
    checkBoxWrapper: {
      flexDirection: 'row',
      marginLeft: 30,
    },
    headerWrapper: {
        backgroundColor: '#D3D3D380',
        paddingTop: 40,
        paddingBottom: 33,
        flexDirection: 'row',
        alignItems: 'center'
    },
    birthdate: {
      marginLeft: 32,
      marginRight: 230,
    },
    text: {
        fontSize: 35, 
        fontFamily: 'Roboto-Bold',
        color: 'black',
        marginLeft: 14
    },
    text2: {
        fontSize: 24,
        fontFamily: 'Roboto-Bold',
        color: 'black',
        marginLeft: 90
    },
    text3: {
        fontSize: 15,
        fontFamily: 'Roboto-Bold',
        color: 'black',
        marginLeft: 33,
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
        borderRadius: 10,
    }, 
})