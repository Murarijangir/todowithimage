



import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const DATA = [
    {
        id: '01',
        // src: require('../Assets/Image/profileicon.png'),
        title: 'Manage profile',
        screen:'Curd'
    },
    {
        id: '02',
        // src: require('../Assets/Image/walleticon.png'),
        title: 'Manage payments',
        screen:'GoogleMap',
    },
 

];

const Item = ({ item,}) => {
const navigation = useNavigation();
    return(

    <TouchableOpacity style={styles.flat} onPress={()=>{navigation.navigate(item.screen)}}>
        <Image source={item.src} style={styles.flatimage} />
        <Text style={styles.name}>{item.title}</Text>
    </TouchableOpacity>
)
    }

const DrawerContent = ({navigation}) => {

    return (
        <View>

            <FlatList
                data={DATA}
                keyExtractor={item => item.id}

                renderItem={({ item, index }) => <Item item={item} />
                }
            />
            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 100 }
        }
        >



            </TouchableOpacity>
        </View>
    )
}

export default DrawerContent

const styles = StyleSheet.create({
    flat: {

        flexDirection: 'row',
        paddingVertical: 18,
        alignItems: 'center',
    },
    // flatimage: {
    //     height: 15
    //     width: wp('6%'),
    // },
    name: {
        fontSize: 15,
        color: '#000000',
        paddingHorizontal: 13
    }
})