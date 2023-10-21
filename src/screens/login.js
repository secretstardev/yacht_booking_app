import React, {useState} from 'react';
import {View, TextInput, ImageBackground, StyleSheet} from 'react-native';
import CustomButton from '../components/TextButton';
import Icon from 'react-native-vector-icons/FontAwesome';
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    // <ImageBackground
    //   source={require('../assets/images/welcome.png')}
    //   style={styles.backgroundImage}>
      <View style={styles.searchSection}>
        <Icon
          style={styles.searchIcon}
          name="x"
          size={20}
          color="#000"
        />
        <TextInput
          style={styles.input}
          placeholder="User Nickname"
          onChangeText={searchString => {
            this.setState({searchString});
          }}
          underlineColorAndroid="transparent"
        />
      </View>
      /* <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="grey"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="grey"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <CustomButton title="Login" onPress={handleLogin} />
      </View> */
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain', // or 'contain' if you want to fit the image within the screen
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  // input: {
  //   height: 50,
  //   borderColor: 'gray',
  //   borderWidth: 1,
  //   borderRadius: 10,
  //   marginBottom: 12,
  //   paddingHorizontal: 16,
  //   backgroundColor: 'white',
  //   color: 'black',
  // },

  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
});

export default LoginScreen;
