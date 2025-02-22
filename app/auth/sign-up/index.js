import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid  } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../../constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import {auth} from './../../../configs/FirebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth';


export default function SignUp() {
    const navigation = useNavigation();
    const router=useRouter();

    const [email, setEmail]=useState();
    const [password, setPassword]=useState();
    const [fullName, setFullName]=useState()

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, []);


 const OnCreateAccount=()=>{
    if(!email&&!password&&!fullName)
        {
            ToastAndroid.show('Please enter all details',ToastAndroid.BOTTOM);
            return;
        }
        
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    ToastAndroid.show('Account Created Successfully', ToastAndroid.LONG);
    router.replace('/mytrip')
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
 }


    return (
        <View style={{
            padding: 25,
            paddingTop:50,
            backgroundColor:Colors.White,
            height:'100%'
        }}>
            <TouchableOpacity onPress={()=>router.back()}>
      <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 30,
                marginTop:30
            }}>Create New Account</Text>
            {/* FullName */}
            <View style={{
                marginTop: 50
            }}>
                <Text>FullName</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(value)=>setFullName(value)}
                    placeholder='Enter FullName' 
                    />
            </View>

            {/* Email */}
            <View style={{
                marginTop: 20
            }}>
                <Text>Email</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(value)=>setEmail(value)}
                    placeholder='Enter Email' />
            </View>
            {/* Password */}
            <View style={{
                marginTop: 20
            }}>
                <Text>Password</Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={(value)=>setPassword(value)}
                    placeholder='Password' />
            </View>
            {/* Sign In */}
            <TouchableOpacity onPress={OnCreateAccount} style={{
                padding: 20,
                backgroundColor: Colors.Primary,
                borderRadius: 15,
                marginTop: 50,
            }}>
                <Text style={{
                    color: Colors.White,
                    textAlign: 'center',
                    fontSize: 17
                }}>Create Account</Text>
            </TouchableOpacity>

            {/* Create account Button */}
            <TouchableOpacity
                onPress={() => router.replace('auth/sign-in')}
                style={{
                    padding: 20,
                    backgroundColor: Colors.White,
                    borderRadius: 15,
                    marginTop: 20,
                    borderWidth: 1
                }}>
                <Text style={{
                    color: Colors.Primary,
                    textAlign: 'center',
                    fontSize: 17
                }}>Sign In</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    input:{
        padding:15,
        borderWidth:1,
        borderRadius:15,
        borderColor:Colors.Grey,
    }
})