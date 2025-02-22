import { View, Text } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/Colors';

export default function OptionCard({ option, selectedOption }) {
    return (
        <View style={[{
            padding: 20,
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            backgroundColor: Colors.Light_Grey,
            borderRadius: 15
        }, selectedOption?.id === option?.id && { borderWidth: 2, borderColor: Colors.Primary }]}>
            <View>
                <Text style={{
                    fontFamily: 'outfit-bold',
                    fontSize: 20
                }}>{option?.title}</Text>
                <Text style={{
                    fontFamily: 'outfit',
                    fontSize: 16
                }}>{option?.desc}</Text>
            </View>
            <Text style={{
                fontSize: 30
            }}>
                {option?.icon}
            </Text>
        </View>
    );
}
