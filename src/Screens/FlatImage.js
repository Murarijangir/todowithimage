// // Integration of Google map in React Native using react-native-maps
// // https://aboutreact.com/react-native-map-example/
// // Import React
// import React from 'react';
// // Import required components
// import {SafeAreaView, StyleSheet, View} from 'react-native';
// // Import Map and Marker
// import MapView, {Marker} from 'react-native-maps';
// import map from "../../map.json"
// const App = () => {
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.container}>
//         <MapView
//           style={styles.mapStyle}
//           initialRegion={{
//             latitude: 26.90120496772809,
//             longitude: 75.75938321650027,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }}
//           customMapStyle={map}>
//           <Marker
//             draggable
//             coordinate={{
//               latitude: 26.90120496772809,
//               longitude: 75.75938321650027,
//             }}
//             onDragEnd={
//               (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
//             }
//             title={'Test Marker'}
//             description={'This is a description of the marker'}
//           />
//         </MapView>
//       </View>
//     </SafeAreaView>
//   );
// };
// export default App;
// const mapStyle = [
//   {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
//   {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
//   {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
//   {
//     featureType: 'administrative.locality',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#d59563'}],
//   },
//   {
//     featureType: 'poi',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#d59563'}],
//   },
//   {
//     featureType: 'poi.park',
//     elementType: 'geometry',
//     stylers: [{color: '#263c3f'}],
//   },
//   {
//     featureType: 'poi.park',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#6b9a76'}],
//   },
//   {
//     featureType: 'road',
//     elementType: 'geometry',
//     stylers: [{color: '#38414e'}],
//   },
//   {
//     featureType: 'road',
//     elementType: 'geometry.stroke',
//     stylers: [{color: '#212a37'}],
//   },
//   {
//     featureType: 'road',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#9ca5b3'}],
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'geometry',
//     stylers: [{color: '#746855'}],
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'geometry.stroke',
//     stylers: [{color: '#1f2835'}],
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#f3d19c'}],
//   },
//   {
//     featureType: 'transit',
//     elementType: 'geometry',
//     stylers: [{color: '#2f3948'}],
//   },
//   {
//     featureType: 'transit.station',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#d59563'}],
//   },
//   {
//     featureType: 'water',
//     elementType: 'geometry',
//     stylers: [{color: '#17263c'}],
//   },
//   {
//     featureType: 'water',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#515c6d'}],
//   },
//   {
//     featureType: 'water',
//     elementType: 'labels.text.stroke',
//     stylers: [{color: '#17263c'}],
//   },
// ];
// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//   },
//   mapStyle: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//   },
// });

import React,{useState} from "react";
import { View,Text,TextInput,Button } from "react-native";

const FlatImage =({ navigation, route })=> {
  // const { dateTime } = route.params;
  const [name, setName] = useState();
  const [note, setNote] = useState();
  const [des, setDes] = useState();
  const [result, setResult] = useState();

  return (
      <View>
          <TextInput
              // value={dateTime}
          />
          <Text>{'\n'}</Text>

          <TextInput
              placeholder="Enter Event Title"
              value={name}
              onChangeText={value => {
                  setResult(value);
                  setName(value);
              }}
          />
          <Text>{name}</Text>

          <TextInput
              placeholder="Enter Note"
              value={note}
              onChangeText={value => {
                  setNote(value);
                  setResult(value);
              }}
          />

          <Text>{note}</Text>

          <TextInput
              placeholder="Enter Description"
              value={des}
              onChangeText={value => {
                  setDes(value);
                  setResult(value);
              }}
          />
          <Text>{des}</Text>
          <Button
              title="add event"
              onPress={() =>
                  navigation.navigate('three', {
                      // paramKey: dateTime,
                      paramKey1: name,
                      paramKey2: note,
                      paramKey3: des
                  })
              }
          />
      </View>
  );

}

export default FlatImage;