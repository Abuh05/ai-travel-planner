import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import moment from 'moment';
import { Colors } from '../../constants/Colors';
import UserTripCard from './UserTripCard';
import { useRouter } from 'expo-router';

export default function UserTripList({ userTrips }) {
  const router=useRouter();

  if (!userTrips || userTrips.length === 0) {
    return null; // or any fallback UI
  }

  let LatestTrip;
  try {
    console.log("Raw tripData:", userTrips[0].tripData); // Debugging line
    LatestTrip = JSON.parse(userTrips[0].tripData);
    console.log("Parsed LatestTrip:", LatestTrip); // Debugging line
  } catch (error) {
    console.error('Error parsing tripData:', error);
    return null; // or handle the error as needed
  }

  return (
    <View>
      <View style={{ marginTop: 20 }}>
        {LatestTrip?.locationInfo.photoref?
          <Image source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+LatestTrip.locationInfo.photoref +'&key='
            +process.env.EXPO_PUBLIC_GOOGLE_MAP_API}} 

            style={{
              width: '100%',
              height: 200,
              resizeMode: 'cover',
              borderRadius: 15,
            }}
             />
             :
        <Image
          source={require('./../../assets/images/login.jpg')}
          style={{
            width: '100%',
            height: 200,
            resizeMode: 'cover',
            borderRadius: 15,
          }}
        />}
        <View style={{
          marginTop:20
        }}>
          <Text style={{
            fontFamily:'out-fit-medium',
            fontSize:24
          }}>{LatestTrip.locationInfo.name}</Text>
        </View>
        <View style={{
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between',
          marginTop:5
        }}>
          <Text style={{
            fontFamily:'outfit',
            fontSize:17,
            color:Colors.Grey
          }}>{moment(LatestTrip?.startDate).format('DD MMM yyy')}</Text>
          <Text style={{
            fontFamily:'outfit',
            fontSize:17,
            color:Colors.Grey
          }}>💑 {LatestTrip?.traveler.title}</Text>
        </View>
        <TouchableOpacity
        onPress={()=>router.push({pathname:'/trip-detail', params:{
          trip:JSON.stringify(UserTripList[0])
        }})}
        style={{
          backgroundColor:Colors.Primary,
          borderRadius:15,
          padding:10,
          marginTop:10
        }}>
          <Text style={{
            color:Colors.White,
            fontFamily:'outfit',
            textAlign:'center'
          }}>See Your Plan</Text>
        </TouchableOpacity>

        {userTrips.map((trip,index)=>(
            <UserTripCard trip={trip} key={index}/>
        ))}
      </View>
    </View>
  );
}
