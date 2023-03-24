import { View, Text, TouchableOpacity ,StyleSheet} from 'react-native'
import React from 'react'

const Button = ({on_press,btn_text}) => {
  return (
    <TouchableOpacity style={styles.Touch} onPress={on_press}>
<Text style={styles.text}  >{btn_text}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
Touch:{
    justifyContent:'center',
    borderWidth:1,
    marginTop:30,
    padding:10,
    backgroundColor:'#1E88E5',
    borderColor:'#1E88E5',
    borderRadius:10,
    width:'65%',
    alignSelf:'center',
},
text:{
    color:'white',
    fontSize:20,
    textAlign:'center',
    fontWeight:'bold',
    
}
})
export default Button