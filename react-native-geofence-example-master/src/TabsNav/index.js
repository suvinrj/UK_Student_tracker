import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {StyleSheet, View, Image} from 'react-native';
import { Chat, Home, Notification, Profile } from '../pages';
import { iChat, iHome, iNotif, iProfile } from '../assets';

const Tab = createBottomTabNavigator();

const TabsNav = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{tabBarShowLabel: false}}
      style={styles.container}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,

          tabBarIcon: ({focused}) => (
            <View style={styles.viewIcon}>
              <Image
                source={iHome}
                style={{
                  width: 25,
                  height: 25,
                  bottom: 2,
                  tintColor: focused ? '#020202' : '#766090',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={iNotif}
                style={{
                  width: 35,
                  height: 35,
                  bottom: 0,
                  tintColor: focused ? '#020202' : '#766090',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          headerShown: false,

          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={iChat}
                style={{
                  width: 35,
                  height: 33,
                  bottom: 2,
                  tintColor: focused ? '#020202' : '#766090',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,

          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={iProfile}
                style={{
                  width: 35,
                  height: 35,
                  bottom: 2,
                  tintColor: focused ? '#020202' : '#766090',
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNav;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: 'white',
    borderRadius: 15,
    height: 90,
  },
});
