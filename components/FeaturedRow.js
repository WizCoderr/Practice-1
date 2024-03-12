import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { themeColors } from '../theme'
import RestaurantCard from './RestaurantCard'

export default function FeaturedRow({title, description, restaurants}) {
  return (
    <View>
        <View className="flex-row justify-between items-center px-4">
            <View>
                <Text className="font-bold text-lg">{title}</Text>
                <Text className="text-gray-500 text-xs">{description}</Text>
            </View>
            <TouchableOpacity>
                <Text style={{color: themeColors.text}}>See All</Text>
            </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} 
        contentContainerStyle={{paddingHorizontal:150}} className="overflow-visible py-5">
            {
                restaurants.map((restaurants, index)=>{
                    return(
                        <RestaurantCard 
                        item={restaurants}
                        key={index}/>
                    )
                })
            }
        </ScrollView>
    </View>
  )
}
