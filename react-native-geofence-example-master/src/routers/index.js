import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn, SplashScreen, Great, Menu, video, Notification, MainLoc, AddChild, Pick, SignInParent, SignInStudent, SignUpStudent, SignUpParent, MenuStudent} from '../pages';

import SignUp from '../pages/SignUp';


const Stack = createNativeStackNavigator();

const Router = () => {
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
