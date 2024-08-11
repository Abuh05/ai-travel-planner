import { View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';

export default function TripDetail() {
  const navigation = useNavigation();
  const router = useRouter();
  const [tripDetails, setTripDetails] = useState(null);
  const [locationPhoto, setLocationPhoto] = useState(null);

  const { trip } = useLocalSearchParams();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: ''
    });

    // Check if trip and trip.tripData are available
    if (trip && trip.tripData) {
      try {
        const tripData = JSON.parse(trip.tripData);
        setTripDetails(tripData);
        setLocationPhoto(tripData?.locationInfo?.photoref);
      } catch (error) {
        console.error('Error parsing trip data:', error);
      }
    }
  }, [trip, navigation]);

  return (
    <View>
      {locationPhoto && (
        <Image
          source={{
            uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='
              + locationPhoto + '&key='
              + process.env.EXPO_PUBLIC_GOOGLE_MAP_API
          }}
          style={{
            width: '100%',
            height: 200,
            resizeMode: 'cover',
            borderRadius: 15,
          }}
        />
      )}
    </View>
  );
}
