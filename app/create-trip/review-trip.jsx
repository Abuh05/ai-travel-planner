import { View, Text,TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { router, useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { CreateTripContext } from '../../context/CreateTripContext';
import moment from 'moment';

export default function ReviewTrip() {
    const navigation=useNavigation();
    const { tripData, setTripData } = useContext(CreateTripContext)
    const router=useRouter();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ''
        });
    }, []);

  return (
    <View style={{
        padding:25,
        paddingTop:75,
        backgroundColor:Colors.White,
        height:'100%'
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:35,
        marginTop:20,
      }}>Review Your Trip</Text>
      <View style={{
        marginTop:20
      }}>
        <Text style={{
            fontFamily:'outfit-bold',
            fontSize:20
        }}>Before generating your trip, please kindly review your selection</Text>

{/* Destination */}
        <View style={{
            marginTop:40,
            display:'flex',
            flexDirection:'row',
            gap:20
        }}>
       <Text style={{
        fontSize:34
       }}>📍</Text>
        <View>
            <Text style={{
                fontFamily:'outfit-bold',
                fontSize:15,
                color:Colors.Grey
            }}>Destination</Text>
            <Text style={{
            
                fontFamily:'outfit-medium',
                fontSize:20
            }}>{tripData.locationInfo?.name}</Text>
        </View>

        
        </View>
        {/* Travel Date */}
        <View style={{
            marginTop:20,
            display:'flex',
            flexDirection:'row',
            gap:20
        }}>
       <Text style={{
        fontSize:34
       }}>📅</Text>
        <View>
            <Text style={{
                fontFamily:'outfit-bold',
                fontSize:15,
                color:Colors.Grey
            }}>Travel Date</Text>
            <Text style={{
                
                fontFamily:'outfit-medium',
                fontSize:20
            }}>{`${moment(tripData?.startDate).format('DD MMM')} - ${moment(tripData?.endDate).format('DD MMM')} (${tripData?.totalNoOfDays} Days)`}</Text>
        </View>
        </View>
         {/* Traveler */}
         <View style={{
            marginTop:20,
            display:'flex',
            flexDirection:'row',
            gap:20
        }}>
       <Text style={{
        fontSize:34
       }}>🚃</Text>
        <View>
            <Text style={{
                fontFamily:'outfit-bold',
                fontSize:15,
                color:Colors.Grey
            }}>Who is Traveling</Text>
            <Text style={{
                
                fontFamily:'outfit-medium',
                fontSize:20
            }}>{tripData?.traveler?.title}</Text>
        </View>
        </View>

        {/* Traveler */}
        <View style={{
            marginTop:20,
            display:'flex',
            flexDirection:'row',
            gap:20
        }}>
       <Text style={{
        fontSize:34
       }}>💰</Text>
        <View>
            <Text style={{
                fontFamily:'outfit-bold',
                fontSize:15,
                color:Colors.Grey
            }}>Budget</Text>
            <Text style={{
                
                fontFamily:'outfit-medium',
                fontSize:20
            }}>{tripData?.budget}</Text>
        </View>
        </View>
        <TouchableOpacity 
                onPress={()=>router.replace('/create-trip/generate-trip')}
        style={{
            padding:15,
            backgroundColor:Colors.Primary,
            borderRadius:15,
            marginTop:80
        }}>
            <Text style={{
                color:Colors.White,
                textAlign:'center',
                fontFamily:'outfit-medium',
                fontSize:17
            }}>Build My Trip</Text>
      
        </TouchableOpacity>
      </View>
    </View>
  )
}