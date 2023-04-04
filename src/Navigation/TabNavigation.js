import React, { useState } from 'react'
import { Image, StatusBar, View,Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Images } from '../Constant/Images';
import Curd from '../Screens/Curd';
import ImagePickers from '../Screens/ImagePickers';
import CalanderPicker from '../Screens/CalanderPicker';
import Calculator from '../Screens/Calculator';
import GoogleMap from '../Screens/GoogleMap';
import colors from '../Constant/colors';

const Tab = createBottomTabNavigator();
const commonOptions = {

};
const tabStyle = {
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
        position: 'absolute',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: Platform.OS === "ios" ? 90 : 65,
    }

};
const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                // tabBarBackground:'#7854F7',
                headerShown: false,
                tabBarShowLabel: false,
                ...tabStyle,
                tabBarStyle: {
                    bottom: 0
                    
                }
            }}
            initialRouteName={'Curd'}>

            <Tab.Screen
                name='Curd'
                component={Curd}

                tabBarOptions={{
                    showLabel: true,
                }}
                options={{
                    ...commonOptions,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                                <View style={{ borderTopColor: focused ? colors.LightPurple : colors.Black, borderTopWidth: 2, borderTopLeftRadius: 20, width: 40, bottom: Platform.OS === "ios" ? 3 : 3 }} />
                                <Image
                                    style={[
                                        { width: 22, height: 22, resizeMode: 'contain' },
                                        focused
                                            ? { tintColor: colors.LightPurple }
                                            : { tintColor: colors.Black },
                                    ]}
                                    source={Images.User}
                                />

                                <Text
                                    style={{
                                        color: focused ? colors.LightPurple : colors.Black, fontSize: 12, 
                                    }}>
                                    Home
                                </Text>
                            </View>
                        );
                    },
                }}
            />
            <Tab.Screen
                name='GoogleMap'
                component={GoogleMap}
               
                tabBarOptions={{
                    showLabel: true,
                }}
                options={{
                    ...commonOptions,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                                <View style={{ borderTopColor: focused ? colors.LightPurple : colors.Black, borderTopWidth: 2, borderTopLeftRadius: 20, width: 40, bottom: Platform.OS === "ios" ? 3 : 3 }} />
                                <Image
                                    style={[
                                        { width: 22, height: 22, resizeMode: 'contain' },
                                        focused
                                            ? { tintColor: colors.LightPurple }
                                            : { tintColor: colors.Black },
                                    ]}
                                    source={Images.GoogleMap}
                                />

                                <Text
                                    style={{
                                        color: focused ? colors.LightPurple : colors.Black, fontSize: 12, 
                                    }}>
                                    GoogleMaps
                                </Text>
                            </View>
                        );
                    },
                }}
            />
              <Tab.Screen
                name='ImagePickers'
                component={ImagePickers}
              
                tabBarOptions={{
                    showLabel: true,
                }}
                options={{
                    ...commonOptions,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                                <View style={{ borderTopColor: focused ? colors.LightPurple : colors.Black, borderTopWidth: 2, borderTopLeftRadius: 20, width: 40, bottom: Platform.OS === "ios" ? 3 : 3 }} />
                                <Image
                                    style={[
                                        { width: 22, height: 22, resizeMode: 'contain' },
                                        focused
                                            ? { tintColor: colors.LightPurple }
                                            : { tintColor: colors.Black },
                                    ]}
                                    source={Images.VideoPlay}
                                />

                                <Text
                                    style={{
                                        color: focused ? colors.LightPurple : colors.Black, fontSize: 12, 
                                    }}>
                                    Video
                                </Text>
                            </View>
                        );
                    },
                }}
            />
            <Tab.Screen
                name='Calculator'
                component={Calculator}
            
                tabBarOptions={{
                    showLabel: true,
                }}
                options={{
                    ...commonOptions,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                                <View style={{ borderTopColor: focused ? colors.LightPurple : colors.Black, borderTopWidth: 2, borderTopLeftRadius: 20, width: 40, bottom: Platform.OS === "ios" ? 3 : 3 }} />
                                <Image
                                    style={[
                                        { width: 22, height: 22, resizeMode: 'contain' },
                                        focused
                                            ? { tintColor: colors.LightPurple }
                                            : { tintColor: colors.Black },
                                    ]}
                                    source={Images.Calculator}
                                />

                                <Text
                                    style={{
                                        color: focused ? colors.LightPurple : colors.Black, fontSize: 12, 
                                    }}>
                                    Calculator
                                </Text>
                            </View>
                        );
                    },
                }}
            />
          
            <Tab.Screen
                name='CalanderPicker'
                component={CalanderPicker}
            
                tabBarOptions={{
                    showLabel: true,
                }}
                options={{
                    ...commonOptions,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                                <View style={{ borderTopColor: focused ? colors.LightPurple : colors.Black, borderTopWidth: 2, borderTopLeftRadius: 20, width: 40, bottom: Platform.OS === "ios" ? 3 : 3 }} />
                                <Image
                                    style={[
                                        { width: 22, height: 22, resizeMode: 'contain' },
                                        focused
                                            ? { tintColor: colors.LightPurple }
                                            : { tintColor: colors.Black },
                                    ]}
                                    source={Images.Calander}
                                />

                                <Text
                                    style={{
                                        color: focused ? colors.LightPurple : colors.Black, fontSize: 12, 
                                    }}>
                                    Calander
                                </Text>
                            </View>
                        );
                    },
                }}
            />

        </Tab.Navigator>
    )
}

export default TabNavigation;



