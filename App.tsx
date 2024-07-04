import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

function colorChange (){
  
  
  
}
function App(): React.JSX.Element {
  
  const [bgColor, setBgColor] = useState('#ffffff');
  const changeBgColor = () => {
    const hex = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    setBgColor(color);
  };
  return (
    <>
      <TouchableOpacity  style={styles.bgArea}  >
        <StatusBar backgroundColor={'red'} />
        <Text style={styles.heading}>
          Background changer 
       </Text>
        <View style={styles.bgArea}>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  bgArea: {
    flex: 1,
    backgroundColor: "red"

  },
  heading: {
    flex: 0,
    textAlign: "center",
    backgroundColor: "red",
    fontSize: 20


  },


});

export default App;
