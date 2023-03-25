import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainNavigation from '../Todo/src/Navigation/MainNavigation'
const App = () => {
  return (
    <View style={{flex:1}}>
      <MainNavigation/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})