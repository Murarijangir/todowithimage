

// // // Example of Tooltip in React Native for Android and IOS
// // // https://aboutreact.com/example-of-tooltip-in-react-native-for-android-and-ios/

// // // import React in our code
// // import React, {useState} from 'react';

// // // import all the components we are going to use
// // import {
// //   SafeAreaView,
// //   View,
// //   Text,
// //   StyleSheet,
// //   TouchableHighlight,
// // } from 'react-native';

// // //Import Tooltip
// // import Tooltip from 'react-native-walkthrough-tooltip';

// // const App = () => {
// //   const [toolTipVisible, setToolTipVisible] = useState(false);

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <View style={styles.container}>
// //         <Text style={styles.titleStyle}>
// //           Example of Tooltip in React Native for Android and IOS
// //         </Text>
// //         <Text style={styles.titleStyle}>www.aboutreact.com</Text>
// //         <Tooltip
// //           animated={true}
// //           // (Optional) When true,
// //           // tooltip will animate in/out when showing/hiding
// //           arrowSize={{width: 16, height: 8}}
// //           // (Optional) Dimensions of arrow bubble pointing
// //           // to the highlighted element
// //           backgroundColor="rgba(0,0,0,0.5)"
// //           // (Optional) Color of the fullscreen background
// //           // beneath the tooltip.
// //           isVisible={toolTipVisible}
// //           // (Must) When true, tooltip is displayed
// //           content={<Text>Hello! AboutReact</Text>}
// //           // (Must) This is the view displayed in the tooltip
// //           placement="bottom"
// //           // (Must) top, bottom, left, right, auto.
// //           onClose={() => setToolTipVisible(false)}
// //           // (Optional) Callback fired when the user taps the tooltip
// //         >
// //           <TouchableHighlight
// //             style={styles.buttonStyle}
// //             onPress={() => setToolTipVisible(true)}>
// //             <Text style={styles.buttonTextStyle}>
// //               Say Hi to AboutReact
// //             </Text>
// //           </TouchableHighlight>
// //         </Tooltip>
// //       </View>
// //     </SafeAreaView>
// //   );
// // };
// // export default App;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignContent: 'center',
// //     textAlign: 'center',
// //     paddingTop: 30,
// //     backgroundColor: '#307ecc',
// //     padding: 16,
// //   },
// //   buttonStyle: {
// //     width: '100%',
// //     height: 40,
// //     padding: 10,
// //     backgroundColor: '#f5821f',
// //     marginTop: 30,
// //   },
// //   buttonTextStyle: {
// //     color: 'white',
// //     textAlign: 'center',
// //   },
// //   titleStyle: {
// //     color: 'white',
// //     textAlign: 'center',
// //     fontSize: 20,
// //     marginTop: 10,
// //   },
// // });


// import React, { useState } from 'react';
// import { Calendar } from 'react-native-calendars';
// import Modal from 'react-native-modal';
// import { Text, View } from 'react-native';

// const TooltipCalendar = () => {
//   const [tooltipVisible, setTooltipVisible] = useState(false);
//   const [tooltipText, setTooltipText] = useState('jhffghfhf');

//   const handleDayPress = (day) => {
//     if (day.dateString === '2023-03-28') {
//       setTooltipVisible(true);
//       setTooltipText(day.tooltipText);
//     }
//   };

//   return (
//     <View>
//       <Calendar
//         markedDates={{
//           '2023-03-28': { selected: true, marked: true, dotColor: 'red', tooltipText: 'Tooltip on this date' }
//         }}
//         onDayPress={handleDayPress}
//       />
//       <Modal isVisible={tooltipVisible}>
//         <Text style={{color:'red',fontSize:15,marginTop:20}}>{tooltipText}</Text>
//       </Modal>
//     </View>
//   );
// };

// export default TooltipCalendar;

import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';


const ToolTip = () => {
  const [selectedDate, setSelectedDate] = useState(null);

const handleDayPress = (day) => {
  setSelectedDate(day.dateString);
};
const renderTooltip = () => {
  if (!selectedDate) {
    return null;
  }
  
};
  return (
    <View>
<Calendar
  onDayPress={handleDayPress}
  dayComponent={({ date, state }) => {
    return (
      <View>
        <Text>{date.day}</Text>
        {state === 'disabled' ? null : <View>{renderTooltip()}</View>}
      </View>
    );
  }}
/>



    </View>
  )
}

export default ToolTip

const styles = StyleSheet.create({})