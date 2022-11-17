import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react';
import { useState, useRef } from 'react';
import { useEffect } from 'react';
import { Locate, Logout, Notif, PhoneCall, RectPurple } from '../../assets'
import { Gap, Header, ButtonMenu } from '../../components'
import MapView, { Callout, Circle, Marker }  from 'react-native-maps';
import {Linking} from 'react-native'
import GetLocation from 'react-native-get-location'
import {WhatsappCall} from '../../assets'
import { TouchableOpacity } from 'react-native';
import {getDatabase, ref as r, child, get, set, update} from "firebase/database";
import { auth, db } from '../../../firebase/firebase-config';
import PushNotification, { Importance } from 'react-native-push-notification';
import firebase from '@react-native-firebase/app'
import messaging from '@react-native-firebase/messaging'




const Menu = ({navigation}) => {

  const [PhoneNumber,setPhoneNumber] = useState('');
  const [parentName, setParentName] = useState('')
  let wa = '';
  let noReg = '';
  let parentPhoneNumber = '';


  const getValues = async () => {
    try {
      const database = getDatabase();
      const rootReference = r(database);
      const dbGet = await get(child(rootReference, `Parent/${auth.currentUser.uid}`));
      const dbValue = dbGet.val();
      setParentName(dbValue.Name)
      setPhoneNumber(dbValue.Student.StudentPhoneNumber)
      parentPhoneNumber = dbValue.PhoneNumber;
      noReg=dbValue.Student.noReg;
    } catch (getError) {
      console.log(getError)
    }
  };

  const createChannel = (channelId) => {
    PushNotification.createChannel(
      {
        channelId: channelId, // (required)
        channelName: "My channel", // (required)
        channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
        playSound: false, // (optional) default: true
        soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
        importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
      },
      (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
  }
  const showNotification = (channelId, options) => {
    PushNotification.localNotification({
      /* Android Only Properties */
      channelId: channelId, // (required) channelId, if the channel doesn't exist, notification will not trigger.
      // ticker: "My Notification Ticker", // (optional)
      // showWhen: true, // (optional) default: true
      // autoCancel: true, // (optional) default: true
      // largeIcon: "ic_launcher", // (optional) default: "ic_launcher". Use "" for no large icon.
      largeIconUrl: "https://cdn1.iconfinder.com/data/icons/map-and-navigation-88/60/Geofencing-512.png", // (optional) default: undefined
      smallIcon: "ic_notification", // (optional) default: "ic_notification" with fallback for "ic_launcher". Use "" for default small icon.
      // bigText: "this is big text", // (optional) default: "message" prop
      subText: options.subText, // (optional) default: none
      bigPictureUrl: options.bigImage, // (optional) default: undefined
      // bigLargeIcon: "ic_launcher", // (optional) default: undefined
      bigLargeIconUrl: "https://cdn1.iconfinder.com/data/icons/map-and-navigation-88/60/Geofencing-512.png", // (optional) default: undefined
      color: options.color, // (optional) default: system default
      vibrate: true, // (optional) default: true
      vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
      // tag: "some_tag", // (optional) add tag to message
      // group: "group", // (optional) add group to message
      // groupSummary: false, // (optional) set this notification to be the group summary for a group of notifications, default: false
      // ongoing: false, // (optional) set whether this is an "ongoing" notification
      priority: "high", // (optional) set notification priority, default: high
      // visibility: "private", // (optional) set notification visibility, default: private
      // ignoreInForeground: false, // (optional) if true, the notification will not be visible when the app is in the foreground (useful for parity with how iOS notifications appear). should be used in combine with `com.dieam.reactnativepushnotification.notification_foreground` setting
      // shortcutId: "shortcut-id", // (optional) If this notification is duplicative of a Launcher shortcut, sets the id of the shortcut, in case the Launcher wants to hide the shortcut, default undefined
      // onlyAlertOnce: false, // (optional) alert will open only once with sound and notify, default: false
      
      // when: null, // (optional) Add a timestamp (Unix timestamp value in milliseconds) pertaining to the notification (usually the time the event occurred). For apps targeting Build.VERSION_CODES.N and above, this time is not shown anymore by default and must be opted into by using `showWhen`, default: null.
      // usesChronometer: false, // (optional) Show the `when` field as a stopwatch. Instead of presenting `when` as a timestamp, the notification will show an automatically updating display of the minutes and seconds since when. Useful when showing an elapsed time (like an ongoing phone call), default: false.
      // timeoutAfter: null, // (optional) Specifies a duration in milliseconds after which this notification should be canceled, if it is not already canceled, default: null
    
      // messageId: "google:message_id", // (optional) added as `message_id` to intent extras so opening push notification can find data stored by @react-native-firebase/messaging module. 
    
      // actions: ["Yes",  "No"], // (Android only) See the doc for notification actions to know more
      // invokeApp: true, // (optional) This enable click on actions to bring back the application to foreground or stay in background, default: true
    
      /* iOS only properties */
      // category: "", // (optional) default: empty string
      // subtitle: "My Notification Subtitle", // (optional) smaller title below notification title
    
      /* iOS and Android properties */
      // id: 0, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
      title: options.title, // (optional)
      message: options.message, // (required)
      // picture: "https://www.example.tld/picture.jpg", // (optional) Display an picture with the notification, alias of `bigPictureUrl` for Android. default: undefined
      // userInfo: {}, // (optional) default: {} (using null throws a JSON value '<null>' error)
      // playSound: false, // (optional) default: true
      // soundName: "default", // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
      // number: 10, // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
      // repeatType: "day", // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
    });
  }
  useEffect(()=> {
    loadValue()
    async function loadValue(){
      await getValues();
      messaging().getToken(firebase.app().options.messagingSenderId).then((token)=>{
        console.log(`token:`, token);
        console.log('noreg student', noReg)
        update(r(db, `Student/${noReg}/`), {
          ParentToken: token,
          x_ParentPhoneNumber: parentPhoneNumber
        })
      })
      const unsubscribe = messaging().onMessage(async remoteMsg => {
        const channelId = Math.random().toString(36).substring(7);
        createChannel(channelId);
        showNotification(channelId, { 
            bigImage: remoteMsg.notification.android.imageUrl,
            title: remoteMsg.notification.title,
            message: remoteMsg.notification.body,
        });
        console.log(`remoteMsg:`, remoteMsg);
      })
  
      messaging().setBackgroundMessageHandler(async remoteMsg => {
        console.log(`remoteMsg Background`, remoteMsg);
      })
  
      return unsubscribe;
    }
  },[])
  
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
    const starCountRef = ref(db, 'Parent/' + PhoneNumber);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setPhoneNumber(data.PhoneNumber);   
    });
  }
  
  return (
    <View style={styles.page}>
      <Gap height={20} />
      <Header title={parentName} textColor='#868FEF'/>
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
        getWa()
        Linking.openURL(`whatsapp://send?phone=${wa}`)
      }}>
      <WhatsappCall/>
      </TouchableOpacity>
      </View>


 
      <View style={styles.callphone}>
      <TouchableOpacity onPress={()=>{Linking.openURL(`tel:${PhoneNumber}`)}}>
      <PhoneCall/>
      </TouchableOpacity>
   
      </View>

      <View style={styles.locateStudent}>
      <TouchableOpacity  onPress={()=>navigation.navigate('MainLocParent')}>
      <Locate/>
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

notifikasi:{
    marginLeft: 50,
    marginTop: -10,
              }, 

Logout:{
    marginLeft: 40,
    marginTop: 40,
              }, 
              // Logout1:{
              //   marginLeft: 40,
              //   marginTop: 20,
              //             },
  
 });

export default Menu





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