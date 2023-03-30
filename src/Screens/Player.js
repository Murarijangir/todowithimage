import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, Modal, StatusBar } from 'react-native'
import React, { useState } from 'react'
import VideoPlayer from 'react-native-video-player'
import Video from 'react-native-video'
import { Images } from '../Constant/Images'

const FULL_WIDTH = Dimensions.get('screen').width


const Player = ({ navigation, route }) => {
  const [item, setItem] = useState(route?.params?.item);
  return (
    <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
<StatusBar hidden/>
       <TouchableOpacity style={{ marginTop: 20, width: 15,height:30,  marginLeft: 15, }}
        onPress={() => { navigation.navigate('ImagePickers') }}
      >
        <Image source={Images.BackArroe} style={{ height: 30, width: 25 }} />
      </TouchableOpacity>

      <View style={{ flex: 1,  justifyContent: 'center', }}>

      <VideoPlayer

        showDuration={true}
        autoplay={true}
        video={{ uri: item?.url }}
        videoWidth={1700}
        videoHeight={1100}
        thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
        style={{top:-20}}
        fullscreenOrientation='landscape'
      />
</View>
    </View>
  )
}

export default Player

const styles = StyleSheet.create({})