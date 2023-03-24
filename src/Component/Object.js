

import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
    Modal,
    StyleSheet,
    Alert
} from 'react-native';
import React, { useRef, useState } from 'react';


const Object = ({
    text,
    value,
    onChangeText = () => { },

}) => {

    const [modalVisible, setModalVisible] = useState(true);
    const [search, setSearch] = useState('');
    const [clicked, setClicked] = useState(false);
    const [data, setData] = useState();
    const [options, setOptions] = useState('option');

    return (
        <View style={{ flex: 1, }}>
            <TouchableOpacity
                style={styles.TouchableOpacity}
                onPress={() => {
                    setClicked(!clicked);
                }}>

                <Text style={{ color: 'black', }}>
                    {options == '' ? text : options}
                </Text>


            </TouchableOpacity>

            {clicked ? (
                <Modal
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.component}>
                        <View style={{ padding: 10,justifyContent:'center' }}>

                            {['Mr', 'Mrs'].map(option => (
                                <TouchableOpacity key={option} style={{ borderBottomWidth: 1 }}
                                    onPress={() => {
                                        setOptions(option);
                                        setClicked(!clicked);
                                        setSearch('');
                                        setModalVisible(true)
                                    }}
                                value={value}
                                onChangeText={onChangeText}
                                >
                                    <Text style={{ fontSize: 20 }} >
                                        {option}
                                    </Text>
                                </TouchableOpacity>
                            ))}

                        </View>

                        <TouchableOpacity
                            style={[styles.button]}
                            onPress={() => setClicked(!clicked)}>
                            <Text style={styles.textStyle}>Close</Text>
                        </TouchableOpacity>

                    </View>
                </Modal>
            ) : null
            }
        </View>
    );
};



export default Object;

const styles = StyleSheet.create({

    search: {
        width: '90%',
        height: 50,
        alignSelf: 'center',
        borderWidth: 0.2,
        borderColor: '#8e8e8e',
        borderRadius: 7,
        marginTop: 10,
        paddingLeft: 20,
    },
    TouchableOpacity: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // paddingHorizontal: 10
    },
    updateImage: {
        width: 13,
        height: 8,
        marginEnd: 21
    },
    component: {
        elevation: 10,
        height: 300,
        alignSelf: 'center',
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 6,
        margin: "50%"
    },
    button: {
        paddingHorizontal: "20%",
        paddingVertical: "4%",
        backgroundColor: "#F2F1F3",
        borderRadius: 10
    },
    textStyle: {
        color: '#337CFF',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15
    },



})


    // function selectFile() {
    //     var options = {
    //         title: 'Select Image',
    //         customButtons: [
    //             {
    //                 name: 'customOptionKey',
    //                 title: 'Choose file from Custom Option'
    //             },
    //         ],
    //         storageOptions: {
    //             skipBackup: true,
    //             path: 'images',
    //         },

    //     };;
    //  ImagePicker.launchImageLibrary(options, response => {
    //         // response.assets.forEach(function (item, index) {

    //         //     console.log(item);
    //         //     if(item[index] !=null)
    //         //     {
    //         //       imgArray.push(item[0].uri);
    //         //       setFilepathArray(filePathArray => [...filePathArray, imgArray]);
    //         //     }

    //         //   });
    //         //   ///Loop through responses
    //         //   setImageSource(response.assets[0]);
    //         if (response.didCancel) {
    //             console.log('User cancelled photo picker');
    //             Alert.alert('You did not select any image');
    //         } else if (response.error) {
    //             console.log('ImagePicker Error: ', response.error);
    //         } else if (response.customButton) {
    //             console.log('User tapped custom button: ', response.customButton);
    //         } else {
    //             let source = { uri: response.assets[0].uri };
    //             setImageSource(source.uri);
    //         }
    //     });
    // }