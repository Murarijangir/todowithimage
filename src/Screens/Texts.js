//  import React, { useState } from 'react';

// import { View, TextInput, Button, StyleSheet, TouchableOpacity,Text } from 'react-native';



// const Texts=({navigation})=> {

//   const [inputs, setInputs] = useState([5]);



//   const handleAdd = () => {

//     setInputs([...inputs, inputs.length + 1]);
// {console.log('ggg',inputs);}
//   };

//   const handleDelete = (index) => {

//     let newInput = inputs.filter((_, i) => i !== index);

//     setInputs(newInput);
// {console.log('jat',inputs);}
//   };
//   return (

//     <View>

//       {inputs.map((input, index) => (

//         <View key={index}>

//           <TextInput key={index} placeholder="text" style={styles.TextInput} />
//           <Button title="Delete" onPress={() => handleDelete(index)} style={styles.button1} color='red' />
//         </View>

//       ))}
      
//       <TouchableOpacity onPress={handleAdd} style={styles.add}>
//         <Text style={{color:'white'}}>Add</Text>
//         </TouchableOpacity>

//     </View>

//   );

// }



// export default Texts;

// const styles = StyleSheet.create({

//   TextInput: {

//     height: 40,

//     borderWidth: 1,

//     margin: 10,

//     fontSize: 20,

//     borderRadius: 10,



//   },

//   add: {
//     justifyContent:'center',
// alignItems:"center",
//     backgroundColor: 'red',
    
//     borderRadius: 10,
//     height:40,
//    width: 50,
//    alignSelf:"center"

//   },
//   button1:{
//     height:50,
//     width:50
//   }



//  })


 import React, { useState } from "react";
 
 import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
 
  
 
 const TextInput_Add = () => {
 
   const [inputs, setInputs] = useState([]);
 
   const [textInput, setTextInput] = useState("cddc");
 
   const [submittedInputs, setSubmittedInputs] = useState([]);
 
  
 
   const addInput = () => {
 
     setInputs([...inputs, textInput]);
 
     setTextInput("");
 
    //  console.warn();(">>>>>>",textInput);
 
   };
 
   const deleteInput = () => {
 
     setInputs(inputs.slice(0, -1));
 
   };
   

 
   const handleSubmit = () => {
 
     setSubmittedInputs([...submittedInputs, ...inputs]);
 
     setInputs([]);
 
   };
 
   return (
 
    //  <ScrollView>
 
     <View style={{margin:10}}>
 
       {/* {inputs.map((input, index) => ( */}
 
       <TextInput style={styles.TextInput}
 
       // key={index}
 
       placeholder="TEXT"
 
         value={textInput}
 
         onChangeText={(value) => setTextInput(value)}
 
       />
 
       {/* ))} */}
 
       <View style={styles.ButtonView}>
 
       <TouchableOpacity onPress={addInput} style={styles.Button}>
 
         <Text>ADD</Text>
 
       </TouchableOpacity>
 
       <TouchableOpacity onPress={deleteInput}  style={[styles.Button,{backgroundColor:'red'}]}>
 
         <Text>DELETE</Text>
 
       </TouchableOpacity>
       <TouchableOpacity onPress={handleSubmit}  style={[styles.Button,{backgroundColor:"#202b36"}]}>
 
 <Text style={{color:"white"}}>Submit</Text>

</TouchableOpacity>
       </View>
 
       {/* <View style={styles.submitView}> */}
 
      
 
       {/* </View> */}
 
       {/* <Text>Submitted Inputs:</Text> */}
 
  
 
       <FlatList
 
         data={submittedInputs}
 
         renderItem={({ item }) =><Text style={{fontSize:30}}>{item}</Text>}
 
             keyExtractor={(item, index) => index.toString()}
 
       />
 
  
 
     </View>
 
    //  </ScrollView>
 
   );
 
 };
 
  
 
 export default TextInput_Add;
 
 const styles = StyleSheet.create({
 
     TextInput: {
 
       height: 40,
 
       borderWidth: 1,
 
       margin: 5,
 
       fontSize: 15,
 
       borderRadius: 10,
 
       paddingLeft:20
 
     },
 
     ButtonView:{
 
     flexDirection:"row",
 
     justifyContent:'center',
 
     },
 
     Button:{
 
         margin:10,
 
         height:35,
 
         width:100,
 
         backgroundColor:"green",
 
         alignItems:"center",
 
         justifyContent:"center",
 
         borderRadius:10,
 
     },
 
     submitView:{
 
         alignItems:"center"
 
     }
 
  
 
 })
 
  
 
  
 

 
  
 
 



// import React, { useState } from 'react';
 
// import { StyleSheet, Text, Button, Alert, TextInput, SafeAreaView } from 'react-native';
 
// var mainArray = ["One", "two"] ;
 
// export default function App() {
 
//   const [InputDATA, setInputData] = useState(" ");
 
//   const addElementToArray =()=>{
//  console.log('raaaa',mainArray);
//     mainArray.push(InputDATA.toString());
 
//     Alert.alert('Data Added Successfully...');
 
//     console.log(mainArray);
  
//   }
//   return (
//     <SafeAreaView style={styleSheet.MainContainer}>
 
//       <Text style={styleSheet.text}> Add TextInput Item To Array in React Native </Text>
 
//         <TextInput
//           placeholder="Enter Value here"
//           onChangeText={item => setInputData(item) }
//           style={styleSheet.textInput} />
 
