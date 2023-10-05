import { View, Text, Image, ScrollView, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Features from '../components/features';
import { dummyMessages } from '../constants';

export default function HomeScreen() {
    const [messages, setMessages] = useState(dummyMessages);
    const [recording, setRecording] = useState(false);
    const [speaking, setSpeaking ] = useState(false);

    const clear = ()=> {
        setMessages([]);
    }

    const stop = ()=> {
        setSpeaking(false);
    }

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
            {/*recording, clear and stop button*/}
            <View className="flex justify-center items-center">
                {
                    recording?(
                        <TouchableOpacity>
                            <Image
                                className="rounded-full"
                                source={require('../../assets/img/voiceLoading.gif')}
                                style={{width:hp(10), height:hp(10)}}
                            />
                        </TouchableOpacity>
                    ):(
                        <TouchableOpacity>
                            <Image
                                className="rounded-full"
                                source={require('../../assets/img/recordingIcon.png')}
                                style={{width:hp(10), height:hp(10)}}
                            />
                        </TouchableOpacity>
                    )
                }

                {
                    messages.length>0 && (
                        <TouchableOpacity
                            onPress={clear}
                            className="bg-neutral-400 rounded-3xl p-2 absolute right-10"
                        >
                            <Text className="text-white font-semibold">Clear</Text>

                        </TouchableOpacity>
                    )
                }
                
                {
                    speaking && (
                        <TouchableOpacity
                            onPress={stop}
                            className="bg-red-400 rounded-3xl p-2 absolute left-10"
                        >
                            <Text className="text-white font-semibold">Stop</Text>

                        </TouchableOpacity>
                    )
                }
                
            </View>
        </SafeAreaView>
    </View>
  )
}