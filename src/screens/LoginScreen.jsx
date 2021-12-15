import React from 'react';
import {
  View, Text, TextInput, KeyboardAvoidingView, StyleSheet, TouchableOpacity
} from 'react-native';

import Button from '../components/Button';

export default function LoginScreen(props) {
  const { navigation } = props;
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>ログイン</Text>
        <TextInput style={styles.input} value="メールアドレス" />
        <TextInput style={styles.input} value="パスワード" />
        <View style={styles.button_position}>
          <Button
            // 以下の書き方で履歴をリセットする
            // 履歴の上書きを起こしている
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'MemoList' }],
              });
            }}
          >
            ログイン
          </Button>
        </View>
        <View style={styles.footerLink}>
          <Text style={styles.subText}> 登録していなかたはこちら</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'SignUp' }],
              });
            }}
          >
            <Text style={[styles.subText, styles.link]}> こちら</Text>
          </TouchableOpacity>
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
