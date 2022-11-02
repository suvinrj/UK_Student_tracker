import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  import {fonts} from '../../assets';
  import {Button, TextInput} from '../../components';
  import InputNumberPhone from '../SignUp/InputNumberPhone';
  import CountryCode from '../../assets/CountryCode';
  import axios from 'axios';
  import {getData, storeData, useForm} from '../../utils';
  import {baseUrl} from '../../utils/config';
  
  const PersonalData = ({
    route: {
      params: {name, email, uid, },
    },
    navigation,
  }) => {
  
    const [form, setForm] = useForm({
      name: '',
      email: '',
    });
  
   
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
    console.log('email', email);
   
  
    return (
      <SafeAreaView style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.personalDataContainer}>
            <Text style={styles.titlePersonalData}>Lengkapi Data Diri Anda</Text>
            <Text style={styles.subTitlePersonalData}>
              Silahkan mengisi data anda dengan lengkap
            </Text>
            <View>
              <TextInput
                title={'NIK E-KTP'}
                placeholder={'Masukkan NIK Anda'}
                value={form.nik}
                onChangeText={text => setForm('nik', text)}
              />
              <TextInput
                title={'Nama Sesuai E-KTP'}
                placeholder={'Masukkan Nama Anda'}
                value={form.name}
                onChangeText={text => setForm('name', text)}
              />
              {email?.length > 0 && (
                <View style={styles.wrapperEmail}>
                  <Text style={styles.titleEmail}>Alamat Email</Text>
                  <View style={styles.emailContainer}>
                    <Text style={styles.titleEmail}>{email}</Text>
                  </View>
                </View>
              )}
              {email?.length === 0 ||
                (!email && (
                  <TextInput
                    title={'Alamat Email'}
                    placeholder={'nama@gmail.com'}
                    value={form.email}
                    onChangeText={text => setForm('email', text)}
                  />
                ))}
              {phoneNumber?.length > 0 && (
                <View style={styles.wrapperEmail}>
                  <Text style={styles.titleNumberPhone}>Nomor Telepon</Text>
                  <View style={styles.numberPhoneContainer}>
                    <Text style={styles.titleNumberPhone}>{phoneNumber}</Text>
                  </View>
                </View>
              )}
              {phoneNumber?.length === 0 ||
                (!phoneNumber && (
                  <View style={styles.wrapperNumberPhone}>
                    <Text style={styles.titleNumberPhone}>Nomor Telepon</Text>
                    <View style={styles.wrapperContent}>
                      <TouchableOpacity style={styles.codePhoneIndo}>
                        <Text style={styles.textCode}>
                          {selectedCountry.dial_code}
                        </Text>
                      </TouchableOpacity>
                      <InputNumberPhone
                        placeholder={'Masukkan Nomor Telepon Anda'}
                        onChangeText={text =>
                          setForm(
                            'phoneNumber',
                            selectedCountry?.dial_code + text,
                          )
                        }
                      />
                    </View>
                  </View>
                ))}
            </View>
            <View style={styles.buttonContainer}>
              <Button title={'Selanjutnya'} onPress={() => submitAPI()} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default PersonalData;
  
  const styles = StyleSheet.create({
    page: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    personalDataContainer: {
      marginTop: 95 / 2,
      paddingHorizontal: 25,
    },
    titlePersonalData: {
      fontSize: 24,
      fontFamily: fonts.Poppins.semibold,
      color: '#242424',
    },
    subTitlePersonalData: {
      fontSize: 12,
      fontFamily: fonts.Poppins.regular,
      color: '#9E9E9E',
    },
    textPersonalData: {
      fontSize: 14,
      fontFamily: fonts.Poppins.medium,
      color: '#242424',
      marginTop: 15,
    },
    wrapperEmail: {
      marginTop: 15,
    },
    titleEmail: {
      fontSize: 14,
      fontFamily: fonts.Poppins.medium,
      color: '#000000',
    },
    emailContainer: {
      backgroundColor: '#FFFFFF',
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#C6C6C6',
      width: '100%',
      height: 41,
      justifyContent: 'center',
      paddingHorizontal: 10,
      paddingVertical: 9,
    },
    wrapperNumberPhone: {
      marginTop: 15,
    },
    numberPhoneContainer: {
      backgroundColor: '#FFFFFF',
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#C6C6C6',
      width: '100%',
      height: 41,
      justifyContent: 'center',
      paddingHorizontal: 10,
      paddingVertical: 9,
    },
    titleNumberPhone: {
      fontSize: 14,
      fontFamily: fonts.Poppins.medium,
      color: '#000000',
    },
    wrapperContent: {
      flexDirection: 'row',
    },
    codePhoneIndo: {
      paddingHorizontal: 12,
      paddingVertical: 10,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      height: 41,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderLeftWidth: 1,
      borderColor: '#C6C6C6',
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
    },
    textCode: {
      fontSize: 14,
      fontFamily: fonts.Poppins.medium,
      color: '#000000',
    },
    buttonContainer: {
      marginTop: 164 / 2,
    },
  });