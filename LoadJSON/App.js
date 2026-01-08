import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import JSONdata from './test.json';



export default function App() {
  let classString = "IS323";
  return (
    <View style={styles.container}>
      <Text>Hello {JSONdata.name}</Text>
      <Text>Your grade for IS323 is {JSONdata.grades.IS323}</Text>
      <Text>You can also see your grade for IS323 using a variable {JSONdata.grades[classString]}</Text>
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
});
