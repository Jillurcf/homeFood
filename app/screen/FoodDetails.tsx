import tw from '@/src/lib/tailwind';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const FoodDetails = () => {
    const { data } = useLocalSearchParams();
    const item = JSON.parse(data);
    console.log(item, "data in FoodDetails");
    return (
        <View style={tw`flex-1 bg-white p-5`}>
            <Image
                source={item.image}
                style={tw`w-full h-60 rounded-xl mb-4`}
                resizeMode="cover"
            />

            <Text style={tw`text-black text-2xl font-bold mb-2`}>
                {item.title}
            </Text>
            <Text style={tw`text-gray-600 mb-1`}>Price: {item.price}</Text>
            <Text style={tw`text-gray-600`}>Quantity: {item.quantity}</Text>
            <Text style={tw`text-gray-600`}>Mobile no: {item.mobileNo}</Text>
        </View>
    );
};


export default FoodDetails

const styles = StyleSheet.create({})