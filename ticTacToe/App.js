import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>
      <View style={styles.board}>
        <View style={styles.segment}>
          <View style={[styles.space, styles.radiusTopLeft]}>
            <Text style={styles.text}>O</Text>
          </View>
          <View style={[styles.space, styles.topMiddleBorder]}>
            <Text style={styles.text}>O</Text>
          </View>
          <View style={[styles.space, styles.radiusTopRight]}>
            <Text style={styles.text}>X</Text>
          </View>
        </View>
        <View style={styles.segment}>
          <View style={[styles.space, styles.middleSidesBorder, styles.neuButtonSecondShadow]}>
            <Text style={styles.text}>X</Text>
          </View>
          <View style={[styles.space, styles.middleBorder]}>
            <Text style={styles.text}>O</Text>
          </View>
          <View style={[styles.space, styles.middleSidesBorder]}>
            <Text style={styles.text}>O</Text>
          </View>
        </View>
        <View style={styles.segment}>
          <View style={[styles.space, styles.radiusBottomLeft]}>
            <Text style={styles.text}>X</Text>
          </View>
          <View style={[styles.space, styles.bottomMiddleBorder]}>
            <Text style={styles.text}>X</Text>
          </View>
          <View style={[styles.space, styles.radiusBottomRight]}>
            <Text style={styles.text}>O</Text>
          </View>
        </View>
      </View>
    </View>
      

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8b8b8bff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  board: {
    flex: 0.5,
    alignSelf: 'stretch',
    marginHorizontal: 16,    
  },
  segment: {
    flex: 1,
    flexDirection: 'row',
  },
  space: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c0c0c0ff',
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 15 },
    shadowOpacity: 0.4,
    shadowRadius: 18,
    elevation: 15,
  },
  text: {
    flex: 0,             
    fontSize: 48,  
  },
  middleBorder: {
    borderWidth: 5,
  },
  topMiddleBorder: {
    borderRightWidth: 5,
    borderLeftWidth: 5,
  },
  bottomMiddleBorder: {
    borderRightWidth: 5,
    borderLeftWidth: 5,
  },
  middleSidesBorder: {
    borderTopWidth: 5,
    borderBottomWidth: 5,
  },
  radiusTopRight: {
    borderTopRightRadius: 12,
  },
  radiusTopLeft: {
    borderTopLeftRadius: 12,  
  },
  radiusBottomRight: {
    borderBottomRightRadius: 12,
  },
  radiusBottomLeft: {
    borderBottomLeftRadius: 12,
  },
});
