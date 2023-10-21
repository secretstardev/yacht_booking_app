import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import {Image} from 'react-native';

const IconButton = props => {
  const {onPress} = props;
  const source =
    props.icon == 'apple'
      ? require(`../assets/images/apple.png`)
      : require(`../assets/images/google.png`);
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Image source={source} style={styles.image} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '48%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#ffffff',
  },
  image: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default IconButton;
