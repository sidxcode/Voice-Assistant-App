import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'twrnc';

export default function WelcomeScreen() {
  return (
    <SafeAreaView class = {tw`flex-1 flex justify-around bg-white`}>
      <Text>WelcomeScreen</Text>
    </SafeAreaView>
  )
}