
import { View, Text, TextInput, StyleSheet, Image } from 'react-native'
import React from 'react'

const CommonInput = ({
    placeholder = '',
    icon = '',
    onChangeText = () => { },
    keyboardType = '',

}) => {
    return (
        <View style={styles.Maincontainer} >
            <Image source={icon} style={styles.image} resizeMode='stretch' />

            <TextInput
                onChangeText={(text) => onChangeText(text)}
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor="black"
                color='black'
                keyboardType={keyboardType} />
        </View>
    )
}
const styles = StyleSheet.create({
    Maincontainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '95%',
        borderRadius: 10,
        height: 60,
        paddingLeft: 20,
        marginTop: 10,
    },
    input: {
        position: 'relative',
        height: '100%',
        width: '90%',
        fontFamily: 'OpenSans-Medium',
        paddingLeft: 20,
    },
    image: {
        height: 25,
        width: 25,
        marginLeft: 15,
    
    }
})
export default CommonInput