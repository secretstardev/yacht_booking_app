import React, {useState} from 'react';
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

const WelcomeScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
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
              onPress={() => {
                navigation.navigate('Register');
              }}
            />
            <View style={styles.buttonContainer}>
              <IconButton icon="apple" onPress={handleOpenModal} />
              <IconButton icon="google" />
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
      <BottomModal visible={modalVisible} onClose={handleCloseModal} />
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
  const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'flex-end',
    },
    modalContainer: {
      backgroundColor: 'white',
      padding: 16,
      // borderTopLeftRadius: 10,
      // borderTopRightRadius: 10,
    },
  });
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>Apple ID</Text>
              <TouchableOpacity onPress={onClose}>
                <Image
                  source={require('../assets/images/no.png')}
                  style={[styles.logo, {width: 16, height: 16}]}
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
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <TextButton
                title="Continue"
                style={{width: 100, height: 48}}
                onPress={() => {}}
              />
            </View>
            <Space height={16} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
