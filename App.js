import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import CalculatorButton from './CalculatorButton'; // Custom button component

const App = () => {
  const [display, setDisplay] = useState("");

  const handlePress = (value) => {
    setDisplay(display + value);
  };

  const handleCalculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  const handleClear = () => {
    setDisplay("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{display}</Text>
      <View style={styles.buttonContainer}>
        <CalculatorButton value="7" onPress={handlePress} />
        <CalculatorButton value="8" onPress={handlePress} />
        <CalculatorButton value="9" onPress={handlePress} />
        <CalculatorButton value="/" onPress={handlePress} />
        <CalculatorButton value="4" onPress={handlePress} />
        <CalculatorButton value="5" onPress={handlePress} />
        <CalculatorButton value="6" onPress={handlePress} />
        <CalculatorButton value="*" onPress={handlePress} />
        <CalculatorButton value="1" onPress={handlePress} />
        <CalculatorButton value="2" onPress={handlePress} />
        <CalculatorButton value="3" onPress={handlePress} />
        <CalculatorButton value="-" onPress={handlePress} />
        <CalculatorButton value="0" onPress={handlePress} />
        <CalculatorButton value="C" onPress={handleClear} />
        <CalculatorButton value="=" onPress={handleCalculate} />
        <CalculatorButton value="+" onPress={handlePress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  display: {
    fontSize: 50,
    padding: 20,
    width: '80%',
    textAlign: 'right',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '80%',
    marginTop: 20,
  },
});

export default App;