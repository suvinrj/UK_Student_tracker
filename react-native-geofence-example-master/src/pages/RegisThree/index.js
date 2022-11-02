import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button, TextInput, Gap } from '../../components'
import { IconBack, User } from '../../assets/icons'

const RegisTwo = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.headerWrapper}>
        <Gap width={15} />
        <IconBack 
        onPress={() => navigation.navigate('RegisTwo')}
        />
        <Text style={styles.text}>Registration</Text>
      </View>
      <Gap height={30} />
      <Text style={styles.text3}>Describe yourself</Text>
      <TextInput mL={40} mR={40} pad={30} placeholder=' I am ...'></TextInput>
      <Gap height={30} />
      <Text style={styles.text3}>Interest</Text>
      <Gap height={10} />
      <View style={styles.interest1}>
        <TouchableOpacity>
        <Text style={styles.interestText}>Photography</Text>
        </TouchableOpacity>
        <Gap width={2} />
        <TouchableOpacity>
        <Text style={styles.interestText}>Tech</Text>
        </TouchableOpacity>
        <Gap width={2} />
        <TouchableOpacity>
        <Text style={styles.interestText}>Food</Text>
        </TouchableOpacity>
        <Gap width={2} />
        <TouchableOpacity>
        <Text style={styles.interestText}>Art</Text>
        </TouchableOpacity>
        <Gap width={2} />
        <TouchableOpacity>
        <Text style={styles.interestText}>Sports</Text>
        </TouchableOpacity>
      </View>
      <Gap height={5} />
      <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 40}}>
        <TouchableOpacity>
        <Text style={styles.interestText}>Music</Text>
        </TouchableOpacity>
        <Gap width={2} />
        <TouchableOpacity>
        <Text style={styles.interestText}>Gaming</Text>
        </TouchableOpacity>
        <Gap width={2} />
        <TouchableOpacity>
        <Text style={styles.interestText}>Fashion</Text>
        </TouchableOpacity>
        <Gap width={2} />
        <TouchableOpacity>
        <Text style={styles.interestText}>Travel</Text>
        </TouchableOpacity>
      </View>
      
      <TextInput style={{height: 120}} mL={40} mR={220} placeholder=' Others'></TextInput>
      <Gap height={90} />
      <Button mL={120} mR={120} style={styles.button1} title={'Done'} onPress={() => navigation.navigate('tabsNav')}>Next</Button>
      <Gap height={25} />
      <View style={styles.progressBar}>
        <View style={styles.border1} />
        <View style={styles.border1} />
        <View style={styles.border1} />
      </View>
    </View>
    
  )
}

export default RegisTwo

const styles = StyleSheet.create({
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
    interestText: {
      fontFamily: 'Roboto-Bold',
      fontSize: 13,
      color: 'white',
      borderRadius: 17,
      backgroundColor: '#554CCDCC',
      paddingHorizontal: 10,
      paddingVertical: 3,
      height: 25
    },
    interest1: {
      flexDirection: 'row', 
      justifyContent: 'flex-start', 
      marginLeft: 40,
    },
    text: {
        fontSize: 35, 
        fontFamily: 'Roboto-Bold',
        color: 'black',
        marginLeft: 14,
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
        marginLeft: 40
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
    }
})