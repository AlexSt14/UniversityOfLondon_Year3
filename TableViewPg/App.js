import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, Switch, ActivityIndicator, TextInput } from 'react-native';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView style={{height: '100%'}}>
        <TableView>
          <Section>
            <Cell title="Basic cell" cellStyle="Basic" />
            <Cell title="Cell with right detail" cellStyle="RightDetail" detail="Detail" />
            <Cell title="Cell with left detail" cellStyle="LeftDetail" detail="Detail" />
          </Section>
          <Section header='Cells with accessories' >
            <Cell accessory="DisclosureIndicator" onPress={() => alert("test!")} title="Basic cell with pressable" />
            <Cell title="Cell with right detail" cellStyle='RightDetail' detail="Detail" accessory="DetailDisclosure" />
            <Cell title="Basic cell" cellStyle='Subtitle' accessory="Checkmark" detail="with subtitle! And checkmark" />
          </Section>
          <Section header='Cells with other elements' >
            <Cell title="Cell with image" image={<Image style={{ borderRadius: 5}} source={require('./assets/logo-og.jpg')}/>} />
            <Cell title="Cell with custom detail colour" cellStyle='RightDetail' detail="Detail" rightDetailColor="red" />
            <Cell title="Cell with a switch" cellAccessoryView={<Switch />} contentContainerStyle={{ paddingVertical: 4}} />
            <Cell title="Cell with an activity indicator" cellAccessoryView={<ActivityIndicator />} />
            <Cell cellContentView={
              <TextInput style={{ fontSize: 16, flex: 1 }} placeholder='A text input cell' />
            } />
          </Section>
          <Section header='Custom Cells' >
            <Cell title="Basic" contentContainerStyle={{ alignItems: 'center', height: 60, backgroundColor: 'lightblue' }} 
                cellContentView={
                  <Text style={{ flex: 1, fontSize: 16, textAlign: 'center', color: 'darkblue', fontWeight: 'bold'}}>
                    Custom height, and content view
                  </Text>

                }
            />
          </Section>
        </TableView>
      </ScrollView>
    </SafeAreaView>
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
