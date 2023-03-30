import React, { useState } from 'react'
import { Image, StatusBar, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Images } from '../Constant/Images';
import Curd from '../Screens/Curd';
import ImagePickers from '../Screens/ImagePickers';
import CalanderPicker from '../Screens/CalanderPicker';
import Calculator from '../Screens/Calculator';
import GoogleMap from '../Screens/GoogleMap';

const Tab = createBottomTabNavigator();
const TabNavigation = ({ navigation, }) => {
    return (
        <Tab.Navigator screenOptions={{ tabBarHideOnKeyboard: true, position: 'absolute', headerShown: false, tabBarStyle: { backgroundColor: '#FFFFFF', borderWidth: 0, position: 'absolute' } }}
        >
            <Tab.Screen
                name='Home'
                component={Curd}
                options={{
                    title: '',
                    tabBarIcon: ({ focused, tintColor }) => (
                        <Image
                            source={Images.User}
                            style={{ height: 22, width: 22, top: 9 }}
                            tintColor={focused ? "#7854F7" : "#000"}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name='GoogleMap'
                component={GoogleMap}
                options={{
                    title: '',
                    tabBarIcon: ({ focused }) => (
                        <Image source={Images.GoogleMap}
                            style={{ height: 22, width: 22, top: 9 }}
                            tintColor={focused ? "#7854F7" : "#000"}

                        />
                    ),
                }}
            />
            <Tab.Screen
                name='Calculator'
                component={Calculator}
                options={{
                    title: '',
                    tabBarIcon: ({ focused }) => (
                        <Image
                        source={Images.Calculator}
                            style={{ height: 22, width: 22, top: 9 }}
                            tintColor={focused ? "#7854F7" : "#000"}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name='Uploads'
                component={ImagePickers}
                options={{
                    title: '',
                    tabBarIcon: ({ focused }) => (
                        <Image
                        source={Images.VideoPlay}
                            style={{ height: 22, width: 22, top: 9 }}
                            tintColor={focused ? "#7854F7" : "#000"}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name='Calander'
                component={CalanderPicker}
                options={{
                    title: '',
                    tabBarIcon: ({ focused }) => (
                        <Image
                        source={Images.Calander}
                            style={{ height: 22, width: 22, top: 9 }}
                            tintColor={focused ? "#7854F7" : "#000"}

                        />
                    ),
                }}
            />

        </Tab.Navigator>
    )
}

export default TabNavigation;