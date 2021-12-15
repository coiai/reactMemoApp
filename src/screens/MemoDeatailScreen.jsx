import React from 'react';
import {
  View, Text, TextInput, ScrollView, KeyboardAvoidingView, StyleSheet,
} from 'react-native';

import CircleButton from '../components/CircleButton';

export default function MemoDetailScreen(props) {
  const { navigation } = props;
  return (
    <KeyboardAvoidingView behavior="hight" style={styles.container}>
      <ScrollView>
        <View style={styles.titleBox}>
          <TextInput multiline value="買い物リスト買い物リスト買い物リスト買い物リスト" style={styles.titleBox__title} />
          <Text style={styles.titleBox__time}>2020/08/28</Text>
        </View>
        <View style={styles.contentBox}>
          <TextInput value="買い物リスト" multiline style={styles.contentBox__text} />
        </View>
      </ScrollView>
      <CircleButton onPress={() => { navigation.navigate('MemoCreate'); }}>✏️</CircleButton>
    </KeyboardAvoidingView>
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
    textAlignVertical: 'top',
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
    minHeight: 600,
    lineHeight: 24,
    textAlignVertical: 'top',
  },
});
