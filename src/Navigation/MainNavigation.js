import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Form from '../Screens/Form'
import Login from '../Screens/Login'
import Curd from '../Screens/Curd'
import Texts from '../Screens/Texts'
import Todo from '../Screens/Todo'
import ForgotPassword from '../Screens/ForgotPassword'
import Otp from '../Screens/Otp'
import ImagePic from '../Component/ImagePic'
import ImagePickers from '../Screens/ImagePickers'
import Player from '../Screens/Player'
import ImageShow from '../Screens/ImageShow'
import FlatImage from '../Screens/FlatImage'
import CalanderPicker from '../Screens/CalanderPicker'
import SecondPage from '../Screens/SecondPage'
import Calculator from '../Screens/Calculator'
import Home from '../Screens/Home'
const Stack = createNativeStackNavigator();
function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Curd" component={Curd} />
        <Stack.Screen name="Texts" component={Texts} />
        <Stack.Screen name="Todo" component={Todo} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="ImagePickers" component={ImagePickers} />
        <Stack.Screen name="ImagePic" component={ImagePic} />
        <Stack.Screen name="Player" component={Player} />
        <Stack.Screen name="ImageShow" component={ImageShow} />
        <Stack.Screen name="FlatImage" component={FlatImage}/>
        <Stack.Screen name="CalanderPicker" component={CalanderPicker}/>
        <Stack.Screen name="SecondPage" component={SecondPage}/>
        <Stack.Screen name="Calculator" component={Calculator}/>
        <Stack.Screen name="Home" component={Home}   />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation