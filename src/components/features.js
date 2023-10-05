import { View, Text, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Features() {
  return (
    <View style={{height: hp(50)}} className="space-y-4">
      <Text style={{fontSize: wp(6.5)}} className="font-semibold text-gray-700">Features</Text>
      
      {/*chatGPT */}
      <View className="bg-emerald-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-2">
            <Image style={{height: hp(4), width: hp(4)}} source={require('../../assets/img/chatgptIcon.png')}/>
            <Text style={{fontSize: wp(4.8)}} className="font-semibold text-gray-700">ChatGPT</Text>
        </View>
        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">
            ChatGPT can provide you with instant and knowledgeable responses, assist you with creative ideas on a wide range of topics.
        </Text>
      </View>

    {/* DALL-E */}
      <View className="bg-purple-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-2">
            <Image style={{height: hp(4), width: hp(4)}} source={require('../../assets/img/dalleIcon.png')}/>
            <Text style={{fontSize: wp(4.8)}} className="font-semibold text-gray-700">DALL-E</Text>
        </View>
        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">
            DALL-E can generate imaginative and diverse images from textual descriptions, expanding the boundary of visual creativity.
        </Text>
      </View>

    {/* Smart AI */}
      <View className="bg-cyan-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-2">
            <Image style={{height: hp(4), width: hp(4)}} source={require('../../assets/img/smartaiIcon.png')}/>
            <Text style={{fontSize: wp(4.8)}} className="font-semibold text-gray-700">Smart AI</Text>
        </View>
        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">
            A powerful voice assisant with the abilities of ChatGPT and DALL-E, providing you the best of the both worlds.
        </Text>
      </View>
      
    </View>
  )
}