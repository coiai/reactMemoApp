import React, { useState } from 'react';
import {
  View, Text, TextInput, KeyboardAvoidingView, StyleSheet, TouchableOpacity
} from 'react-native';

import Button from '../components/Button';

export default function SifnUpScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>アカウント登録</Text>
        <TextInput
          style={styles.input}
          value={email}
          // onChangeText はコールバック関数として入力した文章をTextに入れられる
          // コールバック関数 イベントが起こるたびに実行される関数のこと
          onChangeText={(text) => { setEmail(text); }}
          // 最初を大文字にしない
          autoCapitalize="None"
          // キーボードの見た目が変わる @マーク付きのキーボードが出る
          keyboardType="email-address"
          // プレースホルダーの実装
          placeholder="メールアドレス"
          // iOSではキーチェーンから取ってきてくれる
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => { setPassword(text); }}
          placeholder="パスワード"
          // type="password"の実装
          secureTextEntry
          // iOSではキーチェーンから取ってきてくれる
          textContentType="password"
        />
        <View style={styles.button_position} onPress={() => { navigation.navigate('Login'); }}>
          <Button
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'MemoList' }],
              });
            }}
          >
            とうろく
          </Button>
        </View>
        <View style={styles.footerLink}>
          <Text style={styles.subText}> アカウントをお持ちの方は</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
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
