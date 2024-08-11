import { View, Text, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from './../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import StartNewTripCard from '../../components/MyTrip/StartNewTripCard';
import { db, auth } from './../../configs/FirebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import UserTripList from '../../components/MyTrip/UserTripList';
import { router, useRouter } from 'expo-router';

export default function MyTrip() {
  const [userTrips, setUserTrips] = useState([]);
  const user = auth.currentUser;
  const [isLoading, setIsLoading] = useState(false);
  const router=useRouter();

  useEffect(() => {
    if (user) {
      GetMyTrips();
    }
  }, [user]);

  const GetMyTrips = async () => {
    setIsLoading(true);
    setUserTrips([]);
    try {
      const q = query(collection(db, 'UserTrip'), where('userEmail', '==', user.email));
      const querySnapshot = await getDocs(q);
      const trips = [];
      querySnapshot.forEach((doc) => {
        trips.push(doc.data());
      });
      setUserTrips(trips);
    } catch (error) {
      console.error('Error fetching trips:', error);
    }
    setIsLoading(false);
  };

  return (
    <ScrollView
      style={{
        padding: 25,
        paddingTop: 55,
        backgroundColor: Colors.White,
        height: '100%',
      }}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontFamily: 'outfit-bold',
            fontSize: 30,
          }}
        >
          MyTrip
        </Text>
        <TouchableOpacity 
       onPress={()=>router.push('/create-trip/search-place')}
      >
       <Ionicons name="add-circle" size={45} color="black" />
      </TouchableOpacity>
        
      </View>
      {isLoading && <ActivityIndicator size={'large'} color={Colors.Primary} />}
      {userTrips.length === 0 ? <StartNewTripCard /> : <UserTripList userTrips={userTrips} />}
    </ScrollView>
  );
}
