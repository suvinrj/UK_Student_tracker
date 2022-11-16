import { StyleSheet, View, Alert } from 'react-native'
import React, {useState} from 'react'
import { Button, Header, TextInput, Gap } from '../../components'
import { auth, db } from '../../../firebase/firebase-config'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref as r, getDatabase, child, get, update} from 'firebase/database'
import { storeData } from '../../utils/LocalStorage';

const SignUpParent = ({navigation}) => {

  const [isSignedIn, setIsSignedIn] = useState(false);
  //text input states

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [PhoneNumber,setPhoneNumber] = useState('');
  const [noReg,setnoReg] = useState('');
  let dataStudent = []

  const RegisterUser = () => {
    if(!name || !password || !email || !PhoneNumber || !noReg){
      Alert.alert(
        "Alert!",
        "Please fill all boxes. Thank you!"
      )
    } else {
      console.log('res', email, password);
      const dbRef = r(getDatabase());
        get(child(dbRef, `Student/${noReg}`)).then((snapshot) => {
          snapshot.forEach(function(item){
            var itemVal = item.val()
            dataStudent.push(itemVal)
          })

          if (snapshot.exists()) {
            createUserWithEmailAndPassword(auth, email, password)
            .then((re)=>{
              update(r(db, `Parent/${re.user.uid}`), {
                Email: email,
                Name: name,
                PhoneNumber: PhoneNumber
              })
              console.log('dataStudent:', dataStudent)
              update(r(db, `Parent/${re.user.uid}/Student`), {
                noReg: noReg,
                StudentPhoneNumber: dataStudent[3]
              })
              const data = {
                uid: re.user.uid,
              }
              storeData('user', data)
              navigation.navigate('Menu', data)
            })
          .catch((err)=>{
            console.log(err);
          })
          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });
    }
}


  return (
    <View style={styles.page} >
      <Header title='Hi Parent, Sign Up' />
      <View style={styles.contentWrapper} >
        <TextInput title="Name" placeholder="Type your name" value={name} onChangeText={text=>setName(text)}/>
        <Gap height={16} />
        <TextInput title="Email Address" placeholder="Type your email address" value={email} onChangeText={text=>setEmail(text)}/>
        <Gap height={16} />
        <TextInput title="Password" placeholder="Type your password" value={password} secureTextEntry={true} onChangeText={text=>setPassword(text)}/>
        <Gap height={24} />
        <TextInput title="Phone Number" placeholder="Type your Phone Number" value={PhoneNumber} secureTextEntry={true} onChangeText={text=>setPhoneNumber(text)}/>
        <Gap height={24} />

      
        <TextInput title="Student Nomor Regis " placeholder="Type Student Nomor Regis"  value={noReg} secureTextEntry={true} onChangeText={text=>setnoReg(text)}/>
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
  )
}

export default SignUpParent;

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









