import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainNavigation from './src/Navigation/MainNavigation'

const App = () => {
  return (
    <View style={{flex:1}}>
      <StatusBar backgroundColor='red'/>
      <MainNavigation/>
    </View>
  )
}

export default App
const styles = StyleSheet.create({})



