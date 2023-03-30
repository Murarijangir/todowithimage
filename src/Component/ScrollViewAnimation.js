


import React, { useRef } from 'react';
import { ScrollView, Text, View, Animated,SafeAreaView, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AnimatedHeader from './AnimatedHeader';
import DATA from '../../data';


export default function App() {
  const offset = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>
        <AnimatedHeader animatedValue={offset} />



        <ScrollView
          style={{ flex: 1, backgroundColor: 'white', 
        }}
          contentContainerStyle={{
            // alignItems: 'center',
            paddingTop: 220,
            paddingHorizontal: 20,
            borderTopLeftRadius:45 ,
          }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: offset } } }],
            { useNativeDriver: false }
          )}
        >



          {DATA.map(item => (
            <View key={item.id} style={{ marginBottom: 20,flexDirection:'row' }}>
              <Text style={{ color: '#101010', fontSize: 32 }}>
                {item.title}
              </Text>
              <Image source={item.src} style={{height:100,width:100}} resizeMode='center'/>
            </View>
          ))}

        </ScrollView>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}