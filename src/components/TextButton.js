import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const TextButton = props => {
  const {onPress, title = 'Save'} = props;

  const styles = StyleSheet.create({
    button: {
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 12,
      paddingHorizontal: 8,
      borderRadius: 16,
      elevation: 3,
      borderWidth: 1,
      backgroundColor: props.isOutline
        ? 'white'
        : props.enable
        ? '#246BBC'
        : '#B3BFCF',
      borderColor: props.enable ? '#246BBC' : '#B3BFCF',
    },
    text: {
      fontSize: props.fontSize ? props.fontSize : 12,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: !props.isOutline ? 'white' : '#246BBC',
    },
  });

  return (
    <TouchableOpacity
      style={[styles.button, props.style]}
      onPress={() => {
        props.enable ? onPress() : {};
      }}
      activeOpacity={props.enable ? 0.2 : 1}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;
