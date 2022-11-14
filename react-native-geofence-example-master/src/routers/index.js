import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn, SplashScreen, Great, Menu, video, Notification, MainLoc, AddChild, Pick, SignInParent, SignInStudent, SignUpStudent, SignUpParent, MenuStudent} from '../pages';

import SignUp from '../pages/SignUp';
import firebase from '@react-native-firebase/app'
import messaging from '@react-native-firebase/messaging'
import { async } from '@firebase/util';
import PushNotification, { Importance } from 'react-native-push-notification';

const Stack = createNativeStackNavigator();

const Router = () => {
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
    messaging().getToken(firebase.app().options.messagingSenderId).then((token)=>{
      console.log(`token:`, token);
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
  },[])
  return (
        <Stack.Navigator>


        <Stack.Screen name="SplashScreen" 
        component={SplashScreen} 
        options={{headerShown: false}} 
        />
        <Stack.Screen name="Pick" 
        component={Pick} 
        options={{headerShown: false}} 
        />
        <Stack.Screen name="SignInParent" 
        component={SignInParent} 
        options={{headerShown: false}} 
        />
        <Stack.Screen name="SignInStudent" 
        component={SignInStudent} 
        options={{headerShown: false}} 
        />
        <Stack.Screen name="SignUpParent" 
        component={SignUpParent} 
        options={{headerShown: false}} 
        />
        <Stack.Screen name="SignUpStudent" 
        component={SignUpStudent} 
        options={{headerShown: false}} 
        />
        <Stack.Screen name="AddChild" 
        component={AddChild} 
        options={{headerShown: false}} 
        />
        <Stack.Screen name="Menu" 
        component={Menu} 
        options={{headerShown: false}} 
        />
        <Stack.Screen name="MenuStudent" 
        component={MenuStudent} 
        options={{headerShown: false}} 
        />
     
        <Stack.Screen name="Notification" 
        component={Notification} 
        options={{headerShown: false}} 
        />    
        <Stack.Screen name="MainLoc" 
        component={MainLoc} 
        options={{headerShown: false}} 
        />    
    </Stack.Navigator>
    
  )
}

export default Router
