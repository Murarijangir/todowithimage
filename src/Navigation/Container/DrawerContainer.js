import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Images } from '../../Constant/Images';
import colors from '../../Constant/colors';


const DATA = [
    {
        id: '01',
        title: 'Home',
        src: Images.User,
        screen: 'Curd'
    },
    {
        id: '02',
        title: 'GoogleMap',
        src: Images.GoogleMap,
        screen: 'GoogleMap',
    },
    {
        id: '03',
        title: 'Video',
        src: Images.VideoPlay,
        screen: 'Videos'
    },
  
    {
        id: '04',
        title: 'Calculator',
        src: Images.Calculator,
        screen: 'Calculator',
    },
    {
        id: '05',
        title: 'Calendar',
        src: Images.Calander,
        screen: 'CalanderPicker',
    },
];

const Item = ({ item,}) => {
    const navigation = useNavigation();

    return (
      
            <Pressable
            onPress={() => navigation.navigate(item.screen)}
            style={({ pressed }) => [{ backgroundColor: pressed ? '#7854F7' : 'white' }, styles.btn]}>
                
                <Image source={item.src} style={styles.flatimage} resizeMode='contain' />

                <Text style={[ styles.name]}>{item.title}</Text>
            </Pressable>

    );


}

const DrawerContainer = ({ }) => {

    return (
        <View style={{ paddingLeft: 37, paddingTop: 38, }}>
            <Image source={Images.Photo} style={{ height: 100, width: 100, borderRadius: 50 }} />
            <FlatList
                style={{ marginTop: 20 }}
                data={DATA}
                keyExtractor={item => item.id}
                renderItem={({ item, index, }) => <Item item={item} />
                }
            />

        </View>
    )
}

export default DrawerContainer;

const styles = StyleSheet.create({
    flat: {


    },
    flatimage: {
        height: 22,
        width: 22,
        tintColor: colors.Black
    },
    name: {
        fontSize: 15,
        paddingHorizontal: 20,
        color:colors.Black
    },
    btn: {
        alignItems: 'center',
        paddingVertical: 18,
        flexDirection: 'row', borderRadius: 10,
        marginTop: 5

    }
})