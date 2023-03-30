import React from 'react';
import {
    createDrawerNavigator,
    useDrawerProgress,
} from '@react-navigation/drawer';
import DrawerContainer from './Container/DrawerContainer';
import { View, StyleSheet, StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Animated, {
    Extrapolate,
} from 'react-native-reanimated';
import GoogleMap from '../Screens/GoogleMap';
import Curd from '../Screens/Curd'
import ImagePickers from '../Screens/ImagePickers';
import CalanderPicker from '../Screens/CalanderPicker';
import Calculator from '../Screens/Calculator';

import { HomeStack } from './StackNavigation';
import { useNavigation } from '@react-navigation/native';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export const DrawerNavigation = () => {
const navigation = useNavigation();

    return (
        <Drawer.Navigator
        headerShown={false}
            screenOptions={{
                drawerType: 'front',
                drawerStyle: {
                    width: '75%',
                    borderTopRightRadius: 25,
                },
                overlayColor: '#00000060',
            }}
            drawerContent={props => {
                return <DrawerContainer {...props} />;
            }}>
            <Drawer.Screen
                name="Home"
                component={DrawerStack}

            />
        </Drawer.Navigator>
    );
};

const DrawerStack = ({navigation}) => {
    var progress = useDrawerProgress();

    const scale = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [1, 1],
        extrapolate: Extrapolate.CLAMP,
    });
    const translateX = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: Extrapolate.CLAMP,
    });

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            {Platform.OS == 'android' ? (
                <StatusBar
                    translucent={false}
                    backgroundColor={colors.black}
                    barStyle="light-content"
                />
            ) : (
                <View />
            )}
            <Animated.View style={{
                flex: 1,
                transform: [{ scale: scale, translateX: translateX }]
            }}>


                <Stack.Navigator
                    screenOptions={{ headerShown: false }}
                >

                    <Stack.Screen name="HomeStack" component={HomeStack} />
                    <Stack.Screen name="Curd" component={Curd} />
                    <Stack.Screen name="GoogleMap" component={GoogleMap} />
                    <Stack.Screen name="CalendarPicker" component={CalanderPicker} />
                    <Stack.Screen name="Calculator" component={Calculator} />
                    <Stack.Screen name="ImagePickers" component={ImagePickers} />
                </Stack.Navigator>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    //   animatedView: {
    //     height: FULL_Height,
    //     width: FULL_WIDTH,
    //   },
});
