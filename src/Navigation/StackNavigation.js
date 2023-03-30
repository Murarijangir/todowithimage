
import { View, Platform, StatusBar } from 'react-native';
import React from 'react';
import TabNavigation from './TabNavigation';
import { DrawerNavigation } from './DrawerNavigation';
import Login from '../Screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
    
    return (
        <View style={{ flex: 1 }}>
            {Platform.OS == 'android' ? (
                <StatusBar
                    translucent={true}
                    barStyle="light-content"
                    animated={true}
                />
            ) : (
                <View />
            )}
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName={"Login"}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="TabNavigation" component={TabNavigation} />
                <Stack.Screen name='DrawerNavigtion' component={DrawerNavigation} />

            </Stack.Navigator>
        </View>
    );
};

// export const HomeStack = () => {
//     return (
//         <Stack.Navigator >
//             <Stack.Screen
//                 name="Tab"
//                 component={TabNavigation}
//             />
//         </Stack.Navigator>
//     );
// };
