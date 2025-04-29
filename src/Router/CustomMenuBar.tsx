import React, {FC} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {COLORS} from '../Constants/Colors';

interface Props {}

const CustomMenuBar: FC<Props> = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <DrawerContentScrollView>
        <View style={{paddingHorizontal: 20, marginTop: 20}}>
          <DrawerItem
            label={() => (
              <Text
                style={{
                  color: COLORS.PrimaryColor,
                  fontSize: 14,
                  marginLeft: 10,
                }}>
                Version 1.0.0
              </Text>
            )}
            onPress={() => {}} // Provide empty function to avoid warnings
            style={{backgroundColor: 'transparent'}}
          />
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

export default CustomMenuBar;
