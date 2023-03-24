import React, { useContext, useState } from 'react'
import { SwipeListView } from 'react-native-swipe-list-view';
import {
    ScrollView,
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    TextInput,
    Alert,
    Modal
} from 'react-native';
import uuid from 'uuid-random';
import { TodosContext } from '../Screens/Curd';
import SearchBar1 from '../Component/SearchBar1'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import DatePicker from 'react-native-date-picker';
import moment from 'moment/moment';
import { CountryPicker } from "react-native-country-codes-picker";

export default function TodoList({ text }) {
    const { state, dispatch } = useContext(TodosContext);
    const [todoText, setTodoText] = useState("");
    const [todoLast, setTodoLast] = useState("");
    const [imageSource, setImageSource] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [editTodo, setEditTodo] = useState(null);
    const [searchValue, setSearchValue] = useState();
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(new Date());
    const [datetime, setDatetime] = useState(new Date());
    const [datetimee, setDatetimee] = useState("");
    const [radio, setRadio] = useState(null);
    const [radio1, setRadio1] = useState(null);
    const [show, setShow] = useState(false);
    const [countryCode, setCountryCode] = useState('');
    const [mobile, setMobile] = useState();
    const [mobilerr, setMobilerr] = useState("");
    const [modalVisible, setModalVisible] = useState(true);
    const [clicked, setClicked] = useState(false);
    const [options, setOptions] = useState('Mr.');
    const [modalV, setModalV] = useState(true);
    const [click, setClick] = useState(false);
    const [language, setLanguage] = useState('');
    const [modalVisibl, setModalVisibl] = useState(true);
    const [clicks, setClicks] = useState(false);


    const buttonTitle = editMode ? "Edit" : "Add";

    const handleSubmit = () => {
        if (!todoText.trim()) {
            alert('Enter name');
            return
        }
        else if (!todoLast.trim()) {
            alert('Enter last name');
            return
        }
        else if (!mobile.trim()) {
            alert('Enter contact');
        }

        else if(!countryCode){
            alert('Enter CountryCode');
            return
        }
        else if(!datetime){
            alert('Enter Date');
            return
        }
        else if(!radio){
            alert('Enter Gender');
            return
        }
        else if(!language){
            alert('Enter Language');
            return
        }
        else if(!imageSource){
            alert('Upload Profile Photo');
            return
        }

        // alert('success');

        if (editMode) {
            dispatch({
                type: 'edit', payload: {
                    ...editTodo,
                    image: imageSource,
                    text: todoText,
                    last: todoLast,
                    mobile: mobile,
                    code: countryCode,
                    dob: datetime,
                    radio: radio,
                    track: options,
                    label: language,
                }
            }),
                setEditMode(false)
            setEditTodo(null)
        } else {
            if (
                (todoText.length > 0,
                    todoLast.length > 0,
                    mobile.length > 0)
            ) {
                const newToDo = {
                    id: uuid(),
                    text: todoText,
                    last: todoLast,
                    image: imageSource,
                    dob: datetime,
                    radio: radio,
                    mobile: mobile,
                    code: countryCode,
                    track: options,
                    label: language,
                };
                dispatch({ type: 'add', payload: newToDo })
            }
        }
        setTodoText('');
        setTodoLast('');
        setMobile('');
        setCountryCode('');
        setImageSource('');
        setDatetime('');
        setRadio('');
        setOptions('');
        setLanguage('');
    }



    const deleteRow = (todo) => {
        dispatch({ type: 'delete', payload: todo });
    };



    const editRow = (todo, rowMap) => {
        setTodoText(todo.text)
        setTodoLast(todo.last)
        setImageSource(todo.image)
        setDatetime(todo.dob)
        setRadio(todo.radio)
        setMobile(todo.mobile)
        setCountryCode(todo.code)
        setOptions(todo.track)
        setLanguage(todo.label)
        setEditMode(true)
        setEditTodo(todo)
        if (rowMap[todo.id]) {
            rowMap[todo.id].closeRow();
        }

    };




    
     function selectFile () {

        var options = {
            title: 'Select Image',
            allowsEditing: false,
            quality: 0.9,
            noData: true,
            maxWidth: 1200,
            maxHeight: 1200,
            selcetionLimit: 5,
            mediaType: "photo",
            customButtons: [
                { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
            ],
            storageOptions: {
                skipBackup: true,
                cameraRoll: false
            },
        };

        launchImageLibrary(options, (response)=> {

            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                let source = { uri: response.assets[0].uri };
                setImageSource(source.uri);

                setClicks(!clicks)

            }
        });
    
    }
    
    function cameraImage() {
        var options = {
            title: 'Select Image',
            allowsEditing: false,
            quality: 0.9,
            noData: true,
            maxWidth: 1200,
            maxHeight: 1200,
            mediaType: "photo",
            customButtons: [
                { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
            ],
            storageOptions: {
                skipBackup: true,
                cameraRoll: false
            },
        };

        launchCamera(options, response => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                let source = { uri: response.assets[0].uri };
                setImageSource(source.uri);
                setClicks(!clicks)
            }
        });
    }

    // Search bar
    const searchText = (text) => {
        setSearchValue(text)
        const found = state.todos.filter(element =>
            (element?.last).toLowerCase().includes(text.toLowerCase()) ||
            (element?.text).toLowerCase().includes(text.toLowerCase()) ||
            (element?.mobile).toLowerCase().includes(text.toLowerCase())
        );
        if (found != undefined) {
            setSearch(found)
        }
    }


    const renderItem = data => (
        <View style={styles.rowFront}>
            <View style={{ flexDirection: 'row' }}>

                <Image
                    //its is show in save value
                    source={{ uri: data.item?.image }}

                    style={{ height: 110, width: 110, borderRadius: 70, }}
                />


            </View>
            <Text style={{ color: 'black', fontWeight: 'bold' }}>
                Name:- <Text style={{ color: 'black', fontWeight: 'normal' }}>
                    {data.item.track}  {data.item.text}  {data.item.last}</Text></Text>

            <Text style={{ color: 'black', fontWeight: 'bold' }}>
                Contact:- <Text style={{ color: 'black', fontWeight: 'normal' }}>
                    {data.item.code} {data.item.mobile}</Text></Text>

            <Text style={{ color: 'black', fontWeight: 'bold' }}>
                DOB:- <Text style={{ color: 'black', fontWeight: 'normal' }}>
                    {moment(data.item.dob).format('DD-MM-YYYY')}

                </Text></Text>



            <Text style={{ color: 'black', fontWeight: 'bold' }}>
                Gender:- <Text style={{ color: 'black', fontWeight: 'normal' }}>
                    {data.item.radio}</Text></Text>
            <Text style={{ color: 'black', fontWeight: 'bold' }}>
                Language:- <Text style={{ color: 'black', fontWeight: 'normal' }}>
                    {data.item.label}</Text></Text>
        </View>
    );


    const renderHiddenItem = (data, rowMap) => {
        const createTwoButtonAlert = () =>

            Alert.alert('', 'Are you sure you want to delete', [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => deleteRow(data.item) },
            ]);
        const createTwoButtonAler = () =>

            Alert.alert('', 'Are you sure you want to Edit', [
                {
                    text: 'NO',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'YES', onPress: () => editRow(data.item, rowMap) },
            ]);



        return (
            <View style={styles.rowBack}>
                <TouchableOpacity
                    style={{ backgroundColor: 'black', }}
                    onPress={() => createTwoButtonAler()}>
                    <Text style={{ color: '#FFF' }}>Edit</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.backRightBtn]}
                    onPress={() => createTwoButtonAlert()}
                >


                    <Text style={{ color: '#FFF' }} >Delete</Text>
                </TouchableOpacity>
            </View>
        )
    };


    return (
        <View style={{ flex: 1, }}>
            <ScrollView>
                <View style={{ borderWidth: 1, marginTop: 7, marginHorizontal: 10, }}>


                    <View style={{ height: 120, justifyContent: 'center', alignItems: 'center', }}>
                        <TouchableOpacity style={{ height: 110, width: 110, borderRadius: 55, alignItems: 'center', justifyContent: 'center', borderWidth: 1 }}
                            activeOpacity={0.5}
                            // onPress={selectFile}
                            // onPress={cameraImage}
                            value={imageSource}
                            onChangeText={image => setImageSource(image)}
                            onPress={() => {
                                setClicks(!clicks)
                            }}

                        >

                            {imageSource === null ? (
                                <Image
                                    source={require('../Images/profile.png')}
                                    style={{ height: 110, width: 110, borderRadius: 55 }}
                                    resizeMode='stretch'
                                />
                            ) : (
                                <Image

                                    source={{ uri: imageSource }}
                                    style={{ height: 110, width: 110, borderRadius: 55, alignSelf: 'center', }}
                                />
                            )}
                        </TouchableOpacity>
                        {clicks ? (
                            <Modal
                                transparent={true}
                                visible={modalVisibl}
                                onRequestClose={() => {
                                    Alert.alert('Modal has been closed.');
                                    setModalVisibl(!modalVisibl);
                                }}>

                                <TouchableOpacity style={styles.TouchableOpacity1} onPress={() => setClicks(!clicks)}>
                                </TouchableOpacity>
                                <View style={{
                                    alignSelf: 'center',
                                    width: '90%',
                                    backgroundColor: '#fff',
                                    borderRadius: 10,
                                    height: 150,
                                    marginTop: "50%",
                                }}>


                                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flex: 2, alignItems: 'center', }}>

                                        <TouchableOpacity
                                            activeOpacity={0.5}
                                            style={styles.imageButtonStyle}
                                            onPress={() => cameraImage('photo')}>

                                            <Text style={styles.textStyle}>Camera Image
                                            </Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            activeOpacity={0.5}
                                            style={styles.imageButtonStyle}
                                            onPress={() => selectFile('photo')}>
                                            <Text style={styles.textStyle}>Choose Image</Text>
                                        </TouchableOpacity>
                                    </View>




                                    <View style={{ marginHorizontal: 10, flex: 1 }}>
                                        <TouchableOpacity
                                            style={[styles.button]}
                                            onPress={() => setClicks(!clicks)}>
                                            <Text style={styles.textStyle}>Close</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>


                            </Modal>
                        ) : null
                        }
                    </View>

                    <View>


                        <View style={{
                            justifyContent: 'center',
                            height: 50,
                            borderWidth: 1,
                            borderRadius: 10,
                            marginTop: 10,
                            marginHorizontal: 10,
                            flexDirection: 'row'
                        }}>


                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                                <TouchableOpacity
                                    style={styles.TouchableOpacity}
                                    onPress={() => {
                                        setClicked(!clicked);

                                    }}>
                                    {!options ? <Text style={{ color: 'black' }}>Res</Text> :
                                        <Text style={{ color: 'black', fontSize: 15 }}>
                                            {options == '' ? text : options}
                                        </Text>}
                                </TouchableOpacity>

                                {clicked ? (
                                    <Modal
                                        transparent={true}
                                        visible={modalVisible}
                                        onRequestClose={() => {
                                            Alert.alert('Modal has been closed.');
                                            setModalVisible(!modalVisible);
                                        }}>
                                        <View style={styles.optionss}>
                                            <View style={{ padding: 10, justifyContent: 'center' }}>

                                                {['Mr.', 'Mrs.'].map(option => (
                                                    <TouchableOpacity key={option} style={{ borderBottomWidth: 1 }}
                                                        onPress={() => {
                                                            setOptions(option);
                                                            setClicked(!clicked);
                                                            setModalVisible(true)
                                                        }}
                                                        value={options}
                                                        onChangeText={track => setOptions(track)}
                                                    >
                                                        <Text style={{ fontSize: 20 }} >
                                                            {option}
                                                        </Text>
                                                    </TouchableOpacity>
                                                ))}

                                            </View>

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


                            <View style={{ flex: 6 }}>

                                <TextInput
                                    placeholder="First Name"
                                    onChangeText={text => setTodoText(text.trim())}
                                    value={todoText}
                                    style={styles.input}
                                    placeholderTextColor="black"
                                />
                            </View >

                        </View>

                        <View style={styles.maincont}>
                            <TextInput
                                placeholder="Last Name"
                                onChangeText={last => setTodoLast(last.trim())}
                                value={todoLast}
                                style={styles.input}
                                placeholderTextColor="black"
                            />
                        </View >

                        <View style={{
                            flexDirection: 'row', height: 50,
                            borderWidth: 1,
                            borderRadius: 10,
                            marginTop: 10,
                            marginHorizontal: 10,
                        }}>
                            <TouchableOpacity
                                onPress={() => setShow(true)}
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                {!countryCode ? <Text style={{ color: 'black', fontSize: 15 }}>Code</Text> :
                                    <Text style={{ color: 'black', fontSize: 15 }}>{countryCode}
                                    </Text>}
                            </TouchableOpacity>
                            <CountryPicker
                                show={show}
                                value={countryCode}
                                onChangeText={code => { setCountryCode(code) }}
                                pickerButtonOnPress={(item) => {
                                    setCountryCode(item.dial_code);
                                    setShow(false);
                                }}
                            />
                            <TextInput
                                maxLength={10}
                                value={mobile}
                                onChangeText={mobile => {
                                    setMobile(mobile), setMobilerr();
                                }}
                                style={{ flex: 5, fontSize: 15 }}
                                placeholder="Mobile Number"
                                keyboardType="numeric"
                                placeholderTextColor='#000'
                            />
                        </View>


                        <TouchableOpacity
                            onPress={() => setOpen(true)}
                            style={styles.maincont}
                        >
                            <DatePicker
                                maximumDate={date}
                                modal
                                open={open}
                                date={date}
                                mode={'date'}
                                onConfirm={date => {
                                    setDatetime(date);
                                    setDatetimee();
                                    setTimeout(() => 50000);
                                    setOpen(false);
                                }}
                                onCancel={() => {
                                    setOpen(false);
                                }}
                            />
                            <TextInput
                                style={{ color: 'black', fontSize: 15 }}
                                value={date ? moment(datetime).format('DD-MM-YYYY') : ''}
                                onChangeText={dob => setDatetime(dob)}
                                placeholder="MM/YY"
                                editable={false}
                            />
                        </TouchableOpacity>




                        <View style={styles.maincont}>

                            <TouchableOpacity
                                style={styles.TouchableOpacity}
                                onPress={() => {
                                    setClick(!click);

                                }}>
                                {!language ? <Text style={{ color: 'black' }}>Language</Text> :
                                    <Text style={{ color: 'black', fontSize: 15 }}>
                                        {language == '' ? text : language}
                                    </Text>}
                            </TouchableOpacity>

                            {click ? (
                                <Modal
                                    transparent={true}
                                    visible={modalV}
                                    onRequestClose={() => {
                                        Alert.alert('Modal has been closed.');
                                        setModalV(!modalV);
                                    }}>
                                    <View style={styles.component}>
                                        <View style={{ padding: 10, justifyContent: 'center' }}>

                                            {['Hindi', 'English', 'Gujrati', 'French', 'Marathi', 'Germani', 'Thai', 'Chinees'].map(option => (
                                                <TouchableOpacity key={option} style={{ borderBottomWidth: 1 }}
                                                    onPress={() => {
                                                        setLanguage(option);
                                                        setClick(!click);
                                                        setModalV(true)
                                                    }}
                                                    value={options}
                                                    onChangeText={label => setLanguage(label)}
                                                >
                                                    <Text style={{ fontSize: 20 }} >
                                                        {option}
                                                    </Text>
                                                </TouchableOpacity>
                                            ))}

                                        </View>

                                        <TouchableOpacity
                                            style={[styles.button]}
                                            onPress={() => setClick(!click)}>
                                            <Text style={styles.textStyle}>Close</Text>
                                        </TouchableOpacity>

                                    </View>
                                </Modal>
                            ) : null
                            }
                        </View>

                        <View style={styles.mainHeader}>
                            {['Female', 'Male', 'Other'].map(gender => (
                                <View key={gender} style={styles.keyItem}>
                                    <Text
                                        style={styles.Heading}
                                        onChangeText={radio => {
                                            setRadio(radio), setRadio1(gender);
                                        }}>
                                        {gender}
                                    </Text>
                                    <TouchableOpacity
                                        style={styles.outter}
                                        onPress={() => setRadio(gender)}>
                                        {radio === gender && <View style={styles.inner} />}
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>


                        <TouchableOpacity style={styles.cont} onPress={handleSubmit} >
                            <Text style={{ color: 'white', fontSize: 25 }}>{buttonTitle}</Text>
                        </TouchableOpacity>
                    </View>


                </View>

                <View style={{ marginTop: 5 }}>
                    <SearchBar1
                        value={search}
                        onChangeText={(search) => {
                            searchText(search)
                        }} />
                </View>
                <SwipeListView

                    data={searchValue ? search : state.todos}
                    renderItem={renderItem}
                    renderHiddenItem={renderHiddenItem}
                    leftOpenValue={75}
                    rightOpenValue={-75}
                    initialNumToRender={2}
                />
            </ScrollView >

        </View >

    );
}
const styles = StyleSheet.create({
    rowFront: {
        paddingHorizontal: 10,
        // alignItems: 'center',
        backgroundColor: '#FFF',
        borderWidth: 0.25,
        justifyContent: 'center',
        // height: 200,
        marginTop: 10,

    },
    TouchableOpacity1: {
        // flex: 1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        position: 'absolute'
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        marginTop: 10
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
        backgroundColor: 'red',
        right: 0
    },
    input: {
        fontSize: 15,
        color: 'black',
    },
    maincont: {
        justifyContent: 'center',
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
        marginHorizontal: 10,
        paddingLeft: 10
    },
    cont: {
        width: '40%',
        height: 50,
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'grey'
    },
    buttonStyle: {
        alignItems: 'center',
        backgroundColor: 'grey',
    },

    input1: {
        paddingHorizontal: 10,
        marginTop: 20,
        borderWidth: 1,
        width: '100%',
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
    },
    mainHeader: {
        flexDirection: 'row',
        marginTop: 10,
        width: '100%',
    },
    keyItem: {
        marginHorizontal: 10,
        alignItems: 'center',
    },
    outter: {
        width: 25,
        height: 25,
        borderWidth: 2,
        borderRadius: 13,
        borderColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inner: {
        width: 14,
        height: 14,
        backgroundColor: 'blue',
        borderRadius: 10,
    },
    Heading: {
        fontSize: 15,
        textTransform: 'capitalize',
        color: 'black',
        fontWeight: 'bold',
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
    optionss: {
        // elevation: 10,
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
        borderRadius: 10
    },
    textStyle: {
        color: '#337CFF',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15
    },


    component: {
        height: 300,
        alignSelf: 'center',
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: "50%",

    },
    imageButtonStyle: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        backgroundColor: 'whitesmoke'

    },

    button: {
        paddingVertical: "4%",
        // backgroundColor: "#F2F1F3",
        backgroundColor: 'whitesmoke',
        borderRadius: 10
    },
    textStyle: {
        color: '#337CFF',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15
    },
});


