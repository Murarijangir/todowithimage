import { View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Images } from '../Constant/Images'

const SearchBar = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ alignSelf: 'center', }}>
                <Image source={Images.SearchIcon} style={styles.image}></Image>

            </TouchableOpacity>

            <TextInput
                placeholder='Search'
                placeholderTextColor='black'
                style={styles.input} 
                onChangeText={props.onChangeText}/>
                

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: 'row',
        borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 10,

    },
    image: {
        height: 15,
        width: 15,
        marginLeft:10,
        tintColor:'black'
    },
    input: {
        marginStart: 20,
        fontSize: 15,
        flex:1
    }
})
export default SearchBar