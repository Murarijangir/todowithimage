// import { Modal, StyleSheet, Text, TouchableOpacity, View, Dimensions, TextInput } from 'react-native'
// import React, { useState } from 'react'
// import { Calendar, Agenda } from 'react-native-calendars';
// const FULL_WIDTH = Dimensions.get('screen').width

// const CalanderPicker = ({navigation}) => {
//     const [date, setDate] = useState('');
//     const [title, setTitle] = useState('');
//     const [note, setNote] = useState('');
//     const [des, setDes] = useState('');

//     // const [result, setResult] = useState();

//     // const [dates, setDates] = useState(date);
//     // const [notes, setNotes] = useState(note);
//     // const [description, setDescription] = useState(des);
//     // const [titles, setTitles] = useState(title);



//     const [showModal, setShowModal] = useState(false);
//     const [modalVisible, setModalVisible] = useState(true)

//     // const handleSubmit = ({data}) => {
//     //     // setDate('');
//     //     setDes();
//     //     setTitle('');
//     //     setNote('')

//     // }

//     const handleSubmit = (item) => {
//         navigation.navigate('SecondPage', {
//             item: item,
//             key: date,
//             key1:title,
//             key2:note,
//             key3:des,

//         })
//     }


//     console.log('====/....>', date)
//     const addZero = (a) => {
//         if (a < 10 && a > 0) {
//             return '0' + a.toString();
//         } else {
//             return a;
//         }
//     }

//     const getCurrentDate = () => {
//         var date = new Date().getDate();
//         var month = new Date().getMonth() + 1;
//         var year = new Date().getFullYear();
//         return year + '-' + addZero(month) + '-' + addZero(date);
//     }
//     const getMinDate = () => {
//         var date = new Date().getDate();
//         var month = new Date().getMonth() + 1;
//         var year = new Date().getFullYear();
//         return year + '-' + addZero(month) + '-' + addZero(date);
//     }

//     return (
//         <View style={{ flex: 1, backgroundColor: '#FFF' }}>


//             <View style={{ marginTop: 15, flex: 4 }}>
         
//                  <Calendar
//                     current={getCurrentDate().toString()}
//                     minDate={getMinDate().toString()}
//                     maxDate={"2025-12-31"}

//                     onDayPress={day => {
//                         setDate(day.dateString),
//                             setShowModal(!showModal)

//                     }}
//                     hideExtraDays={true}
//                     markedDates={{
//                         '2023-03-25': { selected: true, marked: true, selectedColor: 'blue', text: 'holi' },
//                         '2023-03-26': { selected: true, marked: true, selectedColor: 'red' },
//                         '2023-03-20': { selected: true, marked: true, selectedColor: 'green' },
//                         '2023-03-31': { selected: true, marked: true, selectedColor: 'pink' },
//                     }}
//                     monthFormat={'MMMM YYYY'}
//                     enableSwipeMonths={true}
//                 /> 

//             </View>
//             <View style={{ flex: 2 }}>

//                 <Text style={{ color: 'black', fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>Date: {data.dates}</Text>
//                 <Text style={{ color: 'black', fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>Title: {data.titles}</Text>
//                 <Text style={{ color: 'black', fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>Note: {data.notes}</Text>
//                 <Text style={{ color: 'black', fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>Description: {data.description}</Text>

//             </View>


 
//             <TouchableOpacity style={{ borderWidth: 1, alignItems: 'center', width: 60, borderRadius: 20, backgroundColor: '#EFEFEF', alignSelf: 'flex-end', marginRight: 15, }}
//                 onPress={() => {
//                     setShowModal(!showModal)
//                 }}
//             >
//                 <Text style={{ color: '#000', fontSize: 40 }}>+</Text>
//             </TouchableOpacity> 
//             {showModal ? (
//                 <Modal
//                     transparent={true}
//                     visible={modalVisible}
//                     onRequestClose={() => {
//                         setModalVisible(!modalVisible);
//                     }}>
//                     <TouchableOpacity
//                         style={styles.TouchableOpacity1}
//                         onPress={() => setShowModal(!showModal)}>
//                     </TouchableOpacity>

//                     <View style={styles.modalView}>
//                         <TextInput
//                             style={styles.textInput}
//                             placeholder="Enter Event Title"
//                             placeholderTextColor='#000'
//                             value={date}
//                             onPress={day => {
//                                 setDate(day.dateString);
//                             }}
//                         />
//                         <TextInput
//                             style={styles.textInput}
//                             placeholder="Enter Event Title"
//                             placeholderTextColor='#000'
//                             value={title}
//                             onChangeText={tit => {
//                                 setTitle(tit);
//                             }}
//                         />
//                         <TextInput
//                             style={styles.textInput}
//                             placeholderTextColor='#000'

//                             placeholder="Enter Note"
//                             value={note}
//                             onChangeText={value => {
//                                 setNote(value);
//                             }}
//                         />
//                         <TextInput
//                             style={styles.textInput}
//                             placeholderTextColor='#000'
//                             placeholder="Enter Description"
//                             value={des}
//                             onChangeText={txt => {
//                                 setDes(txt);
//                             }}
//                         />

//                         <View style={styles.closeButton}>
//                             <TouchableOpacity
//                                 style={[styles.button]}
//                                 onPress={() =>handleSubmit(title,note,des)}


