import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const SecondPage = ({ navigation, route }) => {
  const [show, setShow] = useState(route?.params?.key);
  const [show1, setShow1] = useState(route?.params?.key1);
  const [show2, setShow2] = useState(route?.params?.key2);
  console.log('======>', show);
  console.log('======>', show1); console.log('======>', show2);
  return (
    <View style={{ flex: 1 }}>
      <Text >Email {show}</Text>
      <Text >Password {show1}</Text>
      <Text >Address {show2}</Text>


    
    </View>
  )
}

export default SecondPage

const styles = StyleSheet.create({})