import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import AppBar from '../components/AppBar';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';

export default function MemoListScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <MemoList />
      <CircleButton><AntDesign name="plus" size={24} color="#1E1E1F" /></CircleButton>
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
