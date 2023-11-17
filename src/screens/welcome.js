import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  ImageBackground,
  Modal,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import TextButton from '../components/TextButton';
import Space from '../components/Space';
import IconButton from '../components/IconButton';
import Toast from 'react-native-toast-message';
// import FingerprintScanner from 'react-native-fingerprint-scanner';
import auth from '@react-native-firebase/auth';
import { appleAuth } from '@invertase/react-native-apple-authentication';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';
import { v4 as uuid } from 'uuid'

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '519492099868-1i894undshk9fhaj9n3sfu8ifo8631gd.apps.googleusercontent.com',
  offlineAccess: false,
});

const WelcomeScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [biometryType, setBiometryType] = useState(false);
  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const onGoogleButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {idToken} = await GoogleSignin.signIn();
      if (idToken != null) {
        const info = await GoogleSignin.getCurrentUser();
        // const tokens = await GoogleSignin.getTokens();
        console.log(info);
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'You are logined!',
          position: 'bottom',
        });
        return true;
      } else {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Your credential is incorrect.',
          position: 'bottom',
        });
        return false;
      }
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(error);
      } else {
        console.log(error);
      }
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Something went wrong',
        position: 'bottom',
      });
      return false;
    }
  };

  const onAppleButtonPress = async () => {
    
    try {
      const rawNonce = uuid();
      const state = uuid();

      appleAuth.configure({
        // The Service ID you registered with Apple
        clientId: "com.example.client-android",

        // Return URL added to your Apple dev console. We intercept this redirect, but it must still match
        // the URL you provided to Apple. It can be an empty route on your backend as it's never called.
        redirectUri: "https://example.com/auth/callback",

        // [OPTIONAL]
        // Scope.ALL (DEFAULT) = 'email name'
        // Scope.Email = 'email';
        // Scope.Name = 'name';
        scope: appleAuthAndroid.Scope.ALL,

        // [OPTIONAL]
        // ResponseType.ALL (DEFAULT) = 'code id_token';
        // ResponseType.CODE = 'code';
        // ResponseType.ID_TOKEN = 'id_token';
        responseType: appleAuthAndroid.ResponseType.ALL,

        // [OPTIONAL]
        // A String value used to associate a client session with an ID token and mitigate replay attacks.
        // This value will be SHA256 hashed by the library before being sent to Apple.
        // This is required if you intend to use Firebase to sign in with this credential.
        // Supply the response.id_token and rawNonce to Firebase OAuthProvider
        nonce: rawNonce,

        // [OPTIONAL]
        // Unique state value used to prevent CSRF attacks. A UUID will be generated if nothing is provided.
        state,
      });

      const response = await appleAuth.signIn();
      if (response) {
        const code = response.code; // Present if selected ResponseType.ALL / ResponseType.CODE
        const id_token = response.id_token; // Present if selected ResponseType.ALL / ResponseType.ID_TOKEN
        const user = response.user; // Present when user first logs in using appleId
        const state = response.state; // A copy of the state value that was passed to the initial request.
        console.log("Got auth code", code);
        console.log("Got id_token", id_token);
        console.log("Got user", user);
        console.log("Got state", state);
      }
    } catch (error) {
      if (error && error.message) {
        switch (error.message) {
          case appleAuthAndroid.Error.NOT_CONFIGURED:
            console.log("appleAuthAndroid not configured yet.");
            break;
          case appleAuthAndroid.Error.SIGNIN_FAILED:
            console.log("Apple signin failed.");
            break;
          case appleAuthAndroid.Error.SIGNIN_CANCELLED:
            console.log("User cancelled Apple signin.");
            break;
          default:
            break;
        }
      }
    }
  }

  const revokeAccess = async () => {
    try {
      const res = await GoogleSignin.revokeAccess();
      if (res == null) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        console.log(error);
      }
    }
  };

  const getMessage = () => {
    if (biometryType == 'Face ID') {
      return 'Scan your Face on the device to continue';
    } else {
      return 'Scan your Fingerprint on the device scanner to continue';
    }
  };

  useEffect(() => {
    FingerprintScanner.isSensorAvailable()
      .then(biometryType => {
        setBiometryType(biometryType);
      })
      .catch(error => console.log('isSensorAvailable error => ', error));
  }, []);

  const showAuthenticationDialog = async () => {
    if (biometryType !== null && biometryType !== undefined) {
      const rnBiometrics = new ReactNativeBiometrics();

      const { available, biometryType } =
        await rnBiometrics.isSensorAvailable();
    
      if (!available || biometryType !== BiometryTypes.FaceID) {
        Alert.alert(
          'Oops!',
          'Face ID is not available on this device.',
        );
        return;
      }
    
      const userId = await AsyncStorage.getItem('userId');
    
      if (!userId) {
        Alert.alert(
          'Oops!',
          'You have to sign in using your credentials first to enable Face ID.',
        );
        return;
      }
    
      const timestamp = Math.round(
        new Date().getTime() / 1000,
      ).toString();
      const payload = `${userId}__${timestamp}`;
    
      const { success, signature } = await rnBiometrics.createSignature(
        {
          promptMessage: 'Sign in',
          payload,
        },
      );
    
      if (!success) {
        Alert.alert(
          'Oops!',
          'Something went wrong during authentication with Face ID. Please try again.',
        );
        return;
      }
    
      const { status, message } = await verifySignatureWithServer({
        signature,
        payload,
      });
    
      if (status !== 'success') {
        Alert.alert('Oops!', message);
        return;
      }
    
      Alert.alert('Success!', 'You are successfully authenticated!');
    } else {
      console.log('biometric authentication is not available');
    }
  };

  return (
    <ImageBackground
      source={require('../assets/images/welcome.png')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.centerContainer}>
            <Space height={30} />
            <Image
              source={require('../assets/images/logo_1.png')}
              style={styles.logo}
            />
            <Space height={20} />
            <Text style={styles.title}>Welcome</Text>
            <Space height={10} />
            <Text style={styles.description}>
              Create an account to get an exciting offers
            </Text>
            <Space height={30} />
            <TextButton
              title="Continue with email"
              fontSize={16}
              enable={true}
              onPress={() => {
                navigation.navigate('Register');
              }}
            />
            <View style={styles.buttonContainer}>
              <IconButton icon="apple" onPress={
                async () => onAppleButtonPress()
              } />
              <IconButton
                icon="google"
                onPress={async () => {
                  const response = await onGoogleButtonPress();
                  if (response == true) {
                    navigation.navigate('Search');
                  }
                }}
              />
            </View>
            <Space height={15} />
            <Text style={styles.description}>
              By tapping continue i agree to the{' '}
              <Text style={styles.terms}>Terms of service.</Text>
            </Text>
            <Space height={40} />
            <Text style={styles.description}>
              Already have an account?&nbsp;
              <Text
                style={styles.underline}
                onPress={() => {
                  navigation.navigate('Login');
                }}>
                Login
              </Text>
            </Text>
            <Space height={60} />
          </View>
        </ScrollView>
      </View>
      <BottomModal
        visible={modalVisible}
        onClose={handleCloseModal}
        // showAuthenticationDialog={showAuthenticationDialog}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  contentContainer: {
    flexGrow: 1,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  title: {
    color: 'black',
    fontSize: 32,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  description: {
    color: 'grey',
    fontSize: 14,
    alignSelf: 'center',
  },
  terms: {
    color: '#246bbc',
  },
  underline: {
    textDecorationLine: 'underline',
    color: '#246bbc',
  },
});

