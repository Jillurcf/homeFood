import { IconDrawer } from '@/assets/Icons/Icon';
import tw from '@/src/lib/tailwind';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

const index = () => {
      const navigation = useNavigation();
  return (
    <View style={tw`flex-1 bg-backgroundColor`}>
          <TouchableOpacity
          onPress={() => navigation?.dispatch(DrawerActions.openDrawer())}>
          <SvgXml width={30} xml={IconDrawer} />
        </TouchableOpacity>
     <StatusBar backgroundColor="black" translucent={false} />
    </View>
  )
}

export default index

const styles = StyleSheet.create({})