// components/MyTrip/StartNewTripCard.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';

export default function StartNewTripCard() {
const router=useRouter();

  return (
    <View style={styles.container}>
      <Ionicons name="location-sharp" size={27} color="black" />
      <Text style={styles.title}>No trips planned yet</Text>
      <Text style={styles.description}>
        Looks like it's time to plan a new travel experience. Get Started below
      </Text>
      <TouchableOpacity 
       onPress={()=>router.push('/create-trip/search-place')}
      style={styles.button}>
        <Text style={styles.buttonText}>Start a New Trip</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
    display: 'flex',
    alignItems: 'center',
    gap: 20,
  },
  title: {
    fontSize: 25,
    fontFamily: 'outfit-medium',
  },
  description: {
    fontSize: 20,
    fontFamily: 'outfit',
    textAlign: 'center',
    color: Colors.Grey,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.Primary,
    borderRadius: 15,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: 'white',
  },
});
