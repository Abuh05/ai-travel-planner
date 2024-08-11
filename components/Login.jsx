import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

export default function Login() {

    const router=useRouter();
  return (
    <View>
     <Image source={(require('./../assets/images/login.jpg'))}
        style={{
            width:'100%',
            height:450
        }}
     />
      <View style={styles.container}>
        <Text style={{
            fontSize:25,
            fontFamily:'outfit-bold',
             textAlign:'center',
             marginTop:10
        }}>
            African AI Travel Planner
        </Text>

        <Text style={{
            fontFamily:'outfit',
            fontSize:16,
            textAlign:'center',
            color:Colors.Grey,
            marginTop:20
        }}>Discover your next adventure effortlessly.
        Personalized interaries at your fingertips. 
        Travel smarter with AI-driven insights </Text>
        <TouchableOpacity style={styles.button}
        onPress={()=>router.push('auth/sign-in')}
        >    
        <Text
         style={{
            textAlign:'center',
            fontFamily:'outfit-medium',
            color:Colors.White,
            fontSize:17

         }}
        >Get Started</Text>
     </TouchableOpacity>
     </View>
     
    </View>
   
  )
}



const styles = StyleSheet.create({
        container:{
            backgroundColor:Colors.White,
            marginTop:-20,
            borderTopRightRadius:30,
            borderTopLeftRadius:30,
            height:'100%',
            padding:25
        },
        button:{
            padding:15,
            backgroundColor:Colors.Primary,
            borderRadius:99,
            marginTop:'20%'
        }
})