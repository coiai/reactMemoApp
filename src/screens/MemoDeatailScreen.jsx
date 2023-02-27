import React, { useEffect, useState } from 'react';
import {
  View, Text, TextInput, ScrollView, KeyboardAvoidingView, StyleSheet,
} from 'react-native';
import { string, shape } from 'prop-types';
import { getFirestore, collection, doc, onSnapshot } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import CircleButton from '../components/CircleButton';

export default function MemoDetailScreen(props) {
  // route で親ページの情報をもらえる
  const { navigation, route } = props;
  const { id } = route.params;
  console.log(id);
  const [memo, setMemo] = useState(null);

  useEffect(() => {
    // 現在のユーザー情報を取得
    const db = getFirestore();
    const auth = getAuth();
    const user = auth.currentUser;
    const q = collection(db, `users/${user.uid}/memos`);
    onSnapshot(doc(q, id), (snapshot) => {
      console.log(snapshot.id, snapshot.data());
      const data = snapshot.data();
      setMemo({
        id: doc.id,
        title: data.title,
        bodyText: data.bodyText,
        updatedAt: data.updatedAt,
      });
    });
  }, []);

  return (
    <KeyboardAvoidingView behavior="hight" style={styles.container}>
      <ScrollView>
        <View style={styles.titleBox}>
          <TextInput multiline value={memo && memo.title} style={styles.titleBox__title} />
          <Text style={styles.titleBox__time}>{memo && String(memo.updatedAt)}</Text>
        </View>
        <View style={styles.contentBox}>
          <TextInput value={memo && memo.bodyText} multiline style={styles.contentBox__text} />
        </View>
      </ScrollView>
      <CircleButton onPress={() => { navigation.navigate('MemoCreate'); }}>✏️</CircleButton>
    </KeyboardAvoidingView>
  );
}

MemoDetailScreen.protoTypes = {
  route: shape({
    parmas: shape({ id: string }),
  }).isRequired,
};

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
