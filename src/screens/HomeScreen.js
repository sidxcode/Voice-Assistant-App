import { View, Text, Image, ScrollView, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Features from '../components/features';
import { dummyMessages } from '../constants';

export default function HomeScreen() {
    const [messages, setMessages] = useState(dummyMessages);
  return (
    <View className="flex-1 bg-white">
        <SafeAreaView className="flex-1 flex mx-5">
            {/* bot icon */}
            <View className="flex-row justify-center">
                <Image source={require('../../assets/img/bot.png')} style={{height: hp(15), width: hp(15)}}/>
            </View>

            {/*features || messages */}
            {
                messages.length>0? (
                    <View className="space-y-2 flex-1">
                        <Text style={{fontSize: wp(5)}} className="text-gray-700 font-semibold ml-1">
                            Assistant
                        </Text>
                        <View style={{height: hp(58)}} className="bg-neutral-200 rounded-3xl p-4" >
                            <ScrollView
                                bounces={false}
                                className="space-y-4"
                                showsVerticalScrollIndicator={false}
                            >
                                {
                                    messages.map((messages, index)=>{
                                        if(messages.role=='assistant'){
                                            if(messages.content.includes('https')){
                                                //its an ai image
                                                return (
                                                    <View key={index} className="flex-row justify-start">
                                                        <View className="p-2 flex rounded-2xl bg-emerald-100 rounded-tl-none">
                                                            <Image
                                                                source={{uri:messages.content}}
                                                                className="rounded-2xl"
                                                                resizeMode="contain"
                                                                style={{height:wp(60), width:(60)}} />
                                                        </View>
                                                    </View>
                                                )
                                            }else{
                                                //text response
                                                return (
                                                    <View
                                                    key={index}
                                                    style={{width: wp(70)}}
                                                    className="bg-emerald-100 rounded-xl p-2 rounded-tl-none"
                                                    >
                                                        <Text>
                                                            {messages.content}
                                                        </Text>
                                                    </View>
                                                )
                                            }
                                        }else{
                                            //user input
                                            return (
                                                <View key={index} className="flex-row justify-end">
                                                    <View
                                                        style={{width: wp(70)}}
                                                        className="bg-white rounded-xl p-2 rounded-tr-none"
                                                        >
                                                            <Text>
                                                                {messages.content}
                                                            </Text>
                                                    </View>
                                                </View>
                                            )
                                        }
                                    })
                                }
                            </ScrollView>
                            
                        </View>
                    </View>
                ): (
                    <Features />
                )
            }

        </SafeAreaView>
    </View>
  )
}