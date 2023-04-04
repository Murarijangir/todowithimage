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
    Modal,
    StatusBar
} from 'react-native';
import uuid from 'uuid-random';
import { TodosContext } from '../Screens/Curd';
import SearchBar1 from '../Component/SearchBar1'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import DatePicker from 'react-native-date-picker';
import moment from 'moment/moment';
import { CountryPicker } from "react-native-country-codes-picker";
import { Images } from '../Constant/Images';
import Header from '../Component/Header';

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

        else if (!countryCode) {
            alert('Enter CountryCode');
            return
        }
        else if (!datetime) {
            alert('Enter Date');
            return
        }
        else if (!radio) {
            alert('Enter Gender');
            return
        }
        else if (!language) {
            alert('Enter Language');
            return
        }
        else if (!imageSource) {
            alert('Upload Profile Photo');
            return
        }
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

    //Image code
    function selectFile() {
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

        launchImageLibrary(options, (response) => {

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
                    source={{ uri: data.item?.image }}
                    style={{ height: 110, width: 110, borderRadius: 70, }}
                />
            </View>


            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Text style={styles.mainheading}>Name:-{'\n'}Contact:-{'\n'}DOB:-{'\n'}Language:-{'\n'}Gender:-</Text>
                </View>

                <View>
                    <Text style={styles.showText}>{data.item.track} {data.item.text} {data.item.last}{'\n'}
                        {data.item.code} {data.item.mobile}{'\n'}
                        {moment(data.item.dob).format('DD-MM-YYYY')}{'\n'}
                        {data.item.label}{'\n'}
                        {data.item.radio}
                    </Text>
                </View>
            </View>
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
        <View style={styles.mainContainer}>
            <Header
            Name='Todo'
            />
            {/* <StatusBar backgroundColor='#EDEDED' /> */}
            <ScrollView >
              
                <View style={styles.subContainer}>


                    <View style={styles.imageView}>
                        <TouchableOpacity style={styles.imageTouchable}
                            activeOpacity={0.5}
                            value={imageSource}
                            onChangeText={image => setImageSource(image)}
                            onPress={() => {
                                setClicks(!clicks)
                            }}>
                            {imageSource === null ? (
                                <Image source={Images.ProfileOpt} style={styles.selectImage} resizeMode='stretch' />
                            ) : (
                                <Image source={{ uri: imageSource }} style={styles.selectImage} />
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
                                <View style={styles.modelImage}>


                                    <View style={styles.modalConatiner}>
                                        <TouchableOpacity
                                            activeOpacity={0.5}
                                            style={styles.imageButtonStyle}
                                            onPress={() => cameraImage('photo')}
                                        >
                                            <Text style={styles.imagebuttontext}>Camera Image </Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            activeOpacity={0.5}
                                            style={styles.imageButtonStyle}
                                            onPress={() => selectFile('photo')}
                                        >
                                            <Text style={styles.imagebuttontext}>Choose Image</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={styles.modalImageClose}>
                                        <TouchableOpacity
                                            style={styles.ImageClose}
                                            onPress={() => setClicks(!clicks)}>
                                            <Text style={styles.imagebuttontext}>Close</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Modal>
                        ) : null}
                    </View>

                    <View>
                        <View style={[styles.maincont, { flexDirection: 'row', paddingLeft: 0 }]}>
                            <View style={styles.ResView}>
                                <TouchableOpacity
                                    style={styles.ResTouchable}
                                    onPress={() => {
                                        setClicked(!clicked);

                                    }}>
                                    {!options ? <Text style={styles.ResWord}>Res</Text> :
                                        <Text style={styles.ResWord}>{options == '' ? text : options} </Text>
                                    }
                                </TouchableOpacity>

                                {clicked ? (
                                    <Modal
                                        transparent={true}
                                        visible={modalVisible}
                                        onRequestClose={() => {
                                            setModalVisible(!modalVisible);
                                        }}>
                                        <View style={styles.ResModalMain}>
                                            <View style={styles.ResModalSub}>
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
                                                        <Text style={{ fontSize: 20 }} >{option}</Text>
                                                    </TouchableOpacity>
                                                ))}
                                            </View>

                                            <TouchableOpacity
                                                style={styles.ResModalClose}
                                                onPress={() => setClicked(!clicked)}>
                                                <Text style={styles.Resclosebutton}>Close</Text>
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

                        <View style={[styles.maincont, { flexDirection: 'row', paddingLeft: 0 }]}>
                            <TouchableOpacity
                                onPress={() => setShow(true)}
                                style={styles.countryTouchable}
                            >
                                {!countryCode ? <Text style={styles.countryTxt}>Code</Text> :
                                    <Text style={styles.countryTxt}>{countryCode}</Text>
                                }
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
                                style={styles.countryInput}
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
                                style={styles.dateText}
                                value={date ? moment(datetime).format('DD-MM-YYYY') : ''}
                                onChangeText={dob => setDatetime(dob)}
                                placeholder="MM/YY"
                                editable={false}
                            />
                        </TouchableOpacity>

                        <View style={styles.maincont}>
                            <TouchableOpacity
                                style={styles.languageTouchable}
                                onPress={() => {
                                    setClick(!click);
                                }}>
                                {!language ? <Text style={styles.languageText}>Language</Text> :
                                    <Text style={styles.languageText}>{language == '' ? text : language}</Text>
                                }
                            </TouchableOpacity>
                            {click ? (
                                <Modal
                                    transparent={true}
                                    visible={modalV}
                                    onRequestClose={() => {
                                        Alert.alert('Modal has been closed.');
                                        setModalV(!modalV);
                                    }}>
                                    <View style={styles.languageMainModal}>

                                        <View style={styles.languageSubModal}>
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
                                                    <Text style={{ fontSize: 20 }} >{option}</Text>
                                                </TouchableOpacity>
                                            ))}
                                        </View>

                                        <TouchableOpacity
                                            style={styles.languagaeCloseModal}
                                            onPress={() => setClick(!click)}>
                                            <Text style={styles.languageCloseText}>Close</Text>
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


                        <TouchableOpacity style={styles.addTouchable} onPress={handleSubmit} >
                            <Text style={styles.addText}>{buttonTitle}</Text>
                        </TouchableOpacity>
                    </View>


                </View>

                <View style={{ marginTop: 5, paddingHorizontal: 10 }}>
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
    mainContainer: {
        flex: 1,
        marginBottom: 50,
        backgroundColor: '#EDEDED'
    },
    subContainer: {
        // borderWidth: 1,
        marginTop: 7,
        marginHorizontal: 10,
    },
    //common styles
    maincont: {
        justifyContent: 'center',
        height: 50,
        // borderWidth: 1,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginTop: 10,
        marginHorizontal: 10,
        paddingLeft: 10
    },
    input: {
        fontSize: 15,
        color: 'black',
    },
    /////
    imageView: {
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageTouchable: {
        height: 110,
        width: 110,
        borderRadius: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1
    },
    selectImage: {
        height: 110,
        width: 110,
        borderRadius: 55,
    },

    modelImage: {
        alignSelf: 'center',
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 10,
        height: 150,
        marginTop: "50%",
    },
    modalConatiner: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flex: 2, alignItems: 'center',
    },
    modalImageClose: {
        marginHorizontal: 10,
        flex: 1
    },

    TouchableOpacity1: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        position: 'absolute'
    },
    ImageClose: {
        paddingVertical: "4%",
        backgroundColor: "#EDEDED",
        borderRadius: 10,
    },
    imagebuttontext: {
        color: '#337CFF',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15
    },
    imageButtonStyle: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        backgroundColor: 'whitesmoke'
    },

    ResView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    ResModalMain: {
        height: 200,
        alignSelf: 'center',
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 6,
        margin: "50%"
    },
    ResModalSub: {
        padding: 10,
        justifyContent: 'center'
    },
    ResTouchable: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    ResWord: {
        color: 'black',
        fontSize: 15
    },
    ResModalClose: {
        paddingVertical: "4%",
        backgroundColor: 'whitesmoke',
        borderRadius: 10
    },
    Resclosebutton: {
        color: '#337CFF',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15
    },
    buttonStyle: {
        alignItems: 'center',
        // backgroundColor: 'grey',
    },

    ///country code and number style
    TouchableOpacity: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    countryTouchable: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    countryTxt: {
        color: 'black',
        fontSize: 15
    },
    countryInput: {
        flex: 5,
        fontSize: 15
    },
    //date style
    dateText: {
        color: 'black',
        fontSize: 15
    },
    ///language style
    languageTouchable: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    languageText: {
        color: 'black',
        fontSize: 15
    },
    languageMainModal: {
        height: 300,
        alignSelf: 'center',
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: "50%",
    },
    languageSubModal: {
        padding: 10,
        justifyContent: 'center'
    },
    languageCloseText: {
        color: '#337CFF',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15
    },

    ///gender style
    mainHeader: {
        flexDirection: 'row',
        marginTop: 10,
        width: '100%',
    },
    keyItem: {
        marginHorizontal: 10,
        alignItems: 'center',
    },
    Heading: {
        fontSize: 15,
        textTransform: 'capitalize',
        color: 'black',
        fontWeight: 'bold',
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
    ///add button style
    addTouchable: {
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
    //add buuton style
    addText: {
        color: 'white',
        fontSize: 25
    },

    //shoe result style
    rowFront: {
        paddingHorizontal: 10,
        backgroundColor: '#FFF',
        borderWidth: 0.25,
        justifyContent: 'center',
        marginTop: 10,
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
    mainheading: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 22
    },
    showText: {
        color: 'black',
        fontWeight: 'normal',
        fontSize: 15,
        lineHeight: 22
    }

});


