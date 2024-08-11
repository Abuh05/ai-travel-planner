// app/tabs/TabLayout.tsx

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Tabs } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Tabs screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.Primary
            }}>
                <Tabs.Screen name='mytrip'
                    options={{
                        tabBarLabel: 'My Trip',
                        tabBarIcon: ({ color }) => <Ionicons name="location-sharp" size={24} color={color} />
                    }}
                />
                <Tabs.Screen name='discover'
                    options={{
                        tabBarLabel: 'Discover',
                        tabBarIcon: ({ color }) => <Ionicons name="globe-sharp" size={24} color={color} />
                    }}
                />
                <Tabs.Screen name='profile'
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color }) => <Ionicons name="people-circle" size={24} color={color} />
                    }}
                />
            </Tabs>
        </GestureHandlerRootView>
    )
}
