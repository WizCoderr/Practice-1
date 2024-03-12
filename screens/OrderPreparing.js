import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Image, Text, View } from 'react-native'

export default function OrderPreparing() {
    const navigation = useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
            // move to the delivery screen
            navigation.navigate('Delivery');
        },3000)
    },[])
  return (
    <View className="flex-1 bg-white justify-center items-center">
        <Image className="h-80 w-80 bg-cyan-300"/>
    </View>
  )
}
