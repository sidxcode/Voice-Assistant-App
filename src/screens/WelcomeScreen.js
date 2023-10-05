import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
// import tw from 'twrnc';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function WelcomeScreen() {
  return (
    <SafeAreaView className = "flex-1 flex justify-around bg-white">
      <View className = "space-y-2" >
        <Text className = "text-center font-bold text-gray-700" >
            Jarvis
        </Text>
        <Text className = "text-center text-gray-600 font-semibold text-base tracking-wider" >
            The future is here, powered by AI.
        </Text>
      </View>
      <View className="flex-row justify-center">
        <Image source={require('../../assets/img/welcome.png')} className="w-72 h-72"></Image>
      </View>
      <TouchableOpacity className="bg-emerald-600 mx-5 p-4 rounded-2xl">
        <Text className= "text-center font-bold text-white text-2xl">Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}