import React from "react";
import { View, Text, Image } from "react-native";
import { featured } from "../constants";
import MapView, { Marker } from "react-native-maps";
import { themeColors } from "../theme";

export default function DeliveryScreen() {
  const restaurant = featured.restaurants[0];
  return (
    <View className="flex-1">
      {/* map view */}
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType="stadard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
          }}
          title={restaurant.name}
          description={restaurant.description}
          pinColor={themeColors.bgColor(1)}
        />
      </MapView>
      <View className="rounded-t-3xl -mt-12 bg-white relative">
        <View className="flex-row justify-between px-5 pt-10">
            <View>
                <Text className="text-lg text-gray-700 font-semibold">
                    Estimated Arrival
                </Text>
                <Text className="text-3xl font-extrabold text-gray-700">20-30 Minutes</Text>
                <Text className="mt-2 font-semibold text-gray-700">Your Order on its way</Text>
            </View>
            <Image style={{backgroundColor: themeColors.bgColor(1)}} className="w-24 h-24"/>
        </View>
        <View style={{backgroundColor: themeColors.bgColor(0.8)}} className="p-2 flex-row justify-center items-center rounded-full my-5 mx-2">
            <View style={{backgroundColor: 'rgba(255,255,255,0.4)'}} className="p-1 rounded-full">
                <Image className="h-16 w-16 rounded-full bg-cyan-300"/>
            </View>
        </View>
      </View>
    </View>
  );
}
