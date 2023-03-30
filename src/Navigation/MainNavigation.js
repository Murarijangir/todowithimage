import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigation from './TabNavigation'
import Form from '../Screens/Form'
import Login from '../Screens/Login'
import Curd from '../Screens/Curd'
import ForgotPassword from '../Screens/ForgotPassword'
import Otp from '../Screens/Otp'
import ImagePic from '../Component/ImagePic'
import ImagePickers from '../Screens/ImagePickers'
import Player from '../Screens/Player'
import ImageShow from '../Screens/ImageShow'
import CalanderPicker from '../Screens/CalanderPicker'
import SecondPage from '../Screens/SecondPage'
import Calculator from '../Screens/Calculator'
import Home from '../Screens/Home'
import Exercise from '../Screens/Exercise'
import GoogleMap from '../Screens/GoogleMap'
import ScrollViewAnimation from '../Component/ScrollViewAnimation'

import { DrawerNavigation } from './DrawerNavigation'
import { AuthStack } from './StackNavigation'
import { HomeStack } from './StackNavigation'
import React,{useState} from 'react'
const Stack = createNativeStackNavigator();



function MainNavigation() {
  const [isAuth,setIsAuth]=useState()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Curd" component={Curd} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="ImagePickers" component={ImagePickers} />
        <Stack.Screen name="ImagePic" component={ImagePic} />
        <Stack.Screen name="Player" component={Player} />
        <Stack.Screen name="ImageShow" component={ImageShow} />
        <Stack.Screen name="GoogleMap" component={GoogleMap} />
        <Stack.Screen name="CalanderPicker" component={CalanderPicker} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
        <Stack.Screen name="Calculator" component={Calculator} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Exercise" component={Exercise} />
        <Stack.Screen name="ScrollViewAnimation" component={ScrollViewAnimation} />
      </Stack.Navigator>
      {/* {isAuth?<DrawerNavigation/> :<AuthStack/>} */}
      {/* <HomeStack/> */}
      {/* <AuthStack/> */}
    </NavigationContainer>
  )
}

export default MainNavigation