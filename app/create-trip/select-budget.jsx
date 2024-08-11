import { View, Text, FlatList, TouchableOpacity, ToastAndroid } from 'react-native';
import React, {useContext, useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';
import OptionCard from '../../components/CreateTrip/OptionCard';
import { SelectTravelerList, SelectBudgetOptions } from './../../constants/Options';
import { CreateTripContext } from '../../context/CreateTripContext';

export default function SelectBudget() {
    const navigation = useNavigation();
    const [selectedOption, setSelectedOption] = useState(null);
    const { tripData, setTripData } = useContext(CreateTripContext)
    const router=useRouter();
    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ''
        });
    }, []);

    useEffect(()=>{
        selectedOption&&setTripData({
            ...tripData,
            budget:selectedOption?.title,
            budgetDesc:selectedOption?.desc
        })
    },[selectedOption]);


    const onClickContinue=()=>{
        if(!selectedOption)
        {
            ToastAndroid.show('Select Your Budget',ToastAndroid.LONG)
            return;
        }
        router.push('/create-trip/review-trip')
    }

    return (
        <View style={{
            padding: 25,
            paddingTop: 75,
            backgroundColor: Colors.White,
            height: '100%'
        }}>
            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 35,
                marginTop: 35
            }}>Budget</Text>

            <View style={{
                marginTop: 20
            }}>
                <Text style={{
                    fontFamily: 'outfit-bold',
                    fontSize: 18
                }}>Choose spending habit for your trip</Text>

                <FlatList
                    data={SelectBudgetOptions}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => setSelectedOption(item)}
                            style={{
                                marginVertical: 10
                            }}
                        >
                            <OptionCard option={item} selectedOption={selectedOption} />
                        </TouchableOpacity>
                    )}
                />
            </View>
            <TouchableOpacity 
                onPress={()=>onClickContinue()}
        style={{
            padding:15,
            backgroundColor:Colors.Primary,
            borderRadius:15,
            marginTop:20
        }}>
            <Text style={{
                color:Colors.White,
                textAlign:'center',
                fontFamily:'outfit-medium',
                fontSize:17
            }}>Continue</Text>
      
        </TouchableOpacity>
        </View>
    );
}
