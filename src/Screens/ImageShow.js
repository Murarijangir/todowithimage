import { height } from 'deprecated-react-native-prop-types/DeprecatedImagePropType'
import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, StatusBar, FlatList, ScrollView } from 'react-native'
import Video from 'react-native-video'
import VideoPlayer from 'react-native-video-player'

const FULL_WIDTH = Dimensions.get('screen').width
const FULL_HEIGHT = Dimensions.get('screen').height

const ImageShow = ({ navigation, route, index }) => {
    const [show, setShow] = useState(route?.params?.key);
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListref = useRef();



    return (
        <View style={styles.viewBox}>
            <StatusBar hidden />
            <FlatList
                horizontal
                ref={flatListref}
                pagingEnabled
                onMomentumScrollEnd={({ nativeEvent }) => {
                    // console.log(nativeEvent, '====', FULL_WIDTH)
                    setCurrentIndex(Math.round(Math.round(nativeEvent.contentOffset.x) / Math.round(FULL_WIDTH)));
                }}
                showsHorizontalScrollIndicator={false}
                data={show}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.viewBox1}>
                            <Image source={{ uri: item?.url }} style={styles.image} resizeMode='cover' />
                         
                        </View>
                    )
                }}
            />
            <View style={styles.sliderView}>
                {currentIndex === 0 ? <View></View> :
                    <TouchableOpacity
                        onPress={() => {
                            setCurrentIndex(currentIndex - 1);
                            flatListref.current.scrollToIndex({
                                animated: true,
                                index: parseInt(currentIndex) - 1,
                            })
                        }}
                        style={styles.iconTouch}
                    >
                        <Image source={require('../Images/left.png')} style={styles.iconImage} />
                    </TouchableOpacity>}

                {currentIndex === show.length - 1 ? null :
                    <TouchableOpacity
                        onPress={() => {
                            setCurrentIndex(currentIndex + 1);
                            flatListref.current.scrollToIndex({
                                animated: true,
                                index: parseInt(currentIndex) + 1,
                            });
                        }}
                        style={styles.iconTouch}
                    >
                        <Image source={require('../Images/right.png')} style={styles.iconImage} />
                    </TouchableOpacity>}
            </View>
        </View>
    )
}
export default ImageShow
const styles = StyleSheet.create({
    viewBox: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    viewBox1: {
        justifyContent: 'center',
        width: FULL_WIDTH,
    },
    image: {
        height: FULL_HEIGHT * 0.60,
        width: FULL_WIDTH
    },
    sliderView: {
        alignItems: "center",
        justifyContent: 'space-between',
        flexDirection: 'row',
        position: 'absolute',
        width: FULL_WIDTH,
        height: FULL_HEIGHT,
        paddingHorizontal: 4,
    },
    iconTouch: {
        backgroundColor: "gray",
        padding: 10,
        borderRadius: 20
    },
    iconImage: {
        height: 20,
        width: 20,
        tintColor: '#FFF'
    }
})