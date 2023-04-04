import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DrawerNavigation from './DrawerNavigation'

const StackNavigation = ({navigation}) => {
  return (
    <View style={{flex:1}}>
        <DrawerNavigation/>
    </View>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})