import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
    Modal,
    StyleSheet,
    Alert
} from 'react-native';
import React, { useRef, useState } from 'react';


const CustomLanguage = ({
    text = {},
    datas,
}) => {

    const [modalVisible, setModalVisible] = useState(true);
    const [search, setSearch] = useState('');
    const [clicked, setClicked] = useState(false);
    const [data, setData] = useState(datas);
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [searchValue, setSearchValue] = useState()



    const searchRef = useRef();
    const onSearch = search => {
        if (search !== '') {
            let tempData = data.filter(item => {
                return item.Language.toLowerCase().indexOf(search.toLowerCase()) > -1;
            });
            setData(tempData);
        } else {
            setData(datas);

        }
    };
    return (
        <View style={{ flex: 1, }}>
            <TouchableOpacity
                style={styles.TouchableOpacity}
                onPress={() => {
                    setClicked(!clicked);
                }}>

                <Text style={{ color: 'black', }}>
                    {selectedLanguage == '' ? text : selectedLanguage}
                </Text>


            </TouchableOpacity>



            {clicked ? (
                <Modal
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>


                    <View style={styles.component}>
                        <TextInput
                            placeholder="Search.."
                            value={search}
                            ref={searchRef}
                            onChangeText={txt => {
                                onSearch(txt);
                                setSearch(txt);
                            }}


                            style={styles.search}
                        />
                        <FlatList
                            data={datas}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity
                                        style={{
                                            paddingLeft:20,
                                            justifyContent: 'center',
                                            borderBottomWidth: 1,
                                            borderColor: '#8e8e8e',
                                        }}
                                        onPress={() => {
                                            setSelectedLanguage(item.Language);
                                            setClicked(!clicked);
                                            onSearch('');
                                            setSearch('');
                                            setModalVisible(true)
                                        }}>
                                        <Text style={{ fontWeight: '600', color: '#000000', fontSize: 20 }}>{item.Language}</Text>

                                    </TouchableOpacity>
                                );
                            }}
                        />


                        <TouchableOpacity
                            style={[styles.button]}
                            onPress={() => setClicked(!clicked)}>
                            <Text style={styles.textStyle}>Close</Text>
                        </TouchableOpacity>

                    </View>
                </Modal>
            ) : null
            }
        </View>
    );
};



export default CustomLanguage;

const styles = StyleSheet.create({

    search: {
        width: '90%',
        height: 50,
        alignSelf: 'center',
        borderWidth: 0.2,
        borderColor: '#8e8e8e',
        borderRadius: 7,
        marginTop: 10,
        paddingLeft: 20,
    },
    TouchableOpacity: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // paddingHorizontal: 10
    },
    updateImage: {
        width: 13,
        height: 8,
        marginEnd: 21
    },
    component: {
        elevation: 10,
        height: 300,
        alignSelf: 'center',
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 6,
        margin: "50%"
    },
    button: {
        paddingHorizontal: "20%",
        paddingVertical: "4%",
        backgroundColor: "#F2F1F3",
        borderRadius:10
    },
    textStyle: {
        color: '#337CFF',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize:15
    },
  
   

})


