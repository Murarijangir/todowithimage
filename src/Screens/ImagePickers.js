import {
    StyleSheet, Text, View, Image, TouchableOpacity,
    Modal, Dimensions, FlatList, ScrollView, Alert
} from 'react-native'
import React, { useState } from 'react'
import ImagePicker from 'react-native-image-crop-picker';
import Video from 'react-native-video';
import { Images } from '../Constant/Images';

const FULL_WIDTH = Dimensions.get('screen').width

const ImagePickers = ({ navigation, route }) => {

    // const [show ,setShow] = useState(imageSource,videoView)
    const [imageSource, setImageSource] = useState([]);
    const [videoView, setVideoView] = useState([]);
    const [modalVisible, setModalVisible] = useState(true);
    const [clicks, setClicks] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0)

    const galaryImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            // multiple:true
        }).then(image => {
            console.log(image);
            var arr = [...imageSource]
            arr.push({
                url: image?.path
            })
            setImageSource(arr)
        });
        setClicks(!clicks)
    };

    const galaryVideo = () => {
        ImagePicker.openPicker({
            mediaType: "video",
        }).then((video) => {
            console.log(video);
            var arr = [...videoView]
            arr.push({
                url: video?.path
            })
            setVideoView(arr)
        });
        setClicks(!clicks)
    };

    const cameraImage = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
            var arr = [...imageSource]
            arr.push({
                url: image?.path
            })
            setImageSource(arr)
        });
        setClicks(!clicks)
    };

    const cameraVideo = () => {
        ImagePicker.openCamera({
            mediaType: 'video',
        }).then(video => {
            console.log(video);
            var arr = [...videoView]
            arr.push({
                url: video?.path
            })
            setVideoView(arr)
        });
        setClicks(!clicks)
    };

    const ShowImage = (item,) => {
        navigation.navigate('ImageShow', {
            item: item,
            key: imageSource

        })
    }

    const Play = (item, index) => {
        navigation.navigate('Player', {
            item: item,

        })
    }
    const removeItem = (index) => {
        setImageSource([
            ...imageSource.slice(0, index),
            ...imageSource.slice(index + 1)
        ]);
        console.log('======', index);
    }
    const removeVideo = (index) => {
        setVideoView([
            ...videoView.slice(0, index),
            ...videoView.slice(index + 1)
        ]);
        console.log("+++++++", index);
    }

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity
                onPress={() => {
                    setClicks(!clicks)
                }}
                style={styles.viewBox1}
            >
                <Text>Upload Images</Text>
            </TouchableOpacity>

            <ScrollView>
                <View style={styles.mainHeader} >

                    {imageSource?.map((item, index,) => (
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity style={styles.viewBox}
                                onPress={() => ShowImage(item, imageSource, index)}
                            >
                                <Image source={{ uri: item?.url }} style={styles.imageBox} resizeMode='cover' />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.deleteBtn}
                                onPress={() => Alert.alert('', 'Are you sure you want to delete', [
                                    {
                                        text: 'Cancel',
                                        onPress: () => console.log('Cancel Pressed'),
                                        style: 'cancel',
                                    },
                                    { text: 'OK', onPress: () => removeItem(index) },
                                ])}
                            >
                                <Text style={styles.deleteTxt}>DELETE</Text>
                            </TouchableOpacity>
                        </View>
                    ))}

                   {videoView?.map((item, index) => (
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity style={styles.viewBox}
                                onPress={() => Play(item)}
                            > 
                                 <Image source={{ uri: item?.url }} style={styles.imageBox} />

                                <Image source={Images.Play} style={styles.playIcon} />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.deleteBtn}
                                onPress={() => Alert.alert('', 'Are you sure you want to delete',
                                    [{
                                        text: 'Cancel',
                                        onPress: () => console.log('Cancel Pressed'),
                                        style: 'cancel',
                                    },
                                    {
                                        text: 'OK', onPress: () => removeVideo(index)
                                    },
                                    ])}
                            >
                                <Text style={styles.deleteTxt}>DELETE</Text>
                            </TouchableOpacity>
                        </View>
                    ))}

                    {clicks ? (
                        <Modal
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                setModalVisible(!modalVisible);
                            }}>
                            <TouchableOpacity
                                style={styles.TouchableOpacity1}
                                onPress={() => setClicks(!clicks)}>
                            </TouchableOpacity>

                            <View style={styles.modalView}>

                                <View style={styles.modalButton}>

                                    <TouchableOpacity
                                        activeOpacity={0.5}
                                        style={[styles.imageButtonStyle, { marginTop: 50 }]}
                                        onPress={() => galaryImage()}>

                                        <Text style={styles.textStyle}>Choose Image
                                        </Text>
                                    </TouchableOpacity>


                                    <TouchableOpacity
                                        activeOpacity={0.5}
                                        style={styles.imageButtonStyle}
                                        onPress={() => galaryVideo()}>

                                        <Text style={styles.textStyle}>Choose Video
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        activeOpacity={0.5}
                                        style={styles.imageButtonStyle}
                                        onPress={() => cameraImage()}>
                                        <Text style={styles.textStyle}>Camera Image</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        activeOpacity={0.5}
                                        style={styles.imageButtonStyle}
                                        onPress={() => cameraVideo()}>
                                        <Text style={styles.textStyle}>Camera Video</Text>
                                    </TouchableOpacity>
                                </View>


                                <View style={styles.closeButton}>
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
            </ScrollView >
            
 {/* <FlatList
                horizontal
                contentContainerStyle={{
                }}
                pagingEnabled
                // onMomentumScrollEnd={({ nativeEvent }) => {
                //                         console.log(nativeEvent,'====',FULL_WIDTH)

                //     setCurrentIndex(Math.round(Math.round(nativeEvent.contentOffset.x) / Math.round(FULL_WIDTH)));
                // }}
                // showsHorizontalScrollIndicator={false}
                data={imageSource}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity
                        onPress={() => ShowImage(item, imageSource, index)}

                        
                        style={{
                            borderWidth: 1,
                            height: 200, width: FULL_WIDTH - 40,
                            marginHorizontal: 20
                        }}>
                            <Image source={{ uri: item?.url }} style={{
                                height: 200, width: FULL_WIDTH - 40
                            }} borderRadius={10} />
                        </TouchableOpacity>
                    )
                }}
            />  */}
{/* 
 <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
                {imageSource.map((item, index) => {
                    return (
                        <View style={{ height: 25, width: 25, borderRadius: 15, backgroundColor: index == currentIndex ? 'red' : 'grey', marginRight: 10 }} />
                    )
                })}
            </View>  */}

        </View >
    );
}

