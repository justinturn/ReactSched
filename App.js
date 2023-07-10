import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
 <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://axhaircoolers.com/wp-content/uploads/2022/01/Air-Coolers-Logo-a1.18.05.jpg',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 200,
    height: 50,
  },
});

