import { View, Text, Image } from 'react-native';
import React from 'react';
import moment from 'moment';
import { Colors } from '../../constants/Colors';

export default function UserTripCard({ trip }) {
    const tripData = trip?.tripData ? JSON.parse(trip.tripData) : null;
    const locationName = tripData?.locationInfo?.name;
    const locationPhoto = tripData?.locationInfo?.photoref;
    const date = tripData?.startDate;
    const title = tripData?.traveler.title;

    return (
        <View style={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center'
        }}>

            <Image source={{
                uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=' + locationPhoto + '&key='
                    + process.env.EXPO_PUBLIC_GOOGLE_MAP_API
            }}

                style={{
                    width: 100,
                    height: 100,
                    resizeMode: 'cover',
                    borderRadius: 15,
                }}
            />
            {/* <Image
                source={require('./../../assets/images/login.jpg')}
                style={{
                    width: 100,
                    height: 100,
                    resizeMode: 'cover',
                  
                }}
            /> */}
            <View>
                <Text style={{
                    fontFamily: 'outfit-medium',
                    fontSize: 18
                }}>{locationName}</Text>
                <Text style={{
                    fontFamily: 'outfit',
                    fontSize: 18,
                    color: Colors.Grey
                }}>{moment(date).format('DD MMM yyy')}</Text>
                <Text style={{
                    fontFamily: 'outfit',
                    fontSize: 18,
                    color: Colors.Grey
                }}>{title}</Text>
            </View>


        </View>
    );
}
