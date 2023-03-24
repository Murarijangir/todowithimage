
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from "react-native";

export default TaskItem = (props) => {
    const createTwoButtonAlert = () =>
    Alert.alert('Alert:', 'Confirm you delete this item', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => props.deleteTask()},
    ]);
    
    return (
        <View style={styles.container}>
            <View style={styles.indexContainer}>
                <Text style={styles.index}>{props.index}</Text>
            </View>
            <View style={styles.taskContainer}>
                <Text style={styles.task}>{props.task}</Text>
                <TouchableOpacity style={{ height: 30, width: 30,marginTop:5 }}    onPress={()=> Alert.alert('yes update')} >
                    <Image source={require('../Images/Update.jpeg')} style={{ height: 25, width: 25 }} resizeMode='stretch' 
                 />

                    </TouchableOpacity>

                <TouchableOpacity style={{ height: 30, width: 30, marginTop:5}} onPress={createTwoButtonAlert} >
                    <Image source={require('../Images/Del.jpeg')} style={{ height: 25, width: 25,marginStart:15
                     }} resizeMode='stretch' />
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 15,
    },
    indexContainer: {
        // position:'absolute',
        backgroundColor: '#3E3364',
        borderRadius: 12,
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        // flexDirection:'row'
    },
    index: {
        color: '#fff',
        fontSize: 20,
    },
    taskContainer: {
        // marginTop:5,
        backgroundColor: '#3E3364',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        // paddingHorizontal: 25,
        paddingEnd:50,
        // paddingVertical: 5,
        minHeight: 50,
        paddingStart:20,
        
    },
    task: {
        color: '#fff',
        width: '85%',
        fontSize: 16,
    },
    delete: {
        // marginLeft: 20,
    },
});

