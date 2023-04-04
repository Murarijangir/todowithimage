import React, { useState } from "react";
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Exercise = () => {

  const saveData = async () => {
    try {
      await AsyncStorage.setItem('name', 'rahul');
      console.log('Saved')
    } catch (e) {
      // save error
    }
  };

  const getData = async () => {
    try {
      const name = await AsyncStorage.getItem('name')
      console.log('name:' + name);
    } catch { e } {
      // save error
    }
  };
  const deleteData = async () => {
    try {
      await AsyncStorage.removeItem('name')
      console.log('name:' + JSON.stringify(name));
    } catch { e } {
      // save error
    }
  };
  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch(e) {
      // clear error
    }
  
    console.log('Done.')
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
{/* <Text>{async}</Text> */}


      <TouchableOpacity style={{ marginTop: 15, paddingVertical: 15, backgroundColor: 'blue', width: '70%', alignItems: 'center' }}
        onPress={() => saveData()}

      >
        <Text style={{ color: 'white' }}>SaveData</Text>
      </TouchableOpacity>



      <TouchableOpacity style={{ marginTop: 15, paddingVertical: 15, backgroundColor: 'blue', width: '70%', alignItems: 'center' }}
        onPress={() => getData()}

      >
        <Text style={{ color: 'white' }}>GetData</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginTop: 15, paddingVertical: 15, backgroundColor: 'blue', width: '70%', alignItems: 'center' }}
        onPress={() => deleteData()}

      >
        <Text style={{ color: 'white' }}>DeleteData</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginTop: 15, paddingVertical: 15, backgroundColor: 'blue', width: '70%', alignItems: 'center' }}
        onPress={() => clearAll()}

      >
        <Text style={{ color: 'white' }}>ClearData</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Exercise;


// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { useAsyncStorage } from '@react-native-async-storage/async-storage';

// export default function App() {
//   const [value, setValue] = useState('value');
//   const { getItem, setItem } = useAsyncStorage('@storage_key');

//   const readItemFromStorage = async () => {
//     const item = await getItem();
//     setValue(item);
//   };

//   const writeItemToStorage = async newValue => {
//     await setItem(newValue);
//     setValue(newValue);
//   };

//   useEffect(() => {
//     readItemFromStorage();
//   }, []);

//   return (
//     <View style={{ margin: 40 }}>
//       <Text>Current value: {value}</Text>
//       <TouchableOpacity
//         onPress={() =>
//           writeItemToStorage(
//             Math.random()
//               .toString(36)
//               .substr(2, 5)
//           )
//         }
//       >
//         <Text>Update value</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }