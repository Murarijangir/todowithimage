import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Images } from '../Constant/Images'
import { useNavigation } from '@react-navigation/native'
import TabNavigation from '../Navigation/TabNavigation'
import { FULL_HEIGHT } from '../Constant/Layout'
import colors from '../Constant/colors'
const Header = ({
    Name = '',
    source,
}) => {
    const navigation = useNavigation()

    return (

        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', height:FULL_HEIGHT*.10,paddingHorizontal:15,backgroundColor:'#7854F7',borderBottomLeftRadius:15,borderBottomRightRadius:15 }}>
            <StatusBar barStyle='light-content' backgroundColor='#7854F7'/>
            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                onPress={() => navigation.openDrawer()}

            >
                <Image source={Images.DrawerIcon1} style={{ height: 35, width: 35, borderRadius: 13 }} />
            </TouchableOpacity>

            <View style={{ flex: 5, alignItems: 'center' }}>
                <Text style={{ fontSize: 25, color:colors.White, fontWeight: 'bold', }}>{Name}</Text>
            </View>
            <View style={{ flex: 1 }}>
            </View>
        </View>

    )
}

export default Header

const styles = StyleSheet.create({})