//                             >
//                                 <Text style={styles.textStyle}>SUBMIT</Text>
//                             </TouchableOpacity>
//                         </View>
//                     </View>
//                 </Modal>
//             ) : null
//             }


//         </View>
//     )
// }

// export default CalanderPicker

// const styles = StyleSheet.create({
//     textInput: { borderWidth: 1, backgroundColor: 'whitesmoke', marginTop: 15, marginHorizontal: 5, borderRadius: 10, paddingHorizontal: 20 },
//     viewBox1: {
//         paddingVertical: 25,
//         width: FULL_WIDTH * 0.70,
//         borderRadius: 10,
//         alignItems: 'center',
//         marginTop: 20,
//         backgroundColor: '#EDEDED',
//         alignSelf: 'center',
//         flex: 1
//     },
//     modalView: {
//         alignSelf: 'center',
//         width: '90%',
//         backgroundColor: '#fff',
//         borderRadius: 10,
//         height: 400,
//         marginTop: "50%",



//     }, TouchableOpacity1: {
//         top: 0,
//         bottom: 0,
//         left: 0,
//         right: 0,
//         backgroundColor: 'rgba(0,0,0,0.6)',
//         position: 'absolute'
//     },

//     modalButton: {
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         justifyContent: 'space-evenly',
//         flex: 2,
//         alignItems: 'center'
//     },
//     imageButtonStyle: {
//         borderWidth: 1,
//         borderRadius: 10,
//         padding: 15,
//         backgroundColor: 'whitesmoke',
//     },
//     textStyle: {
//         color: 'orange',
//         fontWeight: 'bold',
//         textAlign: 'center',
//         fontSize: 15
//     },
//     closeButton: {
//         marginHorizontal: 80,
//         // flex: 1,
//         marginTop: 30
//     },
//     button: {
//         paddingVertical: "4%",
//         backgroundColor: 'whitesmoke',
//         borderRadius: 10,
//         borderWidth: 1
//     },
// })

// import {View, StyleSheet, Text, TouchableOpacity, Platform} from 'react-native';
// import {Agenda} from 'react-native-calendars';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import React,{useEffect, useState} from "react";
// import {addDays, format} from 'date-fns';

// // import {Button} from "../../components/Button"
// // import {Modal} from "../../components/Modal"


// export default function CalendarView() {


//     const [isModalVisible, setIsModalVisible] = useState(false);
//     const handleModal = () => setIsModalVisible(() => !isModalVisible);

//     return (
//         <View style={styles.container}>
//             <Agenda
//                     style={styles.calendarWrapper}
//                     scrollEnabled={true}
//                     theme={{
//                         // calendarBackground: '#000000'
//                         todayTextColor: '#00adf5',
//                     }}>
//             </Agenda>

//             <View style={styles.absolute}
//                   behavior={Platform.OS === "ios" ? "padding" : "height"}>
//                 {/* <Button onPress={handleModal}/>
//                 <Modal isVisible={isModalVisible}>
//                     <Modal.Container>
//                         <Modal.Header title="Placeholder"/>
//                         <Modal.Body>
//                             <Text style={styles.text}>Placeholder Text</Text>
//                         </Modal.Body>
//                         <Modal.Footer>
//                             <Button onPress={handleModal}/>
//                         </Modal.Footer>
//                     </Modal.Container>
//                 </Modal> */}
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     absolute: {
//       position: 'absolute',
//         bottom: 80,
//         right: 20
//     },
//     container: {
//         position: 'static',
//         flex: 1,
//         backgroundColor: '#E8EAED',
//     },
//     calendarWrapper: {},
//     items: {},
//     dayPressColor: {
//         backgroundColor: '#000000'
//     },
//     itemContainer: {
//         backgroundColor: 'white',
//         margin: 5,
//         borderRadius: 15,
//         justifyContent: 'center',
//         alignItems: 'center',
//         flex: 1,
//     },
//     text: {
//         fontSize: 16,
//         fontWeight: "400",
//         textAlign: "center",
//     },

// })

import React, {useState} from 'react';
import {Agenda} from 'react-native-calendars';

// States

const CalanderPicker =()=>{


const [events, setEvents] = useState({});
const [marksDate, setMarksDate] = useState({});
const [refreshCalender, setRefreshCalender] = useState(false);

// On Add Function
const onAddEventSubmit = () => {
    setRefreshCalender(true);
    let items = events;
    let mark = {};
    let eventDetails = {
        date: "2022-02-23", // Modal Value
        title: "Your Event Title" // Modal Value
    }

    if (!items[eventDetails.date]) {
        items[eventDetails.date] = [];
    }

    items[eventDetails.date].push(eventDetails);


    mark[eventDetails.date] = {
        customStyles: {
          container: {
            backgroundColor: '#0f0',
          },
          text: {
            color: 'white',
            fontWeight: 'bold',
          },
        },
    };

    setEvents(items);
    setMarksDate(mark);
    setRefreshCalender(false);
}

return(

<Agenda
    items={events}
    // loadItemsForMonth={loadItems} // Function
    refreshing={refreshCalender}
    renderItem={(item) => {
        return (
            <View>
                <Text>{item.title}</Text>
            </View>
        )
    }}
    markingType={'custom'}
    markedDates={marksDate}
    // ..other props
/>
)
}


export default CalanderPicker;