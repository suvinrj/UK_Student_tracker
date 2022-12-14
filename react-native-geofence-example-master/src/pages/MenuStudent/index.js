import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react';
import { useState, useRef } from 'react';
import { useEffect } from 'react';
import { Locate, Logout, Notif, PhoneCall, RectPurple, WaParent, CallParent, LocateStudent } from '../../assets'
import { Gap, Header, ButtonMenu } from '../../components'
import MapView, { Callout, Circle, Marker }  from 'react-native-maps';
import {Linking} from 'react-native'
import GetLocation from 'react-native-get-location'
import {WhatsappCall} from '../../assets'
import { TouchableOpacity } from 'react-native';
import {getDatabase, ref, child, get} from "firebase/database";
import { auth } from '../../../firebase/firebase-config';
import { async } from '@firebase/util';





const MenuStudent = ({navigation}) => {

  const [PhoneNumber,setPhoneNumber] = useState('');
  const [studentName, setStudentName] = useState('')
  let wa = '';
  let noReg = '';
  const mapRef = useRef(null);

  const getNoreg = async () => {
    try {
      const database = getDatabase();
      const rootReference = ref(database);
      const dbGet = await get(child(rootReference, `Student/${auth.currentUser.uid}`));
      const dbValue = dbGet.val();
      noReg = dbValue.noReg;
      console.log("1. no reg:", noReg)
    } catch (getError) {
      console.log(getError)
    }
  };
  
  const getValues = async () => {
    console.log("2. no reg:", noReg)
    try {
      const database = getDatabase();
      const rootReference = ref(database);
      const dbGet = await get(child(rootReference, `Student/${noReg}`));
      const dbValue = dbGet.val();
      setStudentName(dbValue.Name)
      setPhoneNumber(dbValue.x_ParentPhoneNumber)
    } catch (getError) {
      console.log(getError)
    }
  };

  const getData = async () => {
    await getNoreg();
    getValues();
  }

useEffect(() => {
  getData();
  <MapView
  followsUserLocation
  showsUserLocation={true}
  userLocationUpdateInterval={500}
  onUserLocationChange={(e) =>{
    console.log("onUserLocationChange", e.nativeEvent.coordinate);
  }}
  loadingEnabled={true}
  style={styles.map}
  ref={mapRef}
>

</MapView>
}, []);

const getWa = () => {
  let check = PhoneNumber.substring(0,1);
  let added = PhoneNumber.substring(1,13);
  let setGetWa = PhoneNumber;
  if(check==='0'){
    setGetWa = `+62${added}`
    wa=setGetWa;
  } else {
    setGetWa = `+62${setGetWa}`
    wa=setGetWa;

  }
}

  function readData() {
    const starCountRef = ref(db, 'Student/' + PhoneNumber);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setPhoneNumber(data.PhoneNumber);   
    });
  }







  return (
    <View style={styles.page}>
      <Gap height={20} />
      <Header title={studentName} textColor='#868FEF'/>
      <Gap height={10} />
      <RectPurple/>
      
      {/* <View style={styles.Button1}>
      <ButtonMenu title="Call Student" textColor='white' color='#3DAB2B' onPress={()=>{Linking.openURL('tel:082394900558');} }/>
      </View>
      <Gap height={19} />
      <View style={styles.Button2}>
                <ButtonMenu title="WA Student" textColor='white' color='#3DAB2B' onPress={() => {
                  Linking.openURL(`whatsapp://send?phone=${+6282394900558}`)
                }} />
      </View>
      <Gap height={19} />
      <View style={styles.Button3}>
     <ButtonMenu title="Locate Student" textColor='white' color='#868FEF' onPress={()=>navigation.navigate('Maps')}/>   
     </View>
    
     

      
      <View style={styles.Button4}>
      <ButtonMenu title="View Notif" textColor='white' color='#EEC536' onPress={()=>navigation.navigate('Notification')}/>
      </View>     
      <Gap height={129} />

      

      <View style={styles.Button5}>
      <ButtonMenu title="Logout" textColor='white' color='#DA251D' onPress={()=>navigation.navigate('SignIn')}/>
      </View> */}
      
      <View style={styles.wacall}>
      <TouchableOpacity onPress={() => {
        getWa();
        Linking.openURL(`whatsapp://send?phone=${wa}`)
      }}>
      <WaParent/>
      </TouchableOpacity>
      </View>
      
 
      <View style={styles.callphone}>
      <TouchableOpacity onPress={()=>{Linking.openURL(`tel:${PhoneNumber}`)}}>
      <CallParent/>
      </TouchableOpacity>

      </View>

      <View style={styles.locateStudent}>
      <TouchableOpacity  onPress={()=>navigation.navigate('MainLoc')}>
      <LocateStudent/>
      </TouchableOpacity>
      </View>

      {/* <View style={styles.notifikasi}>
      <TouchableOpacity onPress={()=>navigation.navigate('Notification')}>
      <Notif/>
      </TouchableOpacity>
      </View> */}

      <View style={styles.Logout}>
      <TouchableOpacity onPress={()=>navigation.navigate('Pick')}>
      <Logout/>
      </TouchableOpacity>
      </View>

      {/* <View style={styles.Logout1}>
      <TouchableOpacity onPress={()=>navigation.navigate('AddChild')}>
      <Logout/>
      </TouchableOpacity>
      </View> */}
      
    
      

          
      

  
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: 349,
    width: 360,
    marginTop: 299,
    marginLeft: 20,
    
  },
Button1: {
  height: 10,
  marginRight: 220,
  marginTop: 30,
  marginLeft:15,
  
    },
Button2: {
  marginTop:-28,
  height: 100,
  marginLeft: 220,
  marginRight:15,
        },
Button3: {
  marginTop:-8,
  height: 100,
  marginLeft: 220,
  marginRight: 15,
            },
Button4: {
  height: 110,
  marginRight: 220,
  marginTop: -100,
  marginLeft:15,
         },

Button5: {
  
  marginRight: 15,
  marginTop: -100,
  marginLeft:15,
                  
        },
    

wacall:{
    marginLeft: 120,
    marginTop: 20,
        },

callphone:{
    marginLeft: 120,
    marginTop: 20,
        },  
        
locateStudent:{
    marginLeft: 120,
    marginTop: 20,
              }, 

// notifikasi:{
//     marginLeft: 50,
//     marginTop: -10,
//               }, 

Logout:{
    marginLeft: 35,
    marginTop: 20,
              }, 
              Logout1:{
                marginLeft: 40,
                marginTop: 20,
                          },
  
 });

export default MenuStudent




// <TouchableOpacity style={styles.button} onPress={this.toggle}>
//           <Svg height={100} width={150}>
//             <Svg.Polygon
//               points="150 0,150 38,82 150,0 150,0 0"
//               strokeWidth="3"
//               stroke="#9b59b6"
//               fill={toggle ? '#3498db' : '#9b59b6'}
//             />
//           </Svg>
//                       // <Text style={{alignSelf: 'center', alignItems: 'center'}}>hello</Text>
//         </TouchableOpacity>