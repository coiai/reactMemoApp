import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { getFirestore, collection, doc, onSnapshot } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogoutButton';

export default function MemoListScreen(props) {
  const { navigation } = props;
  const [memos, setMemos] = useState([]);
  const db = getFirestore();
  // 現在のユーザー情報を取得
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  useEffect(() => {
    const q = collection(db, `users/${user.uid}/memos`);
    // このif文は万が一ログインのセッションが切れてしまった時の対策
    let unsubscribe = () => {};
    if (user) {
      unsubscribe = onSnapshot(q, (snapshot) => {
        const userMemos = [];
        snapshot.forEach((doc) => {
          console.log(doc.id, doc.data());
          const data = doc.data();
          userMemos.push({
            id: doc.id,
            title: data.title,
            bodyText: data.bodyText,
            // .toDate()でDate型に変換できる
            updatedAt: data.updatedAt,
          });
        });
        setMemos(userMemos);
      }, (error) => {
        // もしsnapshotがうまくいかなかった場合の保険
        console.log(error);
        Alert.alert('データの読み込みに失敗しました');
      });
    }
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <MemoList memos={memos}/>
      <CircleButton onPress={() => { navigation.navigate('MemoCreate'); }}>
        <AntDesign name="plus" size={24} color="#1E1E1F" />
      </CircleButton>
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
