import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'

const SecondPage = ({navigation,route}) => {
    const [show, setShow] = useState(route?.params?.key);
    const [show1, setShow1] = useState(route?.params?.key1);
    const [show2, setShow2] = useState(route?.params?.key2);
    const [show3, setShow3] = useState(route?.params?.key3);
    console.log('======>',show);
    console.log('======>',show1);console.log('======>',show2);console.log('======>',show3);
  return (
    <View style={{flex:1}}>
      <Text >text {show}</Text>
      <Text >text {show1}</Text>
      <Text >text {show2}</Text>
      <Text >text {show3}</Text>

    </View>
  )
}

export default SecondPage

const styles = StyleSheet.create({})