import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from './../../../constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './../../../configs/FirebaseConfig'

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, []);

  const OnSignInAccount = () => {
    if (!email || !password) {
      ToastAndroid.show('Please enter Email & Password', ToastAndroid.LONG);
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        ToastAndroid.show('Login Successfully', ToastAndroid.LONG);
        router.replace('/mytrip');
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        if (errorCode === 'auth/invalid-credential') {
          ToastAndroid.show('Invalid credentials', ToastAndroid.LONG);
        }
      });
  };

  return (
    <View style={{
      padding: 25,
      paddingTop: 40,
      backgroundColor: Colors.White,
      height: '100%'
    }}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 30,
        marginTop: 20
      }}>Let's Sign You In</Text>
      <Text style={{
        fontFamily: 'outfit',
        color: Colors.Grey,
        fontSize: 30,
        marginTop: 20
      }}>Welcome Back</Text>
      <Text style={{
        fontFamily: 'outfit',
        color: Colors.Grey,
        fontSize: 20,
        marginTop: 10
      }}>You've been Missed!</Text>

      <View style={{ marginTop: 50 }}>
        <Text>Email</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(value) => setEmail(value)}
            placeholder='Enter Email'
            value={email}
            keyboardType='email-address'
          />
        </View>
      </View>
      
      {/* Password */}
      <View style={{ marginTop: 20 }}>
        <Text>Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            secureTextEntry={!showPassword}
            style={styles.input}
            onChangeText={(value) => setPassword(value)}
            placeholder='Password'
            value={password}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.iconContainer}>
            <Ionicons 
              name={showPassword ? "eye-off" : "eye"} 
              size={24} 
              color={Colors.Grey} 
            />
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Sign In */}
      <TouchableOpacity onPress={OnSignInAccount} style={{
        padding: 20,
        backgroundColor: Colors.Primary,
        borderRadius: 15,
        marginTop: 50,
      }}>
        <Text style={{
          color: Colors.White,
          textAlign: 'center',
          fontSize: 17
        }}>Sign In</Text>
      </TouchableOpacity>

      {/* Create account Button */}
      <TouchableOpacity
        onPress={() => router.replace('auth/sign-up')}
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
        }}>Create Account</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.Grey,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.Grey,
  },
  iconContainer: {
    padding: 15,
  }
});
