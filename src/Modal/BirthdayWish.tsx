import React, {FC} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../Constants/Colors';
import {FONT_SIZE} from '../Constants/FontSize';

interface Props {}

const BirthdayWish: FC<Props> = () => {
  const today = new Date();
  const dayOfMonth = today.getDate();
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const month = monthNames[today.getMonth()];

  const formattedDate = `${dayOfMonth} ${month}`;

  const peopleWithSameBirthday = [
    {name: 'Mr. Manova Robinson J'},
    {name: 'Mr. John Doe'},
    {name: 'Ms. Jane Smith'},
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fcf4f4',
        padding: 20,
        marginTop: 20,
        borderRadius: 20,
      }}>
      {/* Header Section */}
      <View
        style={{
          paddingVertical: 20,
          paddingHorizontal: 16,
          borderRadius: 12,
          marginBottom: 15,
          shadowColor: '#fc6a64',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.2,
          shadowRadius: 6,
          elevation: 4,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between', // Space out the elements
        }}>
        <Text
          style={{
            flex: 1, // Allow the text to take remaining space
            fontSize: 20,
            fontWeight: 'bold',
            color: '#fc6a64',
            letterSpacing: 1,
            flexShrink: 1, // Shrink text if necessary
          }}>
          இன்றைய பிறந்த நாள் வாழ்த்துக்கள்
        </Text>
        <Image
          source={require('../Assets/birthday-1.png')}
          style={{
            width: 85,
            height: 80,
          }}
        />
      </View>

      {/* Body Section */}
      <ImageBackground
        source={require('../Assets/birthday-2.png')}
        resizeMode="none"
        imageStyle={{
          borderRadius: 12,
          opacity: 0.15,
        }}
        style={{
          backgroundColor: '#ffffff',
          padding: 22,
          borderRadius: 12,
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
          marginBottom: 20,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: COLORS.Grey2,
            lineHeight: 28,
            textAlign: 'center',
            marginBottom: 20,
            fontFamily: 'Arial',
            textShadowColor: 'rgba(0, 0, 0, 0.2)',
            textShadowOffset: {width: 1, height: 1},
            textShadowRadius: 2,
          }}>
          இன்றைய நாளில் தங்களது பிறந்த நாளினை கொண்டாடும் எங்கள் அன்புக்குரிய
          திருச்சபை குடும்ப உறுப்பினர்களை ஆண்டவருடை நாமத்தில் அன்போடு
          வாழ்த்துகிறோம். கர்த்தர் இந்த புதிய வருடத்திலே உங்களை
          ஆசீர்வதிப்பாராக!!
        </Text>
      </ImageBackground>

      {/* Birthday Wishes with Images and Name in a Row */}
      {peopleWithSameBirthday.map((person, index) => (
        <View
          key={index}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 5,
            marginBottom: 15,
            padding: 12,
            backgroundColor: '#fcfcfc',
            borderRadius: 15,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 3},
            shadowOpacity: 0.1,
            shadowRadius: 6,
            elevation: 3,
          }}>
          {/* Birthday Profile Picture & Date */}
          <View
            style={{
              position: 'relative',
              marginRight: 10,
            }}>
            <Image
              source={require('../Assets/bday-male.png')}
              style={{
                width: 55,
                height: 55,
                borderRadius: 50,
              }}
              resizeMode="contain"
            />
            <Image
              source={require('../Assets/cale-img.png')}
              style={{
                width: 40,
                height: 40,
                position: 'absolute',
                top: -18,
                left: -18,
              }}
              resizeMode="contain"
            />
            <Text
              style={{
                position: 'absolute',
                transform: [{translateX: -14}, {translateY: -2}],
                fontSize: 12,
                fontWeight: 'bold',
                color: '#fc6a64',
              }}>
              {formattedDate}
            </Text>
          </View>

          {/* Name Text */}
          <Text
            style={{
              fontSize: FONT_SIZE.font_22,
              fontWeight: 'bold',
              color: '#fc6a64',
              flex: 1,
              textAlign: 'left',
              letterSpacing: 1,
              paddingLeft: 10,
            }}>
            {person.name}
          </Text>
        </View>
      ))}
    </SafeAreaView>
  );
};

export default BirthdayWish;
