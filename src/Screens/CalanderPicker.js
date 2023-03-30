import { Modal, StyleSheet, Text, TouchableOpacity, View, Dimensions, Image } from 'react-native'
import React, { useState, useRef } from 'react'
import { Calendar, Agenda } from 'react-native-calendars';
import { Images } from '../Constant/Images';
import moment from 'moment';


const FULL_WIDTH = Dimensions.get('screen').width

const CalanderPicker = ({ navigation }) => {
    const [date, setDate] = useState(moment());

    const [tooltipVisible, setTooltipVisible] = useState(false);
    const [tooltipText, setTooltipText] = useState('njbfnmbsfbs');

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


            <View style={{}}>

                <Calendar
                    current={moment(date).format('YYYY-MM-DD')}
                    key={moment(date).format('YYYY-MM-DD')}
                    // key={getCurrentDate().toString()}
                    // current={getCurrentDate().toString()}
                    // minDate={getMinDate().toString()}
                    // maxDate={"2025-12-31"}
                    onDayPress={day => {
                        setDate(day)
                    }}
                    onDayLongPress={handleDayPress}
                    hideArrows
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
                    renderHeader={(date) => {
                        return (
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                                    <Text style={{ fontSize: 15, color: 'red', fontWeight: 'bold' }} >Calendar</Text>
                                </View>
                                {console.warn("dadaad", date)}
                                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, justifyContent: 'space-between' }}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            console.warn("date", moment(date).format('MM-DD-YYYY'));
                                            let month = moment(date).month();
                                            console.warn("month", month);
                                            let nextmonth = month + 1
                                            let newDate = moment(date).month(nextmonth)
                                            console.warn("newDaad", newDate);
                                            setDate(newDate)
                                        }}
                                        style={{ flex: 1, alignItems: 'center' }}
                                    >
                                        <Image source={Images.LeftArrow} style={styles.arrows} />
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={{ flex: 2, alignItems: 'center' }}
                                    >
                                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>december</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={{ flex: 1, alignItems: 'center' }}>
                                        <Image source={Images.RightArrow} style={styles.arrows} />
                                    </TouchableOpacity>
                                </View>


                            </View>
                        )
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
                    <Text style={{ color: 'red', textAlign: 'center' }}>{tooltipText}</Text>

                </View>

            </Modal>


        </View>
    )
}

export default CalanderPicker

const styles = StyleSheet.create({
    arrows: {
        height: 15,
        width: 15,

    },

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

