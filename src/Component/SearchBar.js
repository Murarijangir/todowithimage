import { View, Text, TextInput, StyleSheet} from 'react-native'
import React from 'react'

const SearchBar = (props) => {
  return (
   <View style={styles.container}>
    <TextInput
    placeholder="Search"
    style={styles.input}
    value={props.searchText}
    onChangeText={(text)=>props.setSearchText(text)}/>
   </View>
  )
}
const styles = StyleSheet.create({
  container:{
    margin:10
  },
  input:{
    backgroundColor:'#fff',
    padding:10,
    color:'black',
    borderWidth:1,
    borderRadius:15    
  } 
})
export default SearchBar;