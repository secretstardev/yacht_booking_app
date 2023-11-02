import React, {useEffect} from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Welcome'); // Replace 'WelcomeScreen' with the name of your welcome screen component
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer); // Clear the timeout if the component unmounts before the timer expires
  }, []);

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
