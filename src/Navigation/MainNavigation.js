import { NavigationContainer } from '@react-navigation/native'
import Form from '../Screens/Form'
import Login from '../Screens/Login'
import ForgotPassword from '../Screens/ForgotPassword'
import Otp from '../Screens/Otp'
import ImagePic from '../Component/ImagePic'
import Player from '../Screens/Player'
import ImageShow from '../Screens/ImageShow'
import SecondPage from '../Screens/SecondPage'
import Home from '../Screens/Home'
import Exercise from '../Screens/Exercise'
import ScrollViewAnimation from '../Component/ScrollViewAnimation'
import React from 'react'
import StackNavigation from './StackNavigation'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();



const  MainNavigation=()=> {
  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
        <Stack.Screen name='StackNavigation' component={StackNavigation}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="ImagePic" component={ImagePic} />
        <Stack.Screen name="Player" component={Player} />
        <Stack.Screen name="ImageShow" component={ImageShow} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Exercise" component={Exercise} />
        <Stack.Screen name="ScrollViewAnimation" component={ScrollViewAnimation} />
      </Stack.Navigator>
     
    </NavigationContainer>
  )
}

export default MainNavigation