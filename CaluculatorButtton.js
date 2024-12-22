import React from 'react';
import { Button } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const CalculatorButton = ({ value, onPress }) => {
  return (
    <View style={styles.button}>
      <Button mode="contained" onPress={() => onPress(value)} style={styles.buttonText}>
        {value}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '25%',
    margin: 5,
  },
  buttonText: {
    fontSize: 30,
  },
});

export default CalculatorButton;