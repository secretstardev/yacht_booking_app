import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import Slider from 'react-native-slider';
import Space from '../../components/Space';
import TextButton from '../../components/TextButton';
import {styles} from './styles';
import NumberInput from '../../components/NumberInput';
import IconTextButton from '../../components/IconTextButton';

const MoreFilter = props => {
  const [type, setType] = useState(0);
  const [duration, setDuration] = useState(2);
  const [instantBook, setInstantBook] = useState(true);
  const [captain, setCaptain] = useState(true);
  const [sliderValue, setSliderValue] = useState(0);

  const [pricePerHour, setPricePerHour] = useState(0);
  const [yachtLength, setYachtLength] = useState(0);
  const [motorPower, setMotorPower] = useState(0);
  const [year, setYear] = useState(1980);

  const [manufactrer, setManufactrer] = useState('');
  const [passengers, setPassengers] = useState(0);
  const [cabins, setCabins] = useState(0);
  const [berths, setBerths] = useState(0);

  const handleSliderChange = value => {
    setSliderValue(value);
  };

  const handlePassengerIncrement = () => {
    setPassengers(passengers + 1);
  };

  const handlePassengerDecrement = () => {
    if (passengers > 0) {
      setPassengers(passengers - 1);
    }
  };

  const handleCabinIncrement = () => {
    setCabins(cabins + 1);
  };

  const handleCabinDecrement = () => {
    if (cabins > 0) {
      setCabins(cabins - 1);
    }
  };

  const handleBerthIncrement = () => {
    setBerths(berths + 1);
  };

  const handleBerthDecrement = () => {
    if (berths > 0) {
      setBerths(berths - 1);
    }
  };

  const handlePricePerHourChange = value => {
    setPricePerHour(value);
  };

  const handleYachtLengthChange = value => {
    setYachtLength(value);
  };

  const handleMotorPowerChange = value => {
    setMotorPower(value);
  };

  const handleYearChange = value => {
    setYear(value);
  };
  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <TouchableOpacity
            onPress={() => {
              props.closeDrawer();
            }}>
            <Image
              source={require('../../assets/images/forward.png')}
              style={{marginTop: 10, height: 16}}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            flex: 0,
            fontSize: 24,
            fontWeight: 'bold',
            color: '#246bbc',
          }}>
          Filter By
        </Text>
      </View>
      <Space height={16} />
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#246bbc',
          }}>
          Type
        </Text>
        <Space height={4} />
        <View style={styles.btnView}>
          <TextButton
            title="Motorboat"
            style={{width: 84, height: 30}}
            isOutline={type == 0 ? false : true}
            enable={true}
            onPress={() => {
              setType(0);
            }}
          />
          <TextButton
            title="Sailboat"
            style={{width: 84, height: 30}}
            isOutline={type == 1 ? false : true}
            enable={true}
            onPress={() => {
              setType(1);
            }}
          />
          <TextButton
            title="Catamaran"
            style={{width: 84, height: 30}}
            isOutline={type == 2 ? false : true}
            enable={true}
            onPress={() => {
              setType(2);
            }}
          />
        </View>

        <View style={styles.btnView}>
          <TextButton
            title="RIB"
            style={{width: 84, height: 30}}
            isOutline={type == 3 ? false : true}
            enable={true}
            onPress={() => {
              setType(3);
            }}
          />
          <TextButton
            title="Yacht"
            style={{width: 84, height: 30}}
            isOutline={type == 4 ? false : true}
            enable={true}
            onPress={() => {
              setType(4);
            }}
          />
          <TextButton
            title="Houseboat"
            style={{width: 84, height: 30}}
            isOutline={type == 5 ? false : true}
            enable={true}
            onPress={() => {
              setType(5);
            }}
          />
        </View>
        <View style={styles.btnView}>
          <TextButton
            title="Jetski"
            style={{width: 84, height: 30}}
            isOutline={type == 6 ? false : true}
            enable={true}
            onPress={() => {
              setType(6);
            }}
          />
        </View>
      </View>

      <View style={styles.dottedView}>
        <View style={styles.verticalLine} />
      </View>
      <View>
        <Text style={styles.hiding1}>Instant Book</Text>
        <Space height={4} />
        <View style={styles.btnView}>
          <TextButton
            title="Yes"
            style={{width: 84, height: 30}}
            isOutline={instantBook ? false : true}
            enable={true}
            onPress={() => {
              setInstantBook(true);
            }}
          />
          <TextButton
            title="No"
            style={{width: 84, height: 30}}
            isOutline={!instantBook ? false : true}
            enable={true}
            onPress={() => {
              setInstantBook(false);
            }}
          />
          <View style={{width: 84}}></View>
        </View>
      </View>
      <View style={styles.dottedView}>
        <View style={styles.verticalLine} />
      </View>
      <View>
        <Text style={styles.hiding1}>Price per hour ($)</Text>
        <Space height={4} />
        <View style={{paddingLeft: 8}}>
          <Slider
            value={pricePerHour}
            minimumValue={0}
            maximumValue={1200}
            step={1}
            minimumTrackTintColor="#246BBC"
            maximumTrackTintColor="#246BBC"
            thumbTintColor="#246BBC"
            onValueChange={handlePricePerHourChange}
            onSlidingStart={() => console.log('Sliding started')}
            onSlidingComplete={() => console.log('Sliding completed')}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: 'black', fontSize: 16}}> $ 0</Text>
            <Text style={{color: 'black', fontSize: 16}}> $ 1200 +</Text>
          </View>
        </View>
      </View>

      <View style={styles.dottedView}>
        <View style={styles.verticalLine} />
      </View>

      <View>
        <Text style={styles.hiding1}>Yacht Length (m)</Text>
        <Space height={4} />
        <View style={{paddingLeft: 8}}>
          <Slider
            value={yachtLength}
            minimumValue={0}
            maximumValue={70}
            step={1}
            minimumTrackTintColor="#246BBC"
            maximumTrackTintColor="#246BBC"
            thumbTintColor="#246BBC"
            onValueChange={handleYachtLengthChange}
            onSlidingStart={() => console.log('Sliding started')}
            onSlidingComplete={() => console.log('Sliding completed')}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: 'black', fontSize: 16}}> $ 0</Text>
            <Text style={{color: 'black', fontSize: 16}}>+ 70 m</Text>
          </View>
        </View>
      </View>

      <View style={styles.dottedView}>
        <View style={styles.verticalLine} />
      </View>

      <View>
        <Text style={styles.hiding1}>Motor Power (hp)</Text>
        <Space height={4} />
        <View style={{paddingLeft: 8}}>
          <Slider
            value={motorPower}
            minimumValue={0}
            maximumValue={250}
            step={1}
            minimumTrackTintColor="#246BBC"
            maximumTrackTintColor="#246BBC"
            thumbTintColor="#246BBC"
            onValueChange={handleMotorPowerChange}
            onSlidingStart={() => console.log('Sliding started')}
            onSlidingComplete={() => console.log('Sliding completed')}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: 'black', fontSize: 16}}> 0</Text>
            <Text style={{color: 'black', fontSize: 16}}>+ 250 hp m</Text>
          </View>
        </View>
      </View>

      <View style={styles.dottedView}>
        <View style={styles.verticalLine} />
      </View>

      <View>
        <Text style={styles.hiding1}>Year</Text>
        <Space height={4} />
        <View style={{paddingLeft: 8}}>
          <Slider
            value={year}
            minimumValue={1980}
            maximumValue={2023}
            step={1}
            minimumTrackTintColor="#246BBC"
            maximumTrackTintColor="#246BBC"
            thumbTintColor="#246BBC"
            onValueChange={handleYearChange}
            onSlidingStart={() => console.log('Sliding started')}
            onSlidingComplete={() => console.log('Sliding completed')}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: 'black', fontSize: 16}}> 1980</Text>
            <Text style={{color: 'black', fontSize: 16}}>2023</Text>
          </View>
        </View>
      </View>
      <View style={styles.dottedView}>
        <View style={styles.verticalLine} />
      </View>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#246bbc',
          }}>
          Duration
        </Text>
        <Space height={4} />
        <View style={styles.btnView}>
          <TextButton
            title="2 hrs"
            style={{width: 84, height: 30}}
            isOutline={duration == 2 ? false : true}
            enable={true}
            onPress={() => {
              setDuration(2);
            }}
          />
          <TextButton
            title="3 hrs"
            style={{width: 84, height: 30}}
            isOutline={duration == 3 ? false : true}
            enable={true}
            onPress={() => {
              setDuration(3);
            }}
          />
          <TextButton
            title="4 hrs"
            style={{width: 84, height: 30}}
            isOutline={duration == 4 ? false : true}
            enable={true}
            onPress={() => {
              setDuration(4);
            }}
          />
        </View>
        <View style={styles.btnView}>
          <TextButton
            title="6 hrs"
            style={{width: 84, height: 30}}
            isOutline={duration == 6 ? false : true}
            enable={true}
            onPress={() => {
              setDuration(6);
            }}
          />
          <TextButton
            title="8 hrs"
            style={{width: 84, height: 30}}
            isOutline={duration == 8 ? false : true}
            enable={true}
            onPress={() => {
              setDuration(8);
            }}
          />
          <View style={{width: 84}}></View>
        </View>
      </View>
      <View style={styles.dottedView}>
        <View style={styles.verticalLine} />
      </View>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#246bbc',
          }}>
          Captain
        </Text>
        <Space height={4} />
        <View style={styles.btnView}>
          <TextButton
            title="Captain"
            style={{width: 84, height: 30}}
            isOutline={captain ? false : true}
            enable={true}
            onPress={() => {
              setCaptain(true);
            }}
          />
          <TextButton
            title="No Captain"
            style={{width: 84, height: 30}}
            isOutline={!captain ? false : true}
            enable={true}
            onPress={() => {
              setCaptain(false);
            }}
          />

          <View style={{width: 84}}></View>
        </View>
      </View>
      <View style={styles.dottedView}>
        <View style={styles.verticalLine} />
      </View>
      <View>
        <NumberInput
          title="Number of Passengers"
          value={passengers}
          onIncrement={handlePassengerIncrement}
          onDecrement={handlePassengerDecrement}
        />
        <NumberInput
          title="Number of Cabins"
          value={cabins}
          onIncrement={handleCabinIncrement}
          onDecrement={handleCabinDecrement}
        />
        <NumberInput
          title="Number of Berths"
          value={berths}
          onIncrement={handleBerthIncrement}
          onDecrement={handleBerthDecrement}
        />
      </View>
      <View>
        <Text style={[styles.hiding1, {marginBottom: 20}]}>
          Yacht Manufacturer
        </Text>
        <View>
          <Space height={4} />
          <TextInput
            style={styles.input}
            value={manufactrer}
            onChangeText={text => {
              setManufactrer(text);
            }}
            placeholder="Beneteau"
          />
        </View>
      </View>
      <View style={styles.dottedView}>
        <View style={styles.verticalLine} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginVertical: 23,
        }}>
        <IconTextButton title="Filter" hasIcon={false} style={{width: 110}} />
      </View>
      <Space height={200} />
    </View>
  );
};

export default MoreFilter;
