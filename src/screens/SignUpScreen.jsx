import React from 'react';
import {
  View, Text, TextInput, KeyboardAvoidingView, StyleSheet,
} from 'react-native';

import AppBar from '../components/AppBar';
import Button from '../components/Button';

export default function LoginScreen() {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <AppBar />
      <View style={styles.main}>
        <Text style={styles.title}>アカウント登録</Text>
        <TextInput style={styles.input} value="メールアドレス" />
        <TextInput style={styles.input} value="パスワード" />
        <View style={styles.button_position}>
          <Button>とうろく</Button>
        </View>
        <View style={styles.footerLink}>
          <Text style={styles.subText}> アカウントをお持ちの方は</Text>
          <Text style={[styles.subText, styles.link]}> こちら</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  input: {
    color: '#585959',
    borderColor: '#cccccc',
    borderRadius: 4,
    borderWidth: 1,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 18,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 8,
    color: '#585959',
    fontSize: 16,
    fontWeight: 'bold',
    height: 44,
    lineHeight: 44,
    width: 200,
    textAlign: 'center',

    shadowColor: '#111',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
  button_position: {
    marginTop: 32,
    alignItems: 'center',
  },
  footerLink: {
    flexDirection: 'row',
  },
  subText: {
    marginTop: 16,
    fontSize: 14,
    color: '#585959',
  },
  link: {
    color: 'blue',
  },
});
