import { View, Text, Switch, TouchableOpacity, Dimensions, StatusBar, ScrollView } from 'react-native';
import React, { useState } from 'react';


const FULL_WIDTH = Dimensions.get("screen").width
const FULL_HEIGHT = Dimensions.get("screen").height


export default function Cal() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [result, setResult] = useState('');

  const colors = {
    dark: '#22252D',
    dark1: '#292B36',
    dark2: '#272B33',
    light: '#FFF',
    light1: 'rgb(220, 220, 220)',
    light2: '#F7F7F7',
  };
  const calculate = (title) => {
    if (title == 'C') {
      setResult('')
    } else if (title == 'DL') {
      setResult(result.substring(0, result.length - 1));
    } else if (title == '=') {
      const ans = Number(eval(result).toFixed(3)).toString();
      setResult(ans);
    } 
    else {
      setResult(result + title);
    }
  }
  const Btn = ({ title, type }) => (
    <TouchableOpacity
      onPress={() => calculate(title)}
      style={{
        backgroundColor: getColor(colors.light1, colors.dark2),
        height: 60,
        width: 60,
        borderRadius: 10,
        margin: 14,
        padding: 10,
        elevation: 15
      }}>
      <Text
        style={{
          fontSize: 27,
          textAlign: 'center',
          textAlignVertical: 'center',
          color: getBtnColor(type)
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  const getBtnColor = (type) => {
    if (type == 'top') {
      return '#35FBD6'
    } else if (type == 'right') {
      return '#EB6363'
    }
    return getColor(colors.dark, colors.light);
  }

  const getColor = (light, dark) => (darkTheme ? dark : light);

  return (
    <View  style={{flex:1, backgroundColor: getColor(colors.light1, colors.dark1),}}>
    <View
      style={{
        flex:1.5,
        backgroundColor: getColor(colors.light, colors.dark),
      }}>
      <Switch
        value={darkTheme}
        onValueChange={() => setDarkTheme(!darkTheme)}
        trackColor={{ true: colors.light2, false: colors.dark2 }}
        thumbColor={getColor(colors.dark, colors.light)}
      />
      <Text
        style={{
          fontSize: 40,
          flex:1,
          textAlign: 'right',
          paddingRight: 20,
          color: getColor(colors.dark, colors.light),
          marginTop: 160,
          paddingBottom: 20
        }}>
        {result}
      </Text>
    </View>

      <View style={{flex:2, flexDirection: "row", flexWrap: 'wrap', justifyContent: "center", backgroundColor: getColor(colors.light1, colors.dark1), elevation: 7, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
        <Btn title="C" type="top" />
        <Btn title="DL" type="top" />
        <Btn title="/" type="top" />
        <Btn title="%" type="top" />
        <Btn title="7" type="number" />
        <Btn title="8" type="number" />
        <Btn title="9" type="number" />
        <Btn title="*" type="right" />
        <Btn title="4" type="number" />
        <Btn title="5" type="number" />
        <Btn title="6" type="number" />
        <Btn title="+" type="right" />
        <Btn title="1" type="number" />
        <Btn title="2" type="number" />
        <Btn title="3" type="number" />
        <Btn title="-" type="right" />
        <Btn title="00" type="number" />
        <Btn title="0" type="number" />
        <Btn title="." type="number" />
        <Btn title="=" type="right" />
      </View>
    </View>
  );
}