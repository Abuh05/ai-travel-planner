import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CustomLayout from "./CustomLayout";
import {CreateTripContext} from './../context/CreateTripContext'
import { useState } from "react";

export default function RootLayout() {

  const [tripData, setTripData]=useState([]);

  useFonts({
    'outfit': require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),

  })
  return (
    <CreateTripContext.Provider value={{tripData,setTripData}}>
    <Stack screenOptions={{
      headerShown: false
    }}>
     <CustomLayout>
     <Stack.Screen name="(tabs)" />
    </CustomLayout>
    </Stack>
    </CreateTripContext.Provider>
  );
}
