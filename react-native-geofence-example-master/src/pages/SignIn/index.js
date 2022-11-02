import { StyleSheet, View } from 'react-native'
import React, {useState} from 'react'
import { Button, Header, TextInput, Gap } from '../../components'
import { auth } from '../../../firebase/firebase-config'
import { signInWithEmailAndPassword } from "firebase/auth";

const SignInParent = ({navigation}) => {

  const [isSignedIn, setIsSignedIn] = useState(false);
  //text input states

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const SignInUser = () => {
    console.log('res', email, password);
    signInWithEmailAndPassword(auth, email, password)
    .then((re)=>{
      console.log(re.user.uid);
      navigation.navigate('Menu')
    })
  .catch((err)=>{
    console.log(err);
  })
}


  return (
    <View style={styles.page} >
      <Header title='Parent, Sign In' />
      <View style={styles.contentWrapper} >
        <TextInput title="Email Address" placeholder="Type your email address" value={email} onChangeText={text=>setEmail(text)}/>
        <Gap height={16} />
        <TextInput title="Password" placeholder="Type your password" value={password} secureTextEntry={true} onChangeText={text=>setPassword(text)}/>
        <Gap height={24} />
        <Button 
          title="Sign In"
          onPress={() => SignInUser()} />
        <Gap height={12} />
        <Button 
          title="Create New Account" 
          color="#8D92A3" 
          textColor='white' 
          onPress={() => navigation.navigate('SignUpParent')} 
        />
      </View>
    </View>
  )
}

export default SignInParent;

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









