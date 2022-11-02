import { StyleSheet, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Button, Header, TextInput, Gap } from '../../components'
import { auth, db } from '../../../firebase/firebase-config'
import { createUserWithEmailAndPassword, loginUserWithEmailAndPassword } from "firebase/auth";
import { ref as r, getDatabase, child, get, update} from 'firebase/database'
import { getData, useForm } from '../../utils';

const AddChild = ({route: {
  params: {uid},
},
navigation,}) => {

  // const [form, setForm] = useForm({
  //   name: '',
  //   email: '',
  // });

 
  useEffect(() => {
    navigation.addListener('focus', () => {
      getDataUser();
    });
  }, []);

  const getDataUser = () => {
    getData('user').then(res => {
      setForm(res);
    });
  };

  const [isSignedIn, setIsSignedIn] = useState(false);
  //text input states

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [noReg,setNoRegis] = useState('');
  let data = []

  const RegisterUser = () => {
    const dbRef = r(getDatabase());
    get(child(dbRef, `Student/${noReg}`)).then((snapshot) => {
      snapshot.forEach(function(item){
        var itemVal = item.val()
        data.push(itemVal)
      })
      console.log("email: ", data[0])

      if (snapshot.exists()) {
        update(r(db, `Parent/${uid}/Student`), {
          noReg: data[3],
          StudentPhoneNumber: data[2]
        })
        // navigation.navigate('Menu');
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
}


  return (
    <View style={styles.page} >
      <Header title='Add Student' />
      <View style={styles.contentWrapper} >
       
       
        <TextInput title="Student No. Regis" placeholder="Type Nomor Regis" value={noReg} onChangeText={text=>setNoRegis(text)}/>
        <Gap height={36} />
        <Button 
          title="Add Student"
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

export default AddChild;

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









