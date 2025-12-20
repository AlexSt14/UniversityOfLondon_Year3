import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState, useRef } from 'react';


export default function App() {
  const [colorFlip, setColorFlip] = useState(0);
  const ourInterval = useRef(undefined);

  const buttonPressed = () => {
    let buttonState = 0;

    if (ourInterval.current==undefined){
      ourInterval.current = setInterval(() => {
        buttonState = buttonState==0 ? 1 : 0;
        setColorFlip(buttonState);
      }, 3000);
    } else {
      clearInterval(ourInterval.current);
      ourInterval.current = undefined;
    }

    
  }  
  return (
    <View style={[styles.container, colorFlip==0 ? styles.yellowBackground : styles.redBackground]}>
      <TouchableOpacity style={styles.button} onPress={buttonPressed}>

      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  yellowBackground: {
    backgroundColor: 'yellow',
  },
  redBackground: {
    backgroundColor: 'blue',
  },
  button: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'red',
  }
});
