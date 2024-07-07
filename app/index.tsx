// index.tsx

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Login from './../components/Login';
import { auth } from './../configs/FirebaseConfig';
import { Redirect } from 'expo-router';

export default function Index() {
  const user = auth.currentUser;

  return (
    <GestureHandlerRootView style={styles.container}>
      <View>
        {user ? (
          <Redirect href={'/mytrip'} />
        ) : (
          <Login />
        )}
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