//       <Button onPress={addElementToArray}
//         title={'Add Item To Array'} />
 
//     </SafeAreaView>
//   );
 
// }
 
// const styleSheet = StyleSheet.create({
 
//   MainContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
 
//   text:{
//     fontSize: 25,
//     color: 'black',
//     textAlign: 'center',
//     paddingBottom: 20
//   },
 
//   textInput:{
//       textAlign: 'center',
//       marginBottom: 20, 
//       height: 44,
//       width: '88%',
//       borderWidth: 1,
//       borderColor: '#4CAF50',
//       borderRadius: 7,
//   }
// });




// nextnjnfkn
// import { 
//     Text,
// View,
// Imagebackground,
// TextInput } from "react-native";
// import React,{useState} from "react";




// export default function AddStudentProfile({returnToProfile,onAppData}){
//     const [values, setValues] = useState({});
//     function inputHandler(name, value) {
//         setValues({
//             ...values,
//             [name]: value
//         })
//     }
//     function inpValues(srcChange) {
//         onAppendData(values, srcChange)
//         console.log(values)
//     }
//     return(
//         <ScrollView>
//                     <View style={styles.screenContainer}>
//                         <View>
//                             <Text style={styles.textContainer}>
//                                 Add Student Profile
        
//                             </Text>
//                         </View>
//                         <View style={styles.iconOutterContainer}>
//                             <View style={styles.iconContainer}>
//                                 <AntDesign
//                                     name="user"
//                                     size={80}
//                                     color='white'
//                                 />
//                             </View>
//                         </View>
//                         <View style={{ alignItems: 'center' }}>
//                             <TextInput
//                                 style={styles.inputTextContainer}
//                                 placeholder="name"
//                                 placeholderTextColor={ColorCode.placeHolder}
//                                 onChangeText={(val) => inputHandler('sname', val)}
//                             />
//                             <TextInput
//                                 style={styles.inputTextContainer}
//                                 placeholder="roll no"
//                                 placeholderTextColor={ColorCode.placeHolder}
//                                 onChangeText={(val) => inputHandler('rno', val)}
//                             />
//                              <TextInput
//                                 style={styles.inputTextContainer}
//                                 placeholder="department"
//                                 placeholderTextColor={ColorCode.placeHolder}
//                                 onChangeText={(val) => inputHandler('dep', val)}
//                             />
//                             <TextInput
//                                 style={styles.inputTextContainer}
//                                 placeholder="e-mail"
//                                 placeholderTextColor={ColorCode.placeHolder}
//                                 onChangeText={(val) => inputHandler('mail', val)}
//                             />
//                             <TextInput
//                                 style={styles.inputTextContainer}
//                                 placeholder="Phone no"
//                                 placeholderTextColor={ColorCode.placeHolder}
//                                 onChangeText={(val) => inputHandler('phno', val)}
//                             />
//                         </View>
//                         <PrimaryButton
//                             onreturnToProfile={returnToProfile}
//                             inputValues={inpValues}
//                             changeColor='#8a0896'
//                         >Save</PrimaryButton>
//                         </View>
//                         </ScrollView>
//     )
// // }
// import { View, Text,Button,TextInput } from 'react-native'
// import React,{useState} from 'react'



// export default function AddField({ navigation }) {
//     const [fields, setFields] = useState([{ value: null }]);
  
//     function handleChange(i, event) {
//       console.log(i)
//       const values = [...fields];
//       values[i].value = event.target.value;
//       setFields(values);
      
//     }
  
//     function handleAdd() {
      
//       const values = [...fields];
//       values.push({ value: null });
//       setFields(values);
//     }
  
//     function handleRemove(i) {
//       const values = [...fields];
//       values.splice(i, 1);
//       setFields(values);
//     }
    
//     return (
//       <View>
//         <Button title="add" onPress={() => handleAdd()} />
  
//         {fields.map((field, idx) => {
//           return (
//             <View key={`${field}-${idx}`}>
//               <TextInput
//                 type="text"
//                 placeholder="Enter text"
//                 value={field.value}
//                 onChangeText={(text) => handleChange(idx, text)}
//               />
//               <Button title="sub" onPress={() => handleRemove(idx)} />
//             </View>
//           );
//         })}
//       </View>
//     );
//   }


// next


// import React, {useState} from 'react';
// import { Text, View, StyleSheet, TextInput, Alert, Button } from 'react-native';

// const App = () => {
//   const [name, setname] = useState('')
//   const [secret, setsecret] = useState('')
//   var Value = name;
//   var secret_Value = secret;
//   return (
//     <View style={styles.container}>
//       <TextInput 
//         style={styles.input}
//         placeholder='write here'
//         value={Value}
//         onChangeText={(Value) => {
//           setname(Value)
          
//         }}
//       />
//       <TextInput 
//         style={styles.input}
//         placeholder='write here'
//         value={secret_Value}
//         onChangeText={(secret_Value) => {
//           setsecret(secret_Value)
//           {console.log('dddd',);}
//         }}
//       />
//       <Button title='submit' onPress={() => {
//         if (Value === 'Omar' && secret_Value === '123'){
//           Alert.alert('Done')
//         }
//       }}/>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#D3BFA1',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   input: {
//     borderBottomWidth: 1,
//     width: '50%',
//     marginVertical: 5
//   },
// });