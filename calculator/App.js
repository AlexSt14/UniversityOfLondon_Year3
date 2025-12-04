import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Platform } from 'react-native';
import {useState} from "react";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const btnHeight = Math.floor(Dimensions.get("window").height / 12);
const btnWidth = Math.floor(Dimensions.get("window").width / 5);

export default function App() {
  const [answerValue, setAnswerValue] = useState("0");
  const [readytoReplace, setReadytoReplace] = useState(true);
  const [memoryValue, setMemoryValue] = useState(0);
  const [operatorValue, setOperatorValue] = useState(0);
  const [history, setHistory] = useState([]);

  function handleNumbers(value) {
    if (readytoReplace || answerValue === "0") {
      setReadytoReplace(false);
      return value;
    } else {
      return answerValue + value;
    }
  }

  function calculateEquals() {
    let currentValue = parseFloat(answerValue);
    let previousValue = parseFloat(memoryValue);
    let result = 0;
    let expression = `${previousValue} ${operatorValue} ${currentValue} = `;

    switch (operatorValue) {
      case "+":
        result = previousValue + currentValue;
        break;
      case "-":
        result = previousValue - currentValue;
        break;
      case "X":
        result = previousValue * currentValue;
        break;
      case "/":
        if (currentValue === 0) {
          alert("Error: Division by zero not allowed.");
          setAnswerValue("Error");
          setReadytoReplace(true);
          setMemoryValue(0);
          setOperatorValue(0);
          return;
        }
        result = previousValue / currentValue;
        break;
      default:
        return;
    }

    setAnswerValue(result.toString());
    setReadytoReplace(true);
    setMemoryValue(0);
    setOperatorValue(0);
    setHistory(prev => [...prev, `${expression}${result}`]);
    return result;
  }

  function pressedButton(value) {
    if (!isNaN(value)) {
      setAnswerValue(handleNumbers(value));
    } else if (value === "C") {
      setAnswerValue("0");
      setReadytoReplace(true);
      setMemoryValue(0);
      setOperatorValue(0);
    } else if (value === "+/-") {
      let currentValue = parseFloat(answerValue) * -1;
      setAnswerValue(currentValue.toString());
    } else if (value === "=") {
      calculateEquals();
    } else if (value === ".") {
      if (!answerValue.includes(".")) {
        setAnswerValue(answerValue + ".");
      }
    } else if (value === "%") {
      let currentValue = parseFloat(answerValue) * 0.01;
      setAnswerValue(currentValue.toString());
    }
    if (value === "/" || value === "X" || value === "-" || value === "+") {
      if (operatorValue !== 0) {
        let chainedValue = calculateEquals();
        setMemoryValue(parseFloat(chainedValue));
      } else {
        setMemoryValue(parseFloat(answerValue));
      }
      setOperatorValue(value);
      setReadytoReplace(true);
    }
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}> 
          <View style={styles.historyContainer}>
            {history.slice(-5).map((item, idx) => (
              <Text key={idx} style={styles.historyText}>{item}</Text>
            ))}
          </View>
          <View style={[styles.row, styles.resultsRow]}>
            <Text style={styles.resultsText}>{answerValue}</Text>
          </View>              
          <View style={styles.row}>
            <TouchableOpacity style={[styles.button, styles.clearButton]} activeOpacity={0.3} onPress={() => pressedButton("C")}>
              <Text style={styles.text}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} activeOpacity={0.3} onPress={() => pressedButton("+/-")}>
              <Text style={styles.text}>+/-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} activeOpacity={0.3} onPress={() => pressedButton("%")}>
              <Text style={styles.text}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonOperation]} activeOpacity={0.3} onPress={() => pressedButton("/")}>
              <Text style={styles.textOperations}>/</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={[styles.button, styles.buttonNumbers]} activeOpacity={0.3} onPress={() => pressedButton("7")}>
              <Text style={styles.textNumbers}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonNumbers]} activeOpacity={0.3} onPress={() => pressedButton("8")}>
              <Text style={styles.textNumbers}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonNumbers]} activeOpacity={0.3} onPress={() => pressedButton("9")}>
              <Text style={styles.textNumbers}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonOperation]} activeOpacity={0.3} onPress={() => pressedButton("X")}>
              <Text style={styles.textOperations}>X</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={[styles.button, styles.buttonNumbers]} activeOpacity={0.3} onPress={() => pressedButton("4")}>
              <Text style={styles.textNumbers}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonNumbers]} activeOpacity={0.3} onPress={() => pressedButton("5")}>
              <Text style={styles.textNumbers}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonNumbers]} activeOpacity={0.3} onPress={() => pressedButton("6")}>
              <Text style={styles.textNumbers}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonOperation]} activeOpacity={0.3} onPress={() => pressedButton("-")}>
              <Text style={styles.textOperations}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={[styles.button, styles.buttonNumbers]} activeOpacity={0.3} onPress={() => pressedButton("1")}>
              <Text style={styles.textNumbers}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonNumbers]} activeOpacity={0.3} onPress={() => pressedButton("2")}>
              <Text style={styles.textNumbers}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonNumbers]} activeOpacity={0.3} onPress={() => pressedButton("3")}>
              <Text style={styles.textNumbers}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonOperation]} activeOpacity={0.3} onPress={() => pressedButton("+")}>
              <Text style={styles.textOperations}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.buttonZero} activeOpacity={0.3} onPress={() => pressedButton("0")}>
              <Text style={styles.textNumbers}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonNumbers]} activeOpacity={0.3} onPress={() => pressedButton(".")}>
              <Text style={styles.textNumbers}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buttonOperation]} activeOpacity={0.3} onPress={() => pressedButton("=")}>
              <Text style={styles.textOperations}>=</Text>
            </TouchableOpacity>
            
          </View>
          <StatusBar style="default" barStyle="light-content" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  resultsText: {
    color: 'white',
    fontSize: 60,
    marginBottom: 10,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
  },
  resultsRow: {
    width: '100%',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
  clearButton: {
    backgroundColor: 'orange',
  },
  button: {
    backgroundColor: 'lightgray',
    height: btnHeight,
    width: btnWidth,
    margin: 5,
    borderRadius: btnHeight / 2,
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'lightgray',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
      android: {
        shadowColor: 'lightgray',
        elevation: 8,
      },
      web: {
        boxShadow: '0px 1px 6px #cccccc',
      },
    }),
  },
  buttonOperation: {
    backgroundColor: 'dodgerblue',
  },
  buttonNumbers: {
    backgroundColor: 'dimgray',
  },
  buttonZero: {
    backgroundColor: 'dimgray',
    height: btnHeight,
    width: btnWidth * 2 + 10,
    margin: 5,
    borderRadius: btnHeight / 2,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 45,
    color: 'black',
  },
  textOperations: {
    textAlign: 'center',
    fontSize: 45,
    color: 'white',
  },
  textNumbers: {
    textAlign: 'center',
    fontSize: 45,
    color: 'white',
  },
  historyContainer: {
  width: '100%',
  minHeight: 32,
  padding: 8,
  marginBottom: 2,
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  alignSelf: 'flex-end',
  },
  historyText: {
    color: '#aaa',
    fontSize: 16,
    textAlign: 'right',
  },
});
