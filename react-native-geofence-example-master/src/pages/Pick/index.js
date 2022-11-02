import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react';
import { Locate, Logout, Notif, Student, Parent, RectPurple } from '../../assets'
import { Gap, Header, ButtonMenu } from '../../components'
import MapView, { Callout, Circle, Marker }  from 'react-native-maps';
import {Linking} from 'react-native'
import GetLocation from 'react-native-get-location'
import {WhatsappCall} from '../../assets'
import { TouchableOpacity } from 'react-native';




const Pick = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Gap height={20} />
      <Header title="Welcome User" textColor='#868FEF'/>
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
      <TouchableOpacity onPress={()=>navigation.navigate('SignInStudent')}>
      <Student/>
      </TouchableOpacity>
      </View>

      <View style={styles.locateStudent}>
      <TouchableOpacity  onPress={()=>navigation.navigate('SignInParent')}>
      <Parent/>
      </TouchableOpacity>
      </View>

      

 
    
      

          
      {/* <MapView
       showsUserLocation={true}
       followsUserLocation={true}
       zoomEnabled={true}
       mapType='satellite'
       style={styles.map}
       region={{
         latitude: 1.417495, 
         longitude: 124.983943,
         latitudeDelta: 0.002,
         longitudeDelta: 0.0005,
       }}>


      <Marker
      coordinate={{latitude: 1.417495, 
        longitude: 124.983943}}
        title="UNKLAB"
        description="Main building"
      >
        <Callout>
          <Text>This is the main building</Text>
        </Callout>

      </Marker>
      <Circle 
        center={{latitude: 1.416913, longitude: 124.985666}}
        radius={20}/>
     </MapView> */}

  
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
// Button1: {
//   height: 10,
//   marginRight: 220,
//   marginTop: 30,
//   marginLeft:15,
  
//     },
// Button2: {
//   marginTop:-28,
//   height: 100,
//   marginLeft: 220,
//   marginRight:15,
//         },
// Button3: {
//   marginTop:-8,
//   height: 100,
//   marginLeft: 220,
//   marginRight: 15,
//             },
// Button4: {
//   height: 110,
//   marginRight: 220,
//   marginTop: -100,
//   marginLeft:15,
//          },

// Button5: {
  
//   marginRight: 15,
//   marginTop: -100,
//   marginLeft:15,
                  
//         },
    

wacall:{
    marginLeft: 120,
    marginTop: 40,
        },

callphone:{
    marginLeft: 40,
    marginTop: -130,
        },  
        
locateStudent:{
    marginLeft: 120,
    marginTop: 20,
              }, 

notifikasi:{
    marginLeft: 40,
    marginTop: -130,
              }, 

Logout:{
    marginLeft: 40,
    marginTop: 20,
              }, 
              Logout1:{
                marginLeft: 40,
                marginTop: 20,
                          },
  
 });

export default Pick





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