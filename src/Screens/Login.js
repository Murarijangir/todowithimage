import { View, Text, StatusBar, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Button from '../Component/Button'
const Login = ({ navigation }) => {
    return (
        <ScrollView>

        <View style={styles.mainContainer}>
            <StatusBar barStyle='dark-content' backgroundColor='white' />
            <View style={styles.container}>
                <Image style={styles.image} source={require('../Images/profile.jpeg')} resizeMode='stretch' />
            </View>

            {/* <ScrollView> */}

            <Text style={styles.text}>Login</Text>

            <Text style={{ marginHorizontal: 15, fontSize: 15, fontWeight: 'bold' }}>Please login your account</Text>



            <View style={{ marginTop: 35, flex: 4, flexDirection: 'column', }}>

                <View style={{ marginHorizontal: 15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'whitesmoke', borderRadius: 10, height: 60, marginTop: 10, borderBottomWidth: 2 }} >
                    <Image style={styles.social_img} source={require('../Images/Email.jpg')} resizeMode='stretch' />

                    <TextInput
                        style={styles.input} placeholder="Email"
                        placeholderTextColor="black"
                        color='black'
                        keyboardType='default' />
                </View>
                <View style={{ marginHorizontal: 15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'whitesmoke', borderRadius: 10, height: 60, marginTop: 20, borderBottomWidth: 2 }} >
                    <Image style={styles.social_img} source={require('../Images/Pass.jpg')} resizeMode='stretch' />

                    <TextInput
                        style={styles.input} placeholder="Password"
                        placeholderTextColor="black"
                        color='black'
                        keyboardType='default'
                    />
                </View>
                <Text style={{ marginTop: 15, marginStart: '65%', fontWeight: 'bold', fontSize: 15, color: '#1E88E5' }}
                    onPress={() => { navigation.navigate('CalanderPicker') }}
                >Forgot Password</Text>


                <Button btn_text={"Submit"} on_press={() => { navigation.navigate('Curd') }} />


                <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 10 }}>OR</Text>
                <View style={{ flexDirection: 'row', alignContent: 'center', alignSelf: 'center', marginTop: 8 }}>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('ImagePickers') }}

                    >
                        <Image source={require('../Images/google_icon.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('FlatImage') }}
                    >
                        <Image style={{ height: 50, width: 50 }} source={require('../Images/facebook_icon.png')} resizeMode="stretch" />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: "center" }}>
                    <Text style={{ color: 'black' }}>Don't have an account?</Text>
                    <Text style={{ color: '#1E88E5', fontSize: 15, fontWeight: 'bold' }}
                        onPress={() => { navigation.navigate('Form') }}>Register</Text>




                </View>

<View style={{paddingVertical:20,alignItems:'center'}}>
<TouchableOpacity style={{backgroundColor:'#337CFF',paddingVertical:10,width:130,alignItems:'center'}}

onPress={()=>{navigation.navigate('FlatImage')}}

><Text style={{color:'white'}}>GoogleMap</Text></TouchableOpacity>

<TouchableOpacity
onPress={()=>{navigation.navigate('ImagePickers')}}
style={{backgroundColor:'#337CFF',paddingVertical:10,marginTop:10,alignItems:'center',width:130}}><Text  style={{color:'white'}}>ImagesANDVideo</Text></TouchableOpacity>

<TouchableOpacity
onPress={()=>{navigation.navigate('Calculator')}}
style={{backgroundColor:'#337CFF',paddingVertical:10,marginTop:10,alignItems:'center',width:130}}><Text  style={{color:'white'}}>Calculator</Text></TouchableOpacity>

</View>


            </View>

        </View>
        </ScrollView>

    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'

    },
    container: {
        height: 90,
        justifyContent: 'center',
    },
    image: {
        height: 90,
        width: 90,
        alignSelf: 'center',
        // marginTop:20
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