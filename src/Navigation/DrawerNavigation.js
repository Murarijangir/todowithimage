import { Image, StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { createDrawerNavigator, useDrawerProgress } from '@react-navigation/drawer'
import DrawerContainer from '../Navigation/Container//DrawerContainer'

import Main from '../Navigation/Main'
import Exercise from '../Screens/Exercise'
import { Images } from '../Constant/Images'
import colors from '../Constant/colors'
import Header from '../Component/Header'

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'front',
        drawerStyle: {
          width: '70%',
          borderTopRightRadius: 25,
          backgroundColor: '#7854F7'
        },
        overlayColor: '#00000060',
      }}
      drawerContent={props => {
        return <DrawerContainer {...props} />;
      }}>
      <Drawer.Screen name=" " component={Main}
        options={{
           headerShown: false}}

      />

    </Drawer.Navigator>
  );
};




export default DrawerNavigation;

const styles = StyleSheet.create({})