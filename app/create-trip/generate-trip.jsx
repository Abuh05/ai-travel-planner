import { View, Text, Image } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { Colors } from '../../constants/Colors';
import { CreateTripContext } from '../../context/CreateTripContext';
import { AI_PROMPT } from '../../constants/Options';
import { chatSession } from '../../configs/AiModel';
import { auth, db } from './../../configs/FirebaseConfig';
import { useRouter } from 'expo-router';
import { setDoc, doc } from 'firebase/firestore';

export default function GenerateTrip() {
    const { tripData, setTripData } = useContext(CreateTripContext);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const user = auth.currentUser;

    useEffect(() => {
        if (tripData) {
            GenerateAiTrip();
        }
    }, [tripData]);

    const GenerateAiTrip = async () => {
        setIsLoading(true);

        try {
            const FINAL_PROMPT = AI_PROMPT
                .replace('{location}', tripData?.locationInfo?.name)
                .replace('{totalDays}', tripData?.totalNoOfDays)
                .replace('{totalNights}', tripData?.totalNoOfDays - 1)
                .replace('{traveler}', tripData?.traveler?.title)
                .replace('{budget}', tripData?.budget);

            console.log(FINAL_PROMPT);
            const result = await chatSession.sendMessage(FINAL_PROMPT);
            const tripResp = JSON.parse(result.response.text());

            const docId = Date.now().toString();
            await setDoc(doc(db, 'UserTrip', docId), {
                userEmail: user.email,
                tripPlan: tripResp,
                tripData:JSON.stringify(tripData),
                docId:docId
            });

            router.push('(tabs)/mytrip');
        } catch (error) {
            console.error("Error generating trip: ", error);
        } finally {
            setIsLoading(false);
        }
    };

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
                textAlign: 'center'
            }}>Please Wait</Text>
            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 20,
                textAlign: 'center',
                marginTop: 40
            }}>We are working to generate your dream trip</Text>
            <Image source={require('./../../assets/images/planee.gif')}
                style={{
                    width: '100%',
                    height: 200,
                    objectFit: 'contain',
                    marginTop: 30
                }}
            />
            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 20,
                color: Colors.Grey,
                textAlign: 'center',
                marginTop: 30,
            }}>Do not Go Back</Text>
        </View>
    );
}