export default WelcomeScreen;

const BottomModal = ({visible, onClose}) => {
  const [face, setFace] = useState(false);

  const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'flex-end',
    },
    modalContainer: {
      backgroundColor: 'white',
      padding: 16,
    },
  });

  const resetFace = () => {
    setFace(false);
    onClose();
  };
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 18}}>Apple ID</Text>
              <TouchableOpacity onPress={resetFace}>
                <Image
                  source={require('../assets/images/close.png')}
                  style={[styles.logo, {width: 24, height: 24}]}
                />
              </TouchableOpacity>
            </View>
            <Space height={16} />
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Image
                source={require('../assets/images/logo_1.png')}
                style={[styles.logo, {width: 60, height: 60}]}
              />
            </View>
            <Space height={16} />
            <View style={{paddingHorizontal: 24}}>
              <Text style={{textAlign: 'center', fontSize: 18}}>
                {
                  'Do you want to sign in to Easycharter \n with your Apple ID \n“ loremipsum@icloud.com”'
                }
              </Text>
            </View>
            <Space height={4} />
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              {face ? (
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      // showAuthenticationDialog();
                    }}>
                    <Image
                      source={require('../assets/images/face.png')}
                      style={[styles.logo, {width: 40, height: 40}]}
                    />
                  </TouchableOpacity>
                  <Text style={{textAlign: 'center'}}>{'Face \nID'}</Text>
                </View>
              ) : (
                <TextButton
                  title="Continue"
                  fontSize={16}
                  enable={true}
                  style={{paddingHorizontal: 32, height: 48}}
                  onPress={() => {
                    setFace(true);
                  }}
                />
              )}
            </View>
            <Space height={8} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
