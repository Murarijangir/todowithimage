import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, View, TextInput, TouchableOpacity, Text, Image } from "react-native";
// import { MaterialIcons } from '@expo/vector-icons'; 

export default TaskInputField = (props) => {
    const [task, setTask] = useState();

    const handleAddTask = (value) => {
        props.addTask(value);
        setTask(null);
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <TextInput style={styles.inputField} value={task} onChangeText={text => setTask(text)} placeholder={'Write a task'} placeholderTextColor={'#fff'} />
            <TouchableOpacity onPress={() => handleAddTask(task)}>
                <View style={styles.button}>
                    <Image source={require('../Images/OIP.jpeg')} style={{ height: 25, width: 25 ,}} />
                    {/* <Text>hbgvfc</Text> */}
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#fff',
        backgroundColor: '#3E3364',
        borderWidth: 1,
        marginHorizontal: 15,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        // position: 'absolute',
        bottom: 20,
        height: 50
    },
    inputField: {
        color: '#fff',
        height: 50,
        flex: 1,
    },
    button: {
        height: 30,
        width: 30,
        borderRadius: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
});