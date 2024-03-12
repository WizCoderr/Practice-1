import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import RestaurantScreen from "../screens/RestaurantScreen";
import CartScreen from "../screens/CartScreen";
import OrderPreparing from "../screens/OrderPreparing";
import DeliveryScreen from "../screens/DeliveryScreen";

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="Cart" options={{presentation: 'modal'}} component={CartScreen} />
        <Stack.Screen name="Order" options={{presentation: 'fullScreenModal'}} component={OrderPreparing} />
        <Stack.Screen name="Delivery" options={{presentation: 'fullScreenModal'}} component={DeliveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
