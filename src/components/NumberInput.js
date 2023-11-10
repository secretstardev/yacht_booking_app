import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const NumberInput = ({title, value, onIncrement, onDecrement}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={onDecrement} style={styles.negView}>
          <Text style={styles.button}>-</Text>
        </TouchableOpacity>
        <View style={styles.countView}>
          <Text style={styles.count}>{value}</Text>
        </View>
        <TouchableOpacity onPress={onIncrement} style={styles.negView}>
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dottedView}>
        <View style={styles.verticalLine} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#246bbc',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    alignContent: 'center',
  },
  button: {
    fontSize: 24,

    alignSelf: 'center',
    color: '#003580',
  },
  count: {
    fontSize: 23,
    color: '#003580',
    fontWeight: '500',
    alignSelf: 'center',
  },
  countView: {
    borderWidth: 1,
    width: 50,
    borderColor: '#246bbc',
    borderRadius: 5,
    height: 30,
    textAlign: 'center',
    marginHorizontal: 15,
    justifyContent: 'center',
  },
  negView: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderColor: '#246bbc',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dottedView: {
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },
  verticalLine: {
    width: '100%',
    height: 1, // Height of the line
    backgroundColor: 'transparent',
    borderTopWidth: 1,
    borderTopColor: '#003580', // Color of the dots
    borderStyle: 'dashed',
  },
});

export default NumberInput;
