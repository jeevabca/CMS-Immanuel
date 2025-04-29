import React, {FC} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../Constants/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {FONT_SIZE} from '../Constants/FontSize';

interface Props {}

const videoLinks = [
  {
    url: 'https://www.youtube.com/watch?v=ts5PEZ-doRc',
    image: require('../Assets/celeb-1.png'),
  },
  {
    url: 'https://www.youtube.com/watch?v=f_R448k8Fh0',
    image: require('../Assets/celeb-2.png'),
  },
  {
    url: 'https://www.youtube.com/watch?v=9ClEXUPc1Ko',
    image: require('../Assets/celeb-3.png'),
  },
  {
    url: 'https://www.youtube.com/watch?v=HVN89IZZBKA',
    image: require('../Assets/celeb-4.png'),
  },
  {
    url: 'https://www.youtube.com/watch?v=n4KEniEEtCA',
    image: require('../Assets/celeb-5.png'),
  },
];

const ImportantEvents: FC<Props> = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F0F7FF', // Updated background color (soft pastel)
        borderRadius: 20,
        marginTop: 20,
        padding: 15,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <LinearGradient
          colors={['#1D4ED8', '#60A5FA']} // Gradient from deep blue to light blue
          style={{
            paddingVertical: 24,
            paddingHorizontal: 16,
            borderRadius: 15,
            marginBottom: 20,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 5},
            shadowOpacity: 0.3,
            shadowRadius: 10,
            elevation: 6,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: FONT_SIZE.font_24, // Slightly larger for emphasis
              fontWeight: 'bold',
              color: '#FFFFFF',
              textAlign: 'center',
              letterSpacing: 2, // A little more spacing to make it feel modern
              textShadowColor: '#000',
              textShadowOffset: {width: 1, height: 1},
              textShadowRadius: 3, // Text shadow for a pop effect
            }}>
            மறக்க முடியா முக்கிய நிகழ்வுகள்
          </Text>
        </LinearGradient>

        {/* Info Box */}
        <View
          style={{
            backgroundColor: '#C7D2FE', // Soft pastel light blue background for info box
            padding: 20,
            borderRadius: 15,
            borderLeftWidth: 5,
            borderLeftColor: '#1D4ED8', // Matching border color with the header
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
            marginBottom: 20,
          }}>
          <Text
            style={{
              fontSize: 16,
              lineHeight: 26,
              color: '#3B82F6', // Changed text color to blue variant
              textAlign: 'justify',
            }}>
            நமது ஆலய வரலாற்றில் ஆண்டவர் அருளின ஒருசில தருணங்களை, நீங்கள்
            வாழ்நாளெல்லாம் நினைவு கொள்வதற்கென காணொளிகளாக தொகுத்திருக்கிறோம்.
            கீழ்கண்ட வலையொளி வாயிலாக அதனை கண்டுகளித்து ஆண்டவருடைய நாமத்தை
            மகிமைப்படுத்துங்கள்.
          </Text>
        </View>

        {/* Horizontal Scroll for Videos */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 15,
            paddingBottom: 20,
          }}>
          {videoLinks.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => Linking.openURL(item.url)}
              activeOpacity={0.8}
              style={{
                borderRadius: 15,
                overflow: 'hidden',
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.2,
                shadowRadius: 6,
                elevation: 5,
                width: 300,
              }}>
              <Image
                source={item.image}
                style={{
                  width: '100%',
                  height: 200,
                  borderRadius: 15,
                  transform: [{scale: 1}],
                }}
                resizeMode="cover"
              />
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* See All Button (moved to bottom) */}
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: COLORS.White,
            paddingHorizontal: 20,
            paddingVertical: 12,
            borderRadius: 30,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 4,
            borderColor: '#1D4ED8', // Updated button border color
            borderWidth: 2,
            marginBottom: 5,
          }}
          activeOpacity={0.6}
          onPress={() => {
            Linking.openURL('https://www.youtube.com/@cmsimmanuel4864/streams');
          }}>
          <Text
            style={{
              color: '#1D4ED8', // Updated text color for consistency with theme
              fontWeight: '600',
              fontSize: 16,
              marginRight: 10,
            }}>
            அனைத்தையும் காண
          </Text>
          <Icon name="arrow-forward" size={18} color="#1D4ED8" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ImportantEvents;
