import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';

const ImageSlider = props => {
  const {imageLinks} = props;
  const renderImageSlide = imageLink => {
    return (
      <View style={styles.slide}>
        <Image
          source={imageLink}
          resizeMode='cover'
          style={[
            styles.image,
            props.isCard
              ? {borderTopLeftRadius: 20, borderTopRightRadius: 20}
              : {},
          ]}
        />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      height: props.height ? props.height : 280,
    },
    dotStyle: {
      width: 10,
      height: 10,
      borderRadius: 10,
    },
    activeDotStyle: {
      width: 16,
      height: 16,
      borderRadius: 16,
    },
    slide: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: '100%',
      height: '100%',
    },
  });

  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        dotColor="white"
        activeDotColor="white"
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}>
        {imageLinks.map((imageLink, index) => (
          <View key={index}>{renderImageSlide(imageLink)}</View>
        ))}
      </Swiper>
    </View>
  );
};

export default ImageSlider;
