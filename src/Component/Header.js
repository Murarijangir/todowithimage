import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Images } from '../Constant/Images'
import { useNavigation } from '@react-navigation/native'
const Header = ({
    Name = '',
}) => {
    const navigation = useNavigation()

    return (
        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginTop: 20, }}>
            <TouchableOpacity style={{ flex: 1 }}
            onPress={() => navigation.navigate('DrawerNavigation')}

            >
                <Image source={Images.Drawericon} style={{ height: 15, width: 15, }} />
            </TouchableOpacity>

            <View>
                <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold', }}>{Name}</Text>
            </View>
            <View style={{ flex: 1 }}>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})