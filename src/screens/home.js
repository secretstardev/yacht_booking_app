import React from 'react';
import {View, Text, Dimensions, ScrollView, StyleSheet} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Space from '../components/space';
import {Image} from 'react-native-elements';
import {Pressable} from 'react-native';

const Home = () => {
  const height = Dimensions.get('window').height;
  const mainHeight = height;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    contentContainer: {
      flexGrow: 1,
      overflow: 'scroll', // or 'hidden', 'visible', 'auto'
    },
    topSection: {
      height: 260,
      backgroundColor: '#246bbc',
    },
    locationSection: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 16,
    },
    icon: {
      width: 40,
      height: 40,
    },
    left: {
      flex: 1,
    },
    right: {
      flex: 0,
      marginRight: 8,
    },
    locationText: {
      paddingHorizontal: 8,
    },
    location: {
      color: '#ffffff',
    },
    label: {
      paddingLeft: 16,
    },
    searchField: {
      marginHorizontal: 24,
      backgroundColor: 'white',
      height: 50,
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    searchIcon: {
      flex: 1,
      margin: 16,
      width: 20,
      height: 20,
    },
    searchLabel: {
      margin: 16,
      flex: 1,
      color: '#000000',
      fontSize: 16,
      fontWeight: 'bold',
    },
    main: {
      backgroundColor: '#eeeeee',
      height: mainHeight,
      paddingHorizontal: 24,
      paddingVertical: 32,
    },
    carousel: {
      flexGrow: 1,
      flexDirection: 'row',
      overflow: 'scroll',
    },
    image: {
      width: 160,
      height: 120,
      borderRadius: 10,
    },
    textAlignCenter: {
      textAlign: 'center',
    },
    card: {
      height: 320,
      borderRadius: 10,
      backgroundColor: '#ffffff',
    },
    cardImage: {
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      height: 170,
    },
    cardInfo: {
      padding: 10,
    },
  });
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.topSection}>
          <Space height={40} />
          <View style={styles.locationSection}>
            <Image
              source={require('../assets/images/location.png')}
              style={[styles.icon, styles.left]}
            />
            <View style={[styles.left, styles.locationText]}>
              <Text style={styles.locationLabel}>Location</Text>
              <Text style={styles.location}>Lorem Ipsum </Text>
            </View>
            <Image
              source={require('../assets/images/avatar.png')}
              style={[styles.icon, styles.right]}
            />
          </View>
          <Space height={20} />
          <View style={styles.label}>
            <Text style={styles.location}>With Luxury Yachts</Text>
            <Text style={styles.location}>Relax on this planet...</Text>
          </View>
          <Space height={20} />
          <Pressable>
            <View style={styles.searchField}>
              <Image
                source={require('../assets/images/search.png')}
                style={styles.searchIcon}
              />
              <Text style={styles.searchLabel}>Where do you want to sail?</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.main}>
          <View>
            <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
              Type
            </Text>
            <Space height={10} />
            <ScrollView style={styles.carousel} horizontal={true}>
              <View>
                <Image
                  source={require('../assets/images/type_1.png')}
                  style={styles.image}
                />
                <Space height={8} />
                <Text style={styles.textAlignCenter}>Yacht</Text>
              </View>
              <Space width={20} />
              <View>
                <Image
                  source={require('../assets/images/type_2.png')}
                  style={styles.image}
                />
                <Space height={8} />
                <Text style={styles.textAlignCenter}>RIB</Text>
              </View>
              <Space width={20} />
              <View>
                <Image
                  source={require('../assets/images/type_3.png')}
                  style={styles.image}
                />
                <Space height={8} />
                <Text style={styles.textAlignCenter}>HouseBoat</Text>
              </View>
            </ScrollView>
          </View>
          <Space height={20} />
          <View>
            <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
              Popular Destination
            </Text>
            <Space height={10} />
            <ScrollView style={styles.carousel} horizontal={true}>
              <View>
                <Image
                  source={require('../assets/images/destination_1.png')}
                  style={styles.image}
                />
                <Space height={8} />
                <Text style={styles.textAlignCenter}>Dubai, Marina</Text>
              </View>
              <Space width={20} />
              <View>
                <Image
                  source={require('../assets/images/destination_2.png')}
                  style={styles.image}
                />
                <Space height={8} />
                <Text style={styles.textAlignCenter}>Abu dhabi</Text>
              </View>
              <Space width={20} />
              <View>
                <Image
                  source={require('../assets/images/destination_3.png')}
                  style={styles.image}
                />
                <Space height={8} />
                <Text style={styles.textAlignCenter}>Ras Al Khaimah</Text>
              </View>
            </ScrollView>
          </View>
          <Space height={20} />
          <View>
            <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
              Popular Listing
            </Text>
            <Space height={10} />
            <View style={styles.card}>
              <Image
                source={require('../assets/images/yacht_1.png')}
                style={styles.cardImage}
              />
              <View style={styles.cardInfo}>
                <Text style={{fontWeight: '900', fontSize: 20}}>
                  Gulf Craft Majestic 62
                </Text>
                <Text style={{fontSize: 12}}>
                  Dubai, United Arab Emirates | 25 people | 62 Feet
                </Text>
                <Space height={5} />
                <View styles={styles.searchField}>
                  <Image
                    source={require('../assets/images/star.png')}
                    style={[{flex: 0, width: 12, height: 12}]}
                  />
                  <Text styles={{flex: 0}}> 5.0 (34 Bookings)</Text>
                </View>
                <View styles={styles.searchField}>
                  <Image
                    source={require('../assets/images/skipper.png')}
                    style={[{flex: 0, width: 12, height: 12}]}
                  />
                  <Text styles={{flex: 0}}> 6 | With or without skippers</Text>
                </View>
                <Text style={{fontWeight: '500', fontSize: 20}}>
                  From 800Aed per hour
                </Text>
              </View>
            </View>
            <Space height={30} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
