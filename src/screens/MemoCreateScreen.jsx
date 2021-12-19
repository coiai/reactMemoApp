import React, { useState } from 'react';
import {
  View, Text, TextInput, ScrollView, KeyboardAvoidingView, StyleSheet,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import CircleButton from '../components/CircleButton';

export default function MemoCreateScreen(props) {
  const { navigation } = props;
  const [bodyText, setBodyText] = useState('');
  const [title, setTitle] = useState('');
  // データベースにデータを保存する
  const db = getFirestore();
  // 現在のユーザー情報を取得
  const auth = getAuth();
  const user = auth.currentUser;

  const handlePress = () => {
    addDoc(collection(db, `users/${user.uid}/memos`), {
      // bodyText: 'これは本文です',
      // bodyText: bodyText の時 bodyText というふうにまとめて書くことができる
      title,
      bodyText,
      // JSではDate型だが、Firebaseに入れるとタイムスタンプ型に変換されるので注意
      updatedAt: new Date(),
    })
      .then((docRef) => {
        console.log('作成！', docRef.id);
        navigation.goBack();
      })
      .catch((error) => {
        console.log('エラー', error);
      });
  };

  return (
    <KeyboardAvoidingView behavior="hight" style={styles.container}>
      <ScrollView>
        <View style={styles.titleBox}>
          <TextInput
            multiline
            placeholder="タイトルを入力"
            value={title}
            style={styles.titleBox__title}
            onChangeText={(text) => { setTitle(text); }}
            // 追加ページに入った瞬間にキーボードが立ち上がるようになる
            autoFocus
          />
          <Text style={styles.titleBox__time}>2020/08/28</Text>
        </View>
        <View style={styles.contentBox}>
          <TextInput
            value={bodyText}
            placeholder="本文を入力"
            multiline
            style={styles.contentBox__text}
            onChangeText={(text) => { setBodyText(text); }}
          />
        </View>
      </ScrollView>
      <CircleButton onPress={handlePress}>
        <AntDesign name="check" size={24} color="black" />
      </CircleButton>
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
