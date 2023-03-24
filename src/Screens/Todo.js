
import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput,TouchableOpacity,Image } from 'react-native';
// import { SearchBar } from 'react-native-screens';

// import TaskItem from '../Component/TaskItem';
// import TaskItem from '../Component/TaskItem';
// import TaskInputField from '../Component/TaskInputField'
import SearchBar from '../Component/SearchBar';

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  // const [searchText, setSearchText] =useState()

  const addTask = (task) => {
    if (task == null) return;
    setTasks([...tasks, task]);
    // Keyboard.dismiss();
  }

  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
  }
  const searchText=(text)=>{
   const found = tasks.find(element => element == text);
  
  if(found){
    setTasks([found])
  }}
 
  return (
    <View style={styles.container}>
{/* <SearchBar
setSearchText={searchText}/> */}
      
      <View style={{height:70,backgroundColor:'white',marginTop:10}}>
        <Text style={styles.heading}>Data Add and Delete</Text>
        </View>
      <ScrollView style={styles.scrollView}>
        {
        tasks.map((task, index) => {
          return (
            <View key={index} style={styles.taskContainer}>
              <TaskItem index={index + 1} task={task} deleteTask={() => deleteTask(index)} />

              
            </View>
          );
        })
      }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
  heading: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    // marginBottom: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  },
  button: {
    height: 30,
    width: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
},
input:{
  color: 'black',
  height: 50,
  flex: 1
}
});