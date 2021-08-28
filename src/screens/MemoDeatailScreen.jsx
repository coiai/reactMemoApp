import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

export default function MemoDetailScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <ScrollView >
        <View style={styles.titleBox}>
          <Text style={styles.titleBox__title}>買い物リスト</Text>
          <Text style={styles.titleBox__time}>2020/08/28</Text>
        </View>
        <View style={styles.contentBox}>
          <Text style={styles.contentBox__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit amet omnis ut iure praesentium odit iste nesciunt suscipit ab ducimus recusandae laudantium alias magnam eos et, ipsa unde blanditiis quisquam quaerat esse, vel dicta quis itaque. Rerum nostrum at architecto, voluptatum obcaecati quis dicta itaque eum quibusdam accusantium excepturi assumenda!</Text>
        </View>
      </ScrollView>
      <CircleButton>✏️</CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffffc',
  },
  titleBox: {
    borderBottomWidth: 1,
    borderBottomColor: '#c7c7c7',
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  titleBox__title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 4,
  },
  titleBox__time: {
    color: '#585959',
    fontSize: 14,
    marginTop: 8,
  },
  contentBox: {
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  contentBox__text: {
    color: '#1E1E1F',
    fontSize: 16,
    lineHeight: 24,
  },
});
