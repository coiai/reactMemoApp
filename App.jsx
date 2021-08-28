import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppBar from './src/components/AppBar';
import MemoList from './src/components/MemoList';
import CircleButton from './src/components/CircleButton';

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar />
      <MemoList />
      <CircleButton>+</CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1 の指定で画面いっぱいに広がるということ また標準で縦並びになる
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  appbar: {
    backgroundColor: '#1E1E1F',
    height: 100,
    width: '100%',
    justifyContent: 'flex-end',
  },
});
