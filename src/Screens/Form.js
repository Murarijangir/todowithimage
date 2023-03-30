

import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Image, StatusBar, TouchableOpacity, ScrollView, Alert, Button } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup';
import { Images } from '../Constant/Images';

const Form = ({ navigation }) => {

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        address: '',
        contact: '',
      }}
      onSubmit={values => Alert.alert(JSON.stringify(values))}
      validationSchema={yup.object().shape({
        name: yup
          .string()
          .required('Name is required field'),
        email: yup
          .string()
          .required('Email is a required field'),
        password: yup
          .string()
          .min(4)
          .max(10)
          .required('Password is a required field'),
        address: yup
          .string()
          .min(20)
          .required('Address is required field'),
        contact: yup
          .number()
          .min(10)
          .required('Contact is required field')
      })}
    >
      {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
        <View style={{ flex: 1, backgroundColor: 'whitesmoke' }} >
          <StatusBar barStyle='dark-content' backgroundColor='#1E88E5' />
          <View style={{ height: 90, backgroundColor: '#1E88E5', justifyContent: 'center', borderWidth: 1, borderColor: '#1E88E5', borderBottomLeftRadius: 25 }}>
            <Text style={{ color: 'white', textAlign: 'center', fontSize: 30 }}>Welcome Form</Text>
          </View>
          <ScrollView>
            <View style={{ flexDirection: 'column', paddingTop: 10 }} >

              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', width: '95%', borderRadius: 10, height: 60, paddingLeft: 20, marginTop: 20 }} >
                <Image style={styles.social_img} source={Images.Name} />

                <TextInput
                  value={values.name}
                  style={styles.input}
                  onChangeText={handleChange('name')}
                  onBlur={() => setFieldTouched('name')}
                  placeholder="Name"
                  placeholderTextColor="black"
                  color='black'
                  keyboardType='default' />
              </View>
              {touched.name && errors.name &&
                <Text style={{ paddingHorizontal: 15, fontSize: 12, color: '#FF0D10' }}>{errors.name}</Text>
              }

              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', width: '95%', borderRadius: 10, height: 60, paddingLeft: 20, marginTop: 20 }} >
                <Image style={styles.social_img} source={Images.Email} />

                <TextInput
                  value={values.email}
                  style={styles.input}
                  onChangeText={handleChange('email')}
                  onBlur={() => setFieldTouched('email')}
                  placeholder="Enter Email"
                  placeholderTextColor="black"
                  color='black'
                  keyboardType='email-address' />
              </View>
              {touched.email && errors.email &&
                <Text style={{ paddingHorizontal: 15, fontSize: 12, color: '#FF0D10' }}>{errors.email}</Text>
              }

              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', width: '95%', borderRadius: 10, height: 60, paddingLeft: 20, marginTop: 20 }} >
                <Image style={styles.social_img} source={Images.Password} resizeMode='stretch' />

                <TextInput
                  value={values.password}
                  style={styles.input}
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched('password')}
                  placeholder="Enter Password"
                  secureTextEntry={true}
                  placeholderTextColor="black"
                  color='black'

                />

              </View>

              {touched.password && errors.password &&
                <Text style={{ paddingHorizontal: 15, fontSize: 12, color: '#FF0D10' }}>{errors.password}</Text>
              }

              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', width: '95%', borderRadius: 10, height: 60, paddingLeft: 20, marginTop: 20 }} >
              <Image style={styles.social_img} source={Images.Address} resizeMode='stretch'/>

                <TextInput
                  value={values.address}
                  onChangeText={handleChange('address')}
                  onBlur={() => setFieldTouched('address')}
                  style={styles.input} placeholder="Address"
                  placeholderTextColor="black"
                  color='black'
                  keyboardType='default' />

              </View>
              {touched.address && errors.address &&
                <Text style={{ paddingHorizontal: 15, fontSize: 12, color: '#FF0D10' }}>{errors.address}</Text>
              }

              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', width: '95%', borderRadius: 10, height: 60, paddingLeft: 20, marginTop: 20 }} >
                <Image style={styles.social_img} source={Images.Contact} />

                <TextInput
                  value={values.contact}
                  onChangeText={handleChange('contact')}
                  onBlur={() => setFieldTouched('contact')}
                  style={styles.input}
                  placeholder="Contact"
                  placeholderTextColor="black"
                  color='black'
                  keyboardType='numeric' />
              </View>
              {touched.contact && errors.contact &&
                <Text style={{ paddingHorizontal: 15, fontSize: 12, color: '#FF0D10' }}>{errors.contact}</Text>
              }
              
              <TouchableOpacity style={{ borderWidth: 1, marginTop: 60, padding: 10, backgroundColor: '#1E88E5', borderColor: '#1E88E5', borderRadius: 20, width: 200, alignSelf: 'center' }}>
                <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}
                  // disabled={isValid}
                  // onpress={handleSubmit}
                  onPress={() => { navigation.navigate('Otp') }}
                >Submit</Text>
              </TouchableOpacity>
              <Text style={{ textAlign: 'center', fontSize: 15, paddingVertical: 10, marginBottom: 10, color: 'black' }}>Alreday have any account , <Text style={{ color: 'blue' }}
                onPress={() => {
                  navigation.navigate('Login')
                }}
              >login account</Text> </Text>
            </View>
          </ScrollView>

        </View>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({
  input: {
    position: 'relative',
    height: '100%',
    width: '90%',
    fontFamily: 'OpenSans-Medium',
    paddingLeft: 20,
  },
  input1: {
    position: 'relative',
    height: '100%',
    width: '90%',
    fontFamily: 'OpenSans-Medium',
    paddingLeft: 20,
  },
  social_img: {
    width: 25,
    height: 25,
    marginLeft: 15
  }
})

export default Form