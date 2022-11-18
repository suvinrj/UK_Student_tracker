import { ScrollView, StyleSheet, View, Alert } from 'react-native'
import React, {useState} from 'react'
import { Button, Header, TextInput, Gap } from '../../components'
import { auth, db } from '../../../firebase/firebase-config'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref as r, getDatabase, child, get, update} from 'firebase/database'
import { storeData } from '../../utils/LocalStorage';

const SignUpStudent = ({navigation}) => {

  const [isSignedIn, setIsSignedIn] = useState(false);
  //text input states

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [PhoneNumber,setPhoneNumber] = useState('');
  const [password,setPassword] = useState('');
    const [noReg, setNoReg] = useState('');

  const RegisterUser = () => {
    if(!name || !password || !email || !PhoneNumber || !noReg){
      Alert.alert(
        "Alert!",
        "Please fill all boxes. Thank you!"
      )
    } else {

      console.log('res', email, password, noReg);
      createUserWithEmailAndPassword(auth, email, password)
      .then((re)=>{
        console.log(re);
        update(r(db, `Student/${noReg}`), {
          Email: email,
          Name: name,
          ParentToken: '',
          PhoneNumber: PhoneNumber,
        })
        update(r(db, `Student/${auth.currentUser.uid}`),{
          noReg: noReg
        })
        const data = {
          uid: re.user.uid,
        }
        storeData('user', data)
        navigation.navigate('MenuStudent', data)
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  }


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.page} >
      <Header title='Student, Sign Up' />
      <View style={styles.contentWrapper} >
      <TextInput title="Name" placeholder="Type your name" value={name} onChangeText={text=>setName(text)}/>
        <Gap height={16} />
      <TextInput title="No. Regis" placeholder="Type Nomor Regis" value={noReg}  onChangeText={text=>setNoReg(text)}/>
        <Gap height={24} />
        <TextInput title="Email Address" placeholder="Type your email address" value={email} onChangeText={text=>setEmail(text)}/>
        <Gap height={16} />
        <TextInput title="Password" placeholder="Type your password" value={password}  onChangeText={text=>setPassword(text)}/>
        <Gap height={24} />
        <TextInput title="Phone Number" placeholder="Type your phone number" keyboardType='number-pad' value={PhoneNumber}  onChangeText={text=>setPhoneNumber(text)}/>
    
        <Gap height={24} />
        
        <Button 
          title="Register"
          onPress={() => RegisterUser()} />
        {/* <Gap height={12} />
        <Button 
          title="Register" 
          color="#8D92A3" 
          textColor='white' 
          onPress={() => navigation.navigate('SignUp')} 
        /> */}
      </View>
    </View>
    </ScrollView>
  )
}

export default SignUpStudent;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 24,
    marginTop: 24,
    paddingTop: 26,
  },
})









