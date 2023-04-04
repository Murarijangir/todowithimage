import { View, Text, StatusBar, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Button from '../Component/Button'
import { Images } from '../Constant/Images'
import { useNavigation } from '@react-navigation/native'
const Login = () => {
    const navigation = useNavigation();
    return (

        <View style={styles.mainContainer}>
            <StatusBar barStyle='dark-content' backgroundColor='white' />
            <View style={styles.container}>
                <Image style={styles.image} source={Images.Profile} resizeMode='stretch' />
            </View>

            {/* <ScrollView> */}

            <Text style={styles.text}>Login</Text>

            <Text style={{ marginHorizontal: 15, fontSize: 15, fontWeight: 'bold' }}>Please login your account</Text>



            <View style={{ marginTop: 35, flex: 4, flexDirection: 'column', }}>

                <View style={{ marginHorizontal: 15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'whitesmoke', borderRadius: 10, height: 60, marginTop: 10, borderBottomWidth: 2 }} >
                    <Image style={styles.social_img} source={Images.Email} resizeMode='stretch' />

                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="black"
                        color='black'
                        keyboardType='default' />
                </View>
                <View style={{ marginHorizontal: 15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'whitesmoke', borderRadius: 10, height: 60, marginTop: 20, borderBottomWidth: 2 }} >
                    <Image style={styles.social_img} source={Images.Password} resizeMode='stretch' />

                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="black"
                        color='black'
                        keyboardType='default'
                    />
                </View>
                <Text style={{ marginTop: 15, marginStart: '65%', fontWeight: 'bold', fontSize: 15, color: '#1E88E5' }}
                >Forgot Password</Text>


                <Button btn_text={"Submit"} 
                on_press={() => { navigation.navigate('StackNavigation') }}
                 />

                <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 10 }}>OR</Text>
                <View style={{ flexDirection: 'row', alignContent: 'center', alignSelf: 'center', marginTop: 8 }}>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('ScrollViewAnimation') }}
                    >
                        <Image source={Images.Google} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Exercise')}}
                    >
                        <Image style={{ height: 50, width: 50 }} source={Images.Facebook} resizeMode="stretch" />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: "center" }}>
                    <Text style={{ color: 'black' }}>Don't have an account?</Text>
                    <Text style={{ color: '#1E88E5', fontSize: 15, fontWeight: 'bold' }}
                    >Register</Text>

                </View>




            </View>

        </View>

    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'

    },
    container: {
        marginTop: 50,
        height: 90,
        justifyContent: 'center',
    },
    image: {
        height: 90,
        width: 90,
        alignSelf: 'center',
    },
    text: {
        marginTop: 20,
        marginHorizontal: 15,
        color: '#1E88E5',
        fontSize: 30,
        fontWeight: 'bold'
    },
    input: {
        position: 'relative',
        height: '100%',
        width: '90%',
        fontFamily: 'OpenSans-Medium',
        paddingLeft: 20,
    },
    social_img: {
        height: 25,
        width: 25,
        // marginLeft: 15
    },
    logo: {
        height: 50,
        height: 50,
        resizeMode: 'stretch'
    }

})
export default Login