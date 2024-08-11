import { View, Text, FlatList, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigation } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { SelectTravelerList } from '../../constants/Options';
import OptionCard from '../../components/CreateTrip/OptionCard';
import { CreateTripContext } from '../../context/CreateTripContext';


export default function SelectTraveler() {
    const navigation = useNavigation();
  const [selectedTraveler,setSelectedTraveler]=useState();
  const { tripData, setTripData } = useContext(CreateTripContext)
  
    useEffect(() => {
      navigation.setOptions({
        headerShown: true,
        headerTransparent: true,
        headerTitle: ''
      })
    }, []);

    useEffect(()=>{
        setTripData({
            ...tripData,
            traveler:selectedTraveler
        })
    },[selectedTraveler]);


    const OnSelect =()=>{
        if(!selectedTraveler)
        {
            ToastAndroid.show('Please select a Traveler', ToastAndroid.LONG)
            return;
        }
    }
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
        marginTop:30
      }}>Who's is Traveling</Text>

      <View style={{
        marginTop:20
      }}>
        <Text style={{
            fontFamily:'outfit-bold',
            fontSize:20
        }}>Choose your traveler's</Text>
        
        <FlatList
        data={SelectTravelerList}
          keyExtractor={(item) => item.id} 
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>setSelectedTraveler(item)}
              style={{
                marginVertical: 10
              }}
        >
            <OptionCard option={item} selectedOption={selectedTraveler}/>
        </TouchableOpacity>

        )}
        />
       
      </View>
        <TouchableOpacity 
        onPress={OnSelect}
        style={{
            padding:15,
            backgroundColor:Colors.Primary,
            borderRadius:15,
            marginTop:20
        }}>
            <Link href={'/create-trip/select-dates'}
            style={{
                width:'100%',
                textAlign:'center'
            }}
            >
            <Text style={{
                color:Colors.White,
                textAlign:'center',
                fontFamily:'outfit-medium',
                fontSize:17
            }}>Continue</Text>
            </Link>
        </TouchableOpacity>
    </View>
  )
}