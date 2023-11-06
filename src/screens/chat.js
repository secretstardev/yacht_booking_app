import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Space from '../components/Space';
import Icon from 'react-native-vector-icons/FontAwesome';
import TextButton from '../components/TextButton';

const Chat = ({navigation}) => {
  const [message, setMessage] = useState('');

  const chatData = [
    {id: 1, message: 'Hello \nHow are you?', isSent: true},
    {id: 2, message: 'I am good, thank you! \nHow about you!', isSent: false},
    // Add more chat messages here
  ];

  const scrollViewRef = useRef();

  useEffect(() => {
    scrollViewRef.current.scrollToEnd({animated: true});
  }, [chatData]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftComponent}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Message');
            }}>
            <Image
              source={require('../assets/images/arrow_left.png')}
              style={{width: 20, height: 20}}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Messages</Text>
        <View style={styles.rightComponent} />
      </View>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.chatContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <View
            style={{
              width: '86%',
              height: 10,
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
              marginHorizontal: 10,
              paddingHorizontal: 10,
            }}></View>
          <Text>TODAY</Text>
        </View>
        <Space height={16} />

        {chatData.map((chat, index) => (
          <View key={index}>
            <View
              style={{
                flexDirection: !chat.isSent ? 'row' : '',
                alignItems: 'flex-end',
              }}>
              {!chat.isSent ? (
                <Image
                  source={require('../assets/images/avatar.png')}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 16,
                    borderColor: 'black',
                    borderWidth: 1,
                  }}
                />
              ) : (
                <></>
              )}

              <View
                key={chat.id}
                style={[
                  styles.messageContainer,
                  chat.isSent
                    ? styles.sentMessageContainer
                    : styles.getMessageContainer,
                ]}>
                <Text style={{fontSize: 16, color: 'black'}}>
                  {chat.message}
                </Text>
                <Space height={4} />
                {chat.isSent ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View></View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text
                        style={chat.isSent ? styles.sentTime : styles.getTime}>
                        11:00am
                      </Text>
                      <Space width={chat.isSent ? 4 : 0} />
                      {chat.isSent ? (
                        <Image
                          source={require('../assets/images/doublecheck.png')}
                          style={styles.sentTime}
                        />
                      ) : (
                        <></>
                      )}
                    </View>
                  </View>
                ) : (
                  <Text style={chat.isSent ? styles.sentTime : styles.getTime}>
                    11:00am
                  </Text>
                )}
              </View>
            </View>

            <Space height={16} />
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Type a message..."
        />
        <TouchableOpacity>
          <Image
            source={require('../assets/images/forward.png')}
            style={{width: 20, height: 20}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 80,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  leftComponent: {
    marginTop: 8,
    marginLeft: 20,
  },
  title: {
    color: '#003580',
    fontSize: 22,
    fontWeight: 'bold',
  },
  rightComponent: {
    marginRight: 36,
  },
  container: {
    flex: 1,
  },
  topBar: {
    height: 50,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,

  },
  sentMessageContainer: {
    width: '60%',
    padding: 20,
    marginRight: 10,
    backgroundColor: '#D3FBD7',
    alignSelf: 'flex-end',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
  getMessageContainer: {
    width: '60%',
    padding: 20,
    marginLeft: 10,
    backgroundColor: '#DCEEFF',
    alignSelf: 'flex-start',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },
  messageContainer: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'flex-end',
  },
  getTime: {
    textAlign: 'left',
  },

  sentTime: {
    textAlign: 'right',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    marginRight: 10,
    height: 40,
    borderWidth: 5,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

export default Chat;
