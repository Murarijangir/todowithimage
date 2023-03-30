import React, { useState, useRef } from 'react';
import {
    Animated,
    TouchableOpacity,
    View,
    Text,
    StatusBar,
    Button
} from 'react-native';
import { useSafeAreaInsets, } from 'react-native-safe-area-context';

const HEADER_HEIGHT = 200;

const AnimatedStatusBar = Animated.createAnimatedComponent(StatusBar);

const AnimatedHeader = ({ animatedValue }) => {
    const insets = useSafeAreaInsets();

    const barColor = animatedValue.interpolate({
        inputRange: [0, HEADER_HEIGHT + insets.top],
        outputRange: [ 'lightblue','white'],

    });

    const [barStyle, setBarStyle] = useState('dark-content');




    const headerBackgroundColor = animatedValue.interpolate({
        
        inputRange: [0, HEADER_HEIGHT + insets.top],
        outputRange: ['lightblue', 'white'],
        extrapolate: 'clamp'
    })
    const headerHeight = animatedValue.interpolate({
        inputRange: [0, HEADER_HEIGHT + insets.top],
        outputRange: [HEADER_HEIGHT + insets.top, insets.top + 84],
        extrapolate: 'clamp',
        
        
        
    });
    return (
        <Animated.View
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 10,
                height: headerHeight,
                backgroundColor: headerBackgroundColor,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >

            <AnimatedStatusBar
                backgroundColor={barColor}
                barStyle={barStyle}
                
            />


            <View>
                <Text style={{ color: '#000', fontSize: 30, fontWeight: 'bold' }}>Title</Text>

            </View>


        </Animated.View>
    );
};

export default AnimatedHeader;