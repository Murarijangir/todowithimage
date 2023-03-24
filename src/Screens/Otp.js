import { View, Text, TextInput, StatusBar, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useRef, useState } from 'react'
import Video from 'react-native-video'
import VideoPlayer from 'react-native-video-player';

const Otp = ({ navigation }) => {
    const videoPlayer = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [paused, setPaused] = useState(false);
    // const [playerState, setPlayerState ] = useState(PLAYER_STATES.PLAYING);
    const [screenType, setScreenType] = useState('content');

    const onSeek = (seek) => {
        videoPlayer.current.seek(seek);
    };

    // const onPaused = (playerState) => {
    //   setPaused(!paused);
    //   setPlayerState(playerState);
    // };

    const onReplay = () => {
        setPlayerState(PLAYER_STATES.PLAYING);
        videoPlayer.current.seek(0);
    };

    const onProgress = (data) => {
        if (!isLoading) {
            setCurrentTime(data.currentTime);
        }
    };

    const onLoad = (data) => {
        setDuration(data.duration);
        setIsLoading(false);
    };

    const onLoadStart = (data) => setIsLoading(true);

    const onEnd = () => setPlayerState(PLAYER_STATES.ENDED);


    return (
        <View style={{ flex: 1, }}>
            <Video
            fullscreen={true}
            ignoreSilentSwitch="ignore"
            // seek='true'
          onEnd={onEnd}
          onLoad={onLoad}
          onLoadStart={onLoadStart}
          paused={false}
          pictureInPicture={true}
          ref={videoPlayer}
          resizeMode='contain'
          onFullScreen={isFullScreen}
          audioOnly={true}
          fullscreenOrientation="landscape"
          playWhenInactive={true}
          selectedVideoTrack={{
            type: "resolution",
            value: 480
          }}
      
        source={require('../Images/mixit.mp4')}
          style={styles.mediaPlayer}
          volume={10}
        /> 
     
       </View> 
    );
};

export default Otp



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    toolbar: {
        marginTop: 30,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
    },
    mediaPlayer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        // backgroundColor: 'black',
        justifyContent: 'center',
    },
});


// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Otp = () => {
//   return (
//     <View>
//       <Text>Otp</Text>
//     </View>
//   )
// }

// export default Otp

// const styles = StyleSheet.create({})

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import Video from 'react-native-video'

// const Otp = () => {
//   return (
//     <View>
//       <Text>Otp</Text>
//       <Video></Video>
//     </View>
//   )
// }

// export default Otp

// const styles = StyleSheet.create({})