import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [text, onChangeText] = React.useState('');

  if (text == '') {
    AsyncStorage.getItem('@textInput').then( (text) => {
      onChangeText(text);
    }).catch((error) => {
      console.log(error);
    })
  }
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={async (text) => {
        await AsyncStorage.setItem('@textInput', text);
        onChangeText(text);
      }} 
      value={text} placeholder="Type here" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 10,
  },
});
