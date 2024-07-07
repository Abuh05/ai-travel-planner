// app/CustomLayout.tsx

import React, { ReactNode } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

interface CustomLayoutProps {
  children: ReactNode;
}

export default function CustomLayout({ children }: CustomLayoutProps) {
  return (
    <GestureHandlerRootView style={styles.container}>
      {children}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
