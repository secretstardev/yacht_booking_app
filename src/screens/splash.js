import React from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';

const SplashScreen = () => {

  return (
    <ImageBackground
      source={require('../assets/images/splash.png')}
      style={styles.backgroundImage}>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'contain' if you want to fit the image within the screen
  },
});

export default SplashScreen;
