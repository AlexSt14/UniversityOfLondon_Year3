import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState, useRef } from 'react';

export default function App() {
  const [playState, setPlayState] = useState(false);
  const ourInterval = useRef(undefined);
  const [timerValue, setTimerValue] = useState("00:00:00");

  function toggleState() {
    setPlayState(!playState);
    if (playState === false) {
      let numSeconds = 0;
      ourInterval.current = setInterval(() => {
        numSeconds += 1;
        setTimerValue(new Date(numSeconds * 1000).toISOString().substr(11, 8));
      }, 1000);
    } else {
      clearInterval(ourInterval.current);
      ourInterval.current = undefined;
      setTimerValue("00:00:00");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textComponent}>{timerValue}</Text>
      <TouchableOpacity style={playState ? styles.stopButton : styles.startButton} onPress={toggleState}>
        <Text style={playState ? styles.buttonTextStop : styles.buttonText}>{playState ? "STOP" : "START"}</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textComponent: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 50,
  },
  startButton: {
    width: "80%",
    height: 80,
    borderRadius: 50,
    margin: 10, 
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  stopButton: {
    width: "80%",
    height: 80,
    borderRadius: 50,
    margin: 10, 
    justifyContent: 'center',
    backgroundColor: 'black',
    borderWidth: 7,
    borderColor: 'red',
  },
  buttonText: {
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
    color: 'black',
    fontSize: 30,
  },
  buttonTextStop: {
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
    color: 'red',
    fontSize: 30,
  },
});
