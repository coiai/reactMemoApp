import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.appbar}>
      <View style={styles.appbar__textBox}>
        <Text style={styles.appbar__title}>CoiaiMemo</Text>
        <Text style={styles.appbar__logout}>Logout</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: '#1E1E1F',
    height: 100,
    width: '100%',
    justifyContent: 'flex-end',
  },
  appbar__textBox: {
    backgroundColor: '#1E1E1F',
    alignItems: 'center',
  },
  appbar__title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    margin: 8,
  },
  appbar__logout: {
    color: '#fff',
    position: 'absolute',
    right: 16,
    bottom: 8,
  },
});
