import {Modal, StyleSheet, Text, TouchableOpacity, View, Dimensions, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Calendar, Agenda } from 'react-native-calendars';
import { selectedDayTextColor } from 'react-native-calendars/src/style';
// import Modal from 'react-native-modal';
const FULL_WIDTH = Dimensions.get('screen').width

const CalanderPicker = ({ navigation }) => {
    const [date, setDate] = useState();
    const [title, setTitle] = useState();
    const [note, setNote] = useState();
    const [des, setDes] = useState();
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const [tooltipText, setTooltipText] = useState('njbfnmbsfbs');

    const handleSubmit = (item) => {
        navigation.navigate('SecondPage', {
            item: item,
            key: date,
            key1: title,
            key2: note,
            key3: des,

        })
    }
    const addZero = (a) => {
        if (a < 10 && a > 0) {
            return '0' + a.toString();
        } else {
            return a;
        }
    }

    const getCurrentDate = () => {
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        return year + '-' + addZero(month) + '-' + addZero(date);
    }
    const getMinDate = () => {
        var date = new Date().getDate();
        var month = new Date().getMonth() - 1;
        var year = new Date().getFullYear();
        return year + '-' + addZero(month) + '-' + addZero(date);
    }
    const handleDayPress = (day) => {
        if (day.dateString === '2023-03-28', '2023-03-01', '2023-03-31', '2023-03-15') {
            setTooltipVisible(true);
            setTooltipText(day.tooltipText);
            console.log('jat', tooltipText)
        }
    };




    return (
        <View style={{ flex: 1, backgroundColor: '#FFF' }}>


            <View style={{ }}>

                <Calendar

                    current={getCurrentDate().toString()}
                    minDate={getMinDate().toString()}
                    maxDate={"2025-12-31"}
                    onDayPress={day => {
                        setDate(day.dateString)
                    }}
                    onDayLongPress={handleDayPress}

                    hideExtraDays={true}
                    markedDates={{
                        '2023-03-28': { selected: true, marked: true, selectedColor: 'blue', tooltipText: 'ramakant', },
                        '2023-03-01': { selected: true, marked: true, selectedColor: 'red', tooltipText: 'jfhsjfjs', },
                        '2023-03-31': { selected: true, marked: true, selectedColor: 'pink', tooltipText: 'jgbsfgjbsj', },
                        '2023-03-15': { selected: true, marked: true, selectedColor: 'green', tooltipText: 'hgfdshg', },
                    }}
                    enableSwipeMonths={true}
                    theme={{
                        todayTextColor: 'red',
                        todayBackgroundColor: '#000',
                        textMonthFontSize: 30,
                        monthTextColor: 'red',

                    }}
                />

            </View>

            <TouchableOpacity
                onPress={() => {
                    setTooltipVisible(!tooltipVisible)
                }}
            >

            </TouchableOpacity>
            <Modal
                transparent={true}
                visible={tooltipVisible}
                onRequestClose={() => {
                    setTooltipVisible(!tooltipVisible);
                }}>
                <TouchableOpacity
                    style={styles.TouchableOpacity1}
                    onPress={() => setTooltipVisible(!tooltipVisible)}>
                </TouchableOpacity>

                <View style={styles.modalView}>
                <Text style={{ color: 'red' ,textAlign:'center'}}>{tooltipText}</Text>

                </View>
            </Modal>


        </View>
    )
}

export default CalanderPicker

const styles = StyleSheet.create({
    textInput: { borderWidth: 1, backgroundColor: 'whitesmoke', marginTop: 15, marginHorizontal: 5, borderRadius: 10, paddingHorizontal: 20 },
    viewBox1: {
        paddingVertical: 25,
        width: FULL_WIDTH * 0.70,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#EDEDED',
        alignSelf: 'center',
        flex: 1
    },
    modalView: {
        alignSelf: 'center',
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 10,
        height: 400,
        marginTop: "50%",



    }, TouchableOpacity1: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        position: 'absolute'
    },

    modalButton: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        flex: 2,
        alignItems: 'center'
    },
    imageButtonStyle: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        backgroundColor: 'whitesmoke',
    },
    textStyle: {
        color: 'orange',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15
    },
    closeButton: {
        marginHorizontal: 80,
        // flex: 1,
        marginTop: 30
    },
    button: {
        paddingVertical: "4%",
        backgroundColor: 'whitesmoke',
        borderRadius: 10,
        borderWidth: 1
    },
})

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

// import React, {useState} from 'react';
// import {Agenda} from 'react-native-calendars';

// // States

// const CalanderPicker =()=>{


// const [events, setEvents] = useState({});
// const [marksDate, setMarksDate] = useState({});
// const [refreshCalender, setRefreshCalender] = useState(false);

// // On Add Function
// const onAddEventSubmit = () => {
//     setRefreshCalender(true);
//     let items = events;
//     let mark = {};
//     let eventDetails = {
//         date: "2022-02-23", // Modal Value
//         title: "Your Event Title" // Modal Value
//     }

//     if (!items[eventDetails.date]) {
//         items[eventDetails.date] = [];
//     }

//     items[eventDetails.date].push(eventDetails);


//     mark[eventDetails.date] = {
//         customStyles: {
//           container: {
//             backgroundColor: '#0f0',
//           },
//           text: {
//             color: 'white',
//             fontWeight: 'bold',
//           },
//         },
//     };

//     setEvents(items);
//     setMarksDate(mark);
//     setRefreshCalender(false);
// }

// return(

// <Agenda
//     items={events}
//     // loadItemsForMonth={loadItems} // Function
//     refreshing={refreshCalender}
//     renderItem={(item) => {
//         return (
//             <View>
//                 <Text>{item.title}</Text>
//             </View>
//         )
//     }}
//     markingType={'custom'}
//     markedDates={marksDate}
//     // ..other props
// />
// )
// }


// export default CalanderPicker;

// import React, { useState } from 'react';
// import { View, TouchableOpacity, StyleSheet,Text } from 'react-native';

// const WaterGlass = () => {
//   const [waterLevel, setWaterLevel] = useState(0);

//   const increaseWaterLevel = () => {
//     if (waterLevel < 100) {
//       setWaterLevel(waterLevel + 10);
//     }
//   };

//   const decreaseWaterLevel = () => {
//     if (waterLevel > 0) {
//       setWaterLevel(waterLevel - 10);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={[styles.glass, { borderBottomWidth: waterLevel }]}>
//       </View>
//       <TouchableOpacity style={styles.button} onPress={increaseWaterLevel}>
//         <Text style={styles.buttonText}>Add Water</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.button} onPress={decreaseWaterLevel}>
//         <Text style={styles.buttonText}>Remove Water</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   glass: {
//     width: 100,
//     height: 200,
//     borderRadius: 50,
//     backgroundColor: 'transparent',
//     borderLeftWidth: 10,
//     borderRightWidth: 10,
//     position: 'absolute',
//     bottom: 0,
//     left: '50%',
//     transform: [{ translateX: -50 }],
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     marginVertical: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//   },
// });

// export default WaterGlass;