export default ImagePickers

const styles = StyleSheet.create({
    viewBox1: {
        height: 120, width: FULL_WIDTH * 0.45,
        borderWidth: 1, borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginRight: 15,
        marginTop: 20
    },
    mainHeader: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginHorizontal: 10
    },
    viewBox: {
        height: 120,
        width: FULL_WIDTH * 0.45,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    imageBox: {
        height: 120,
        width: FULL_WIDTH * 0.45,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    deleteBtn: {
        backgroundColor: 'red',
        height: 25,
        width: FULL_WIDTH * 0.45,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
    },
    deleteTxt: {
        color: '#FFF',
        fontWeight: 'bold'
    },
    playIcon: {
        height: 30,
        width: 30,
        borderRadius: 15,
        position: 'absolute',
    },
    TouchableOpacity1: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        position: 'absolute'
    },
    modalView: {
        alignSelf: 'center',
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 10,
        height: 300,
        marginTop: "50%",
    },
    modalButton: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        flex: 2,
        alignItems: 'center'
    },
    imageButtonStyle: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        backgroundColor: 'whitesmoke',
    },
    textStyle: {
        color: 'orange',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15
    },
    closeButton: {
        marginHorizontal: 10,
        flex: 1,
    },
    button: {
        paddingVertical: "4%",
        backgroundColor: 'whitesmoke',
        borderRadius: 10,
        borderWidth: 1
    },
})




