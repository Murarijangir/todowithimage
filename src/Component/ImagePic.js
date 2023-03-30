import { StyleSheet, Text, View, TouchableOpacity, Image, Modal } from 'react-native'
import React, { useState } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Images } from '../Constant/Images';

const ImagePic = () => {
    // var imgArray = [];
    // const [imageSource, setImageSource] = useState(null);
    const [modalVisibl, setModalVisibl] = useState(true);
    const [clicks, setClicks] = useState(false);
    const [filePathArray, setFilePathArray] = useState([]);
    const [filePath,setFilePath]=useState([]);
    const [imageSource,setImageSource]=useState(null);
    const selectFile = (type) => {

        var options = {
            title: 'Select Image',
            allowsEditing: false,
            quality: 0.9,
            noData: true,
            maxWidth: 1200,
            maxHeight: 1200,
            selcetionLimit: 5,
            mediaType: "photo",
            selcetionLimit: 5,
            customButtons: [
                { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
            ],
            storageOptions: {
                skipBackup: true,
                cameraRoll: false
            },
        };

        launchImageLibrary(options, (response) => {
            response.assets.forEach(function (item, index) {

                console.log(item);
                if(item[index] !=null)
                {
                  imgArray.push(item[0].uri);
                  setFilePathArray(filePathArray => [...filePathArray, imgArray]);
                }
        
              });
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                let source = { uri: response.assets[0].uri };
                setImageSource(source.uri);
                // setImageSource( source.response.assets[0])

                setClicks(!clicks)

            }
        });

    }

    return (
        <View style={{ height: 120, justifyContent: 'center', alignItems: 'center', }}>
            <TouchableOpacity style={{ height: 110, width: 110, borderRadius: 55, alignItems: 'center', justifyContent: 'center', borderWidth: 1 }}
                activeOpacity={0.5}
                value={imageSource}
                onChangeText={image => setImageSource(image)}
                onPress={() => {
                    setClicks(!clicks)
                }}

            >

                {imageSource === null ? (
                    <Image
                     source={Images.ProfileOpt}                     style={{ height: 110, width: 110, borderRadius: 55 }}
                        resizeMode='stretch'
                    />
                ) : (
                    <Image

                        source={{ uri: imageSource }}
                        style={{ height: 110, width: 110, borderRadius: 55, alignSelf: 'center', }}
                    />
                )}
            </TouchableOpacity>
            {clicks ? (
                <Modal
                    transparent={true}
                    visible={modalVisibl}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisibl(!modalVisibl);
                    }}>

                    <TouchableOpacity style={styles.TouchableOpacity1} onPress={() => setClicks(!clicks)}>
                    </TouchableOpacity>
                    <View style={{
                        alignSelf: 'center',
                        width: '90%',
                        backgroundColor: '#fff',
                        borderRadius: 10,
                        height: 150,
                        marginTop: "50%",
                    }}>


                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flex: 2, alignItems: 'center', }}>

                          

                            <TouchableOpacity
                                activeOpacity={0.5}
                                style={styles.imageButtonStyle}
                                onPress={() => selectFile('photo')}>
                                <Text style={styles.textStyle}>Choose Image</Text>
                            </TouchableOpacity>
                        </View>




                        <View style={{ marginHorizontal: 10, flex: 1 }}>
                            <TouchableOpacity
                                style={[styles.button]}
                                onPress={() => setClicks(!clicks)}>
                                <Text style={styles.textStyle}>Close</Text>
                            </TouchableOpacity>
                        </View>

                    </View>


                </Modal>
            ) : null
            }
        </View>
    )
}

export default ImagePic

const styles = StyleSheet.create({
    imageButtonStyle: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        backgroundColor: 'whitesmoke'

    },

    button: {
        paddingVertical: "4%",
        // backgroundColor: "#F2F1F3",
        backgroundColor: 'whitesmoke',
        borderRadius: 10
    },
    textStyle: {
        color: '#337CFF',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15
    },
    TouchableOpacity1: {
        // flex: 1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        position: 'absolute'
    },
})