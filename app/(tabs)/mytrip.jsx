// app/screens/MyTrip.tsx

import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Colors } from './../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import StartNewTripCard from '../../components/MyTrip/StartNewTripCard';

export default function MyTrip() {
  const [userTrips, setUserTrips] = useState([]);

  return (
    <View style={{
      padding: 25,
      paddingTop: 55,
      backgroundColor: Colors.White,
      height: '100%',
    }}>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Text style={{
          fontFamily: 'outfit-bold',
          fontSize: 30,
        }}>MyTrip</Text>
        <Ionicons name="add-circle" size={45} color="black" />
      </View>
      {userTrips.length === 0 ? <StartNewTripCard /> : null}
    </View>
  );
}
