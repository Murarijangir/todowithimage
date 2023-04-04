


import React, { useRef } from 'react';
import { ScrollView, Text, View, Animated, SafeAreaView, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AnimatedHeader from './AnimatedHeader';
import DATA from '../../data';


export default function App() {
  const offset = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, }} forceInset={{ top: 'always' }}>
        <AnimatedHeader animatedValue={offset} />



        <ScrollView
          style={{
            flex: 1, backgroundColor: 'white',
          }}
          contentContainerStyle={{
            // alignItems: 'center',
            paddingTop: 220,
            paddingHorizontal: 20,
            borderTopLeftRadius: 45,

          }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: offset } } }],
            { useNativeDriver: false }
          )}
        >



          {DATA.map(item => (
            <View key={item.id} style={{ marginBottom: 10, flexDirection: 'row' }}>
              <Text style={{ color: '#101010', fontSize: 32 }}>
                {item.title}
              </Text>
              {/* <Image source={item.src} style={{height:100,width:100}} resizeMode='center'/> */}
            </View>
          ))}

        </ScrollView>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}
// import React, { useEffect, useRef, useState } from "react";
// import { StyleSheet, Text, View, Animated } from "react-native";

// const OBJ = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }];

// const Item = ({ data, addValue }) => {
//   const zoomAnim = useRef(new Animated.Value(0)).current;
//   useEffect(() => {
//     const zoomIn = () => {
//       Animated.timing(zoomAnim, {
//         toValue: 1,
//         duration: 500,
//         useNativeDriver: true
//       }).start(() => {
//         addValue();
//       });
//     };
//     zoomIn();
//   }, [zoomAnim]);

//   return (
//     <View>
//       <Animated.View
//         ref={zoomAnim}
//         style={[
//           {
//             transform: [{ scale: zoomAnim }]
//           }

//         ]}
//       >
//         <View style={{ height: 80, width: 150, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', marginTop: 15 }}>
//           <Text style={styles.text}>{data}</Text>

//         </View>
//       </Animated.View>
//     </View>
//   );
// };

// function App() {
//   const [state, setState] = useState([OBJ[0]]);



//   const addValue = () => {
//     const currentId = state[state.length - 1].id;
//     if (OBJ[currentId]) {
//       const temp = [...state];
//       temp.push(OBJ[currentId]);
//       setState(temp);
//     }
//   };
//   return (
//     <View style={styles.app}>
//       {state.map((item) => {
//         return <Item data={item.id} key={item.id} addValue={addValue} />;
//       })}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 20,
//     color: 'red'
//   }
// });

// export default App;
