


import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


import React, { useState } from 'react'

import { CountryPicker } from "react-native-country-codes-picker";

export default function App() {
    const [show, setShow] = useState(false);
    const [countryCode, setCountryCode] = useState('');
    const [code, setCode] = useState('');
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => setShow(true)}
                style={{
                    // borderWidth: 1,
                    alignItems: 'center'
                }}
            >
                    <Text>code</Text>
                    <Text style={{color: 'blue',fontSize: 15}}>
                        {countryCode}
                    </Text>
            </TouchableOpacity>

            <CountryPicker
                show={show}
                pickerButtonOnPress={(item) => {
                    setCountryCode(item.dial_code);
                    setShow(false);
                }}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})






