


import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Home = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [address, setAddress] = useState();

    const [data, setData] = useState(email);
    const [data1, setData1] = useState(password);
    const [data2, setData2] = useState(address);

    const handleSubmit = (item) => {
        navigation.navigate('SecondPage', {
            item: item,
            key: data,
            key1: data1,
            key2: data2,

        });
        setAddress();
        setEmail();
        setPassword();
    };

    // const handleSubmit1 = () => {
    //     setAddress();
    //     setEmail();
    //     setPassword();
    // }
    console.log('ram', handleSubmit);

    return (
        <View>
            <TextInput
                placeholder='enter name'
                style={{ backgroundColor: 'red', fontSize: 15, color: 'yellow' }}
                onChangeText={(value) => {
                    setEmail(value);
                    setData(value);
                }}
                value={email}
            />
            <TextInput
                placeholder='enter name'
                style={{ backgroundColor: 'red', fontSize: 15, color: 'yellow' }}
                onChangeText={(value) => {
                    setPassword(value);
                    setData1(value);
                }
                }
                value={password}
            />
            <TextInput
                placeholder='enter name'
                style={{ backgroundColor: 'red', fontSize: 15, color: 'yellow' }}
                onChangeText={(value) => {
                    setAddress(value);
                    setData2(value);
                }
                }
                value={address}
            />

            <Button title='press here'
                onPress={() => { handleSubmit(data,data1,data2) }} />

            <Text>{data}</Text>
            <Text>{data1}</Text>
            <Text>{data2}</Text> 



        </View>
    )
}

export default Home;

const styles = StyleSheet.create({